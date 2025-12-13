import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to escape HTML
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Email template for admin (you)
function generateAdminEmail(name, email, phone, message) {
    const timestamp = new Date().toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Inquiry</title>
</head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Helvetica Neue',Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#0f172a;padding:20px;">
        <tr><td align="center">
            <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="background:linear-gradient(135deg,#1e293b 0%,#0f172a 100%);border:1px solid #334155;border-radius:12px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.4);">
                <tr><td style="background:linear-gradient(to right, #0f172a 0%, #1e293b 50%, #0f172a 100%);padding:40px 32px;text-align:center;color:#fff;border-bottom:2px solid #00d9d9;">
                    <h1 style="margin:0;font-size:28px;font-weight:700;color:#e2e8f0;">New Contact Inquiry</h1>
                    <p style="margin:8px 0 0;font-size:14px;color:#00d9d9;">Someone has reached out through your portfolio</p>
                </td></tr>
                <tr><td style="padding:32px;color:#e2e8f0;">
                    <div style="font-size:12px;font-weight:700;color:#00d9d9;text-transform:uppercase;letter-spacing:1px;margin-bottom:16px;">📧 Sender Information</div>
                    <div style="background:linear-gradient(135deg,rgba(0,217,217,0.08) 0%,rgba(184,71,255,0.08) 100%);border:1px solid rgba(0,217,217,0.2);border-radius:10px;padding:14px 16px;margin-bottom:12px;">
                        <div style="font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">Full Name</div>
                        <div style="font-size:16px;font-weight:600;color:#e2e8f0;">${escapeHtml(name)}</div>
                    </div>
                    <div style="background:linear-gradient(135deg,rgba(0,217,217,0.08) 0%,rgba(184,71,255,0.08) 100%);border:1px solid rgba(0,217,217,0.2);border-radius:10px;padding:14px 16px;margin-bottom:12px;">
                        <div style="font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">Email Address</div>
                        <div style="font-size:16px;font-weight:600;"><a href="mailto:${escapeHtml(email)}" style="color:#00d9d9;text-decoration:none;">${escapeHtml(email)}</a></div>
                    </div>
                    ${phone ? `<div style="background:linear-gradient(135deg,rgba(0,217,217,0.08) 0%,rgba(184,71,255,0.08) 100%);border:1px solid rgba(0,217,217,0.2);border-radius:10px;padding:14px 16px;margin-bottom:12px;">
                        <div style="font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">Phone Number</div>
                        <div style="font-size:16px;font-weight:600;"><a href="tel:${escapeHtml(phone)}" style="color:#00d9d9;text-decoration:none;">${escapeHtml(phone)}</a></div>
                    </div>` : ''}
                    <div style="height:1px;background:#334155;margin:24px 0;"></div>
                    <div style="font-size:12px;font-weight:700;color:#00d9d9;text-transform:uppercase;letter-spacing:1px;margin-bottom:16px;">💬 Message</div>
                    <div style="background:linear-gradient(135deg,rgba(0,217,217,0.05) 0%,rgba(184,71,255,0.05) 100%);border-left:4px solid #b847ff;padding:20px 16px;border-radius:8px;color:#cbd5e1;font-size:14px;line-height:1.8;white-space:pre-wrap;word-break:break-word;">${escapeHtml(message)}</div>
                    <div style="text-align:center;margin:24px 0;">
                        <a href="mailto:${escapeHtml(email)}" style="display:inline-block;background:linear-gradient(135deg,#00d9d9 0%,#b847ff 100%);color:#0f172a;padding:14px 32px;border-radius:999px;text-decoration:none;font-weight:700;font-size:15px;">Reply to ${escapeHtml(name.split(' ')[0])}</a>
                    </div>
                    <div style="font-size:12px;color:#64748b;border-top:1px solid #334155;padding-top:16px;margin-top:24px;">
                        <p style="margin:6px 0;"><strong>Received:</strong> ${timestamp}</p>
                        <p style="margin:6px 0;"><strong>Source:</strong> Portfolio Contact Form</p>
                        <p style="margin:6px 0;"><strong>Status:</strong> <span style="color:#10b981;">✓ Delivered</span></p>
                    </div>
                </td></tr>
                <tr><td style="background:rgba(0,217,217,0.05);padding:20px 32px;text-align:center;font-size:12px;color:#94a3b8;border-top:1px solid #334155;">
                    This is an automated notification from your portfolio website.<br>Reply directly to the sender's email to get in touch.
                </td></tr>
            </table>
        </td></tr>
    </table>
</body>
</html>`;
}

// Email template for user (confirmation)
function generateUserEmail(name, message, email, phone) {
    const firstName = name.split(' ')[0];
    const timestamp = new Date().toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You - Message Received</title>
</head>
<body style="margin:0;padding:0;background:#0f172a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Helvetica Neue',Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#0f172a;padding:20px;">
        <tr><td align="center">
            <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="background:linear-gradient(135deg,#1e293b 0%,#0f172a 100%);border:1px solid #334155;border-radius:12px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.4);">
                <tr><td style="background:linear-gradient(to right, #0f172a 0%, #1e293b 50%, #0f172a 100%);padding:40px 32px;text-align:center;color:#fff;border-bottom:2px solid #00d9d9;">
                    <h1 style="margin:0;font-size:28px;font-weight:700;color:#e2e8f0;">Thank You!</h1>
                    <p style="margin:8px 0 0;font-size:14px;color:#00d9d9;">Your message has been received</p>
                </td></tr>
                <tr><td style="padding:32px;color:#e2e8f0;">
                    <p style="font-size:16px;font-weight:600;margin:0 0 16px;">Hi ${escapeHtml(firstName)},</p>
                    <p style="font-size:15px;line-height:1.8;color:#cbd5e1;margin:0 0 24px;">
                        Thank you for reaching out! I've received your message and really appreciate you taking the time to get in touch. I'll review your message carefully and get back to you as soon as possible.
                    </p>
                    <div style="font-size:12px;font-weight:700;color:#00d9d9;text-transform:uppercase;letter-spacing:1px;margin:24px 0 16px;">📨 Your Message</div>
                    <div style="background:linear-gradient(135deg,rgba(0,217,217,0.05) 0%,rgba(184,71,255,0.05) 100%);border-left:4px solid #00d9d9;padding:20px 16px;border-radius:8px;color:#cbd5e1;font-size:14px;line-height:1.8;white-space:pre-wrap;word-break:break-word;margin-bottom:24px;">${escapeHtml(message)}</div>
                    <div style="background:rgba(0,217,217,0.08);border:1px solid rgba(0,217,217,0.2);border-radius:8px;padding:16px;font-size:14px;color:#cbd5e1;line-height:1.8;margin:24px 0;">
                        <p style="margin:6px 0;"><strong>📅 Received:</strong> ${timestamp}</p>
                        <p style="margin:6px 0;"><strong>📧 Your Email:</strong> ${escapeHtml(email)}</p>
                        ${phone ? `<p style="margin:6px 0;"><strong>📱 Your Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
                        <p style="margin:6px 0;"><strong>Status:</strong> <span style="color:#10b981;">✓ Successfully submitted</span></p>
                    </div>
                    <div style="font-size:12px;font-weight:700;color:#00d9d9;text-transform:uppercase;letter-spacing:1px;margin:24px 0 16px;">🔗 Connect With Me</div>
                    <div style="display:flex;justify-content:center;gap:16px;margin:24px 0;">
                        <a href="https://linkedin.com/in/mayank-baraiya" style="display:inline-block;color:#00d9d9;text-decoration:none;font-weight:600;padding:8px 16px;background:rgba(0,217,217,0.1);border-radius:6px;font-size:14px;margin-right: 6px;">LinkedIn</a>
                        <a href="https://github.com/mayank-baraiya" style="display:inline-block;color:#00d9d9;text-decoration:none;font-weight:600;padding:8px 16px;background:rgba(0,217,217,0.1);border-radius:6px;font-size:14px;margin-right: 6px;">GitHub</a>
                        <a href="https://medium.com/@mayank-baraiya" style="display:inline-block;color:#00d9d9;text-decoration:none;font-weight:600;padding:8px 16px;background:rgba(0,217,217,0.1);border-radius:6px;font-size:14px;margin-right: 6px;">Medium</a>
                    </div>
                    <p style="font-size:15px;line-height:1.8;color:#cbd5e1;margin:24px 0;">
                        In the meantime, feel free to check out my work on <span style="color:#00d9d9;font-weight:700;">GitHub</span> or connect with me on <span style="color:#00d9d9;font-weight:700;">LinkedIn</span>. I look forward to discussing your project!
                    </p>
                </td></tr>
                <tr><td style="background:rgba(0,217,217,0.05);padding:24px 32px;text-align:center;font-size:12px;color:#94a3b8;border-top:1px solid #334155;line-height:1.8;">
                    <p style="margin:6px 0;"><strong>Expected Response Time:</strong> 24-48 hours</p>
                    <p style="margin:12px 0 0;">If you need immediate assistance, feel free to call me at <a href="tel:+916354799219" style="color:#00d9d9;text-decoration:none;">+91 6354799219</a></p>
                    <p style="margin:16px 0 0;opacity:0.8;">© 2024 Mayank Baraiya. All rights reserved.</p>
                </td></tr>
            </table>
        </td></tr>
    </table>
</body>
</html>`;
}

// Validate environment variables
const validateCredentials = () => {
    const email = process.env.GMAIL_EMAIL;
    const password = process.env.GMAIL_APP_PASSWORD;

    if (!email || !password || password.includes('your-')) {
        console.warn('⚠️  Gmail credentials not configured properly');
        console.warn('Please set GMAIL_EMAIL and GMAIL_APP_PASSWORD in .env file');
        return false;
    }
    return true;
};

// Create Nodemailer transporter with Google SMTP
let transporter = null;

if (validateCredentials()) {
    // SMTP Configuration - supports multiple options
    const smtpConfig = {
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true' ? true : false, // true for 465 (SSL), false for 587 (STARTTLS)
        auth: {
            user: process.env.GMAIL_EMAIL,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    };

    transporter = nodemailer.createTransport(smtpConfig);

    // Test email connection on startup
    transporter.verify((error, success) => {
        if (error) {
            console.error('❌ SMTP connection failed:', error.message);
            console.error('💡 Please check your GMAIL_EMAIL and GMAIL_APP_PASSWORD in .env');
            console.error('📝 SMTP Configuration:', {
                host: smtpConfig.host,
                port: smtpConfig.port,
                secure: smtpConfig.secure,
            });
        } else {
            console.log('✅ SMTP connection successful!');
            console.log('📝 SMTP Configuration:', {
                host: smtpConfig.host,
                port: smtpConfig.port,
                secure: smtpConfig.secure,
            });
        }
    });
} else {
    console.log('⚠️  Email functionality disabled - credentials not configured');
}

// Email endpoint
app.post('/api/send-contact-email', async (req, res) => {
    try {
        if (!transporter) {
            return res.status(500).json({
                error: 'Email service not configured. Please set GMAIL_EMAIL and GMAIL_APP_PASSWORD in .env file',
            });
        }

        const { name, email, phone, message } = req.body;

        // Comprehensive validation with detailed error messages
        const validationErrors = {};

        // Name validation
        if (!name || !name.trim()) {
            validationErrors.name = 'Name is required';
        } else if (name.trim().length < 2) {
            validationErrors.name = 'Name must be at least 2 characters';
        } else if (name.trim().length > 50) {
            validationErrors.name = 'Name must not exceed 50 characters';
        } else if (!/^[a-zA-Z\s'-]+$/.test(name)) {
            validationErrors.name = 'Name can only contain letters, spaces, hyphens, and apostrophes';
        }

        // Email validation
        if (!email || !email.trim()) {
            validationErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            validationErrors.email = 'Please enter a valid email address';
        } else if (email.length > 100) {
            validationErrors.email = 'Email must not exceed 100 characters';
        }

        // Phone validation (optional but validate if provided)
        if (phone && phone.trim()) {
            if (!/^[\d\s\-\+\(\)]+$/.test(phone)) {
                validationErrors.phone = 'Phone number can only contain digits, spaces, dashes, plus, and parentheses';
            } else {
                const digits = phone.replace(/\D/g, '');
                if (digits.length < 10) {
                    validationErrors.phone = 'Phone number must contain at least 10 digits';
                } else if (digits.length > 15) {
                    validationErrors.phone = 'Phone number must not exceed 15 digits';
                }
            }
        }

        // Message validation
        if (!message || !message.trim()) {
            validationErrors.message = 'Message is required';
        } else if (message.trim().length < 10) {
            validationErrors.message = 'Message must be at least 10 characters';
        } else if (message.trim().length > 2000) {
            validationErrors.message = 'Message must not exceed 2000 characters';
        }

        // Return validation errors if any
        if (Object.keys(validationErrors).length > 0) {
            return res.status(400).json({
                success: false,
                error: 'Validation failed',
                errors: validationErrors,
            });
        }

        // Email to yourself (admin)
        const adminMailOptions = {
            from: process.env.GMAIL_EMAIL,
            to: process.env.GMAIL_EMAIL,
            subject: `🎉 New Contact Form Submission from ${name}`,
            html: generateAdminEmail(name, email, phone, message),
        };

        // Confirmation email to user
        const userMailOptions = {
            from: process.env.GMAIL_EMAIL,
            to: email,
            subject: 'We received your message - Mayank Baraiya',
            html: generateUserEmail(name, message, email, phone),
        };

        // Send emails
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(userMailOptions);

        res.status(200).json({
            success: true,
            message: 'Email sent successfully!',
        });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            error: 'Failed to send email. Please try again later.',
            details: error.message,
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'Server is running',
        emailConfigured: transporter ? 'Yes' : 'No'
    });
});

// Test email endpoint
app.post('/api/test-email', async (req, res) => {
    try {
        if (!transporter) {
            return res.status(500).json({
                error: 'Email service not configured',
            });
        }

        const testMail = {
            from: process.env.GMAIL_EMAIL,
            to: process.env.GMAIL_EMAIL,
            subject: 'Test Email from Portfolio Server',
            html: '<h2 style="color:#00d9d9;">Test Email</h2><p>If you received this, your email configuration is working!</p>',
        };

        await transporter.sendMail(testMail);

        res.status(200).json({
            success: true,
            message: 'Test email sent successfully!',
        });
    } catch (error) {
        console.error('Test email error:', error);
        res.status(500).json({
            error: 'Failed to send test email',
            details: error.message,
        });
    }
});

// Start server
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files in production
if (process.env.NODE_ENV === 'production' || process.env.render) {
    app.use(express.static(path.join(__dirname, 'dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`\n🚀 Email server running on http://localhost:${PORT}`);
    console.log(`📧 Email endpoint: POST http://localhost:${PORT}/api/send-contact-email`);
    console.log(`🧪 Test endpoint: POST http://localhost:${PORT}/api/test-email`);
    console.log(`❤️  Health check: GET http://localhost:${PORT}/api/health\n`);
});
