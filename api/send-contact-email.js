import { sendGmailEmail } from "../lib/gmail.js";

const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#039;",
})[character]);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const body = req.body && typeof req.body === "object" ? req.body : {};
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const errors = {};

  if (name.length < 2) errors.name = "Name must be at least 2 characters";
  else if (name.length > 50) errors.name = "Name must not exceed 50 characters";
  else if (!/^[a-zA-Z\s'-]+$/.test(name)) errors.name = "Name can only contain letters, spaces, hyphens, and apostrophes";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please enter a valid email address";
  else if (email.length > 100) errors.email = "Email must not exceed 100 characters";

  if (phone) {
    if (!/^[\d\s\-+()]+$/.test(phone)) errors.phone = "Please enter a valid phone number";
    else if (phone.replace(/\D/g, "").length < 10 || phone.replace(/\D/g, "").length > 15) {
      errors.phone = "Phone number must contain 10 to 15 digits";
    }
  }

  if (message.length < 10) errors.message = "Message must be at least 10 characters";
  else if (message.length > 2000) errors.message = "Message must not exceed 2000 characters";

  if (Object.keys(errors).length) {
    return res.status(400).json({ success: false, error: "Validation failed", errors });
  }

  const escapedName = escapeHtml(name);
  const escapedEmail = escapeHtml(email);
  const escapedPhone = escapeHtml(phone);
  const escapedMessage = escapeHtml(message);

  try {
    const delivery = await sendGmailEmail({
      to: process.env.ADMIN_EMAIL || "002mikebaraiya@gmail.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `<h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${escapedName}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapedEmail}">${escapedEmail}</a></p>
        ${phone ? `<p><strong>Phone:</strong> ${escapedPhone}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${escapedMessage}</p>`,
    });

    return res.status(200).json({
      success: true,
      message: "Gmail SMTP accepted the message; this does not confirm inbox delivery.",
      emailId: delivery.messageId,
      acceptedRecipients: delivery.accepted,
      rejectedRecipients: delivery.rejected,
      smtpResponse: delivery.smtpResponse,
    });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return res.status(502).json({
      success: false,
      error: error instanceof Error ? error.message : "Unexpected email service error",
    });
  }
}