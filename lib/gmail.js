import nodemailer from "nodemailer";

export async function sendGmailEmail({ to, replyTo, subject, html }) {
  const user = process.env.GMAIL_EMAIL;
  const password = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");

  if (!user || !password) {
    throw new Error("Set GMAIL_EMAIL and GMAIL_APP_PASSWORD to use Gmail SMTP.");
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass: password },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 20000,
  });

  const result = await transporter.sendMail({
    from: `${process.env.GMAIL_SENDER_NAME || "Portfolio Contact"} <${user}>`,
    to,
    ...(replyTo ? { replyTo } : {}),
    subject,
    html,
  });

  if (result.rejected?.length || !result.accepted?.length) {
    throw new Error(`Gmail did not accept the recipient. Rejected: ${result.rejected?.join(", ") || "all recipients"}`);
  }

  return {
    messageId: result.messageId,
    accepted: result.accepted,
    rejected: result.rejected,
    smtpResponse: result.response,
  };
}