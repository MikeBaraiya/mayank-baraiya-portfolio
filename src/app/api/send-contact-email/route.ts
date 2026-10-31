import { sendGmailEmail } from "../../../../lib/gmail.js";

export const runtime = "nodejs";

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&#039;",
  "'": "&#039;",
})[character] ?? character);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const errors: Record<string, string> = {};

    if (name.length < 2) errors.name = "Name must be at least 2 characters";
    else if (name.length > 50) errors.name = "Name must not exceed 50 characters";
    else if (!/^[a-zA-Z\s'-]+$/.test(name)) errors.name = "Name can only contain letters, spaces, hyphens, and apostrophes";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please enter a valid email address";
    else if (email.length > 100) errors.email = "Email must not exceed 100 characters";

    if (phone && (!/^[\d\s()+-]+$/.test(phone) || phone.replace(/\D/g, "").length < 10 || phone.replace(/\D/g, "").length > 15)) {
      errors.phone = "Phone number must contain 10 to 15 digits";
    }

    if (message.length < 10) errors.message = "Message must be at least 10 characters";
    else if (message.length > 2000) errors.message = "Message must not exceed 2000 characters";

    if (Object.keys(errors).length) {
      return Response.json({ success: false, error: "Validation failed", errors }, { status: 400 });
    }

    const delivery = await sendGmailEmail({
      to: process.env.ADMIN_EMAIL || "002mikebaraiya@gmail.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `<h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
        <p><strong>Message:</strong></p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    });

    return Response.json({
      success: true,
      message: "Gmail SMTP accepted the message; this does not confirm inbox delivery.",
      emailId: delivery.messageId,
    });
  } catch (error) {
    console.error("Contact email failed:", error);
    return Response.json({
      success: false,
      error: error instanceof Error ? error.message : "Unable to send message",
    }, { status: 502 });
  }
}