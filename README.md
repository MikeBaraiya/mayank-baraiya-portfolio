# Mayank Baraiya - Portfolio

Welcome to my personal portfolio website! I'm a **Backend Developer** with 3.5+ years of experience in PHP, Laravel, and modern backend development.

## About Me

Result-oriented Backend Developer skilled in building scalable APIs, developing automation workflows, and delivering high-quality solutions. I specialize in:

- **Backend Development**: PHP, Laravel, CodeIgniter, Node.js
- **Frontend Technologies**: React JS, HTML, CSS, Bootstrap
- **Databases**: MySQL, MongoDB, Firebase, Supabase
- **Cloud & DevOps**: AWS, GCP, Docker, CI/CD
- **Automation**: n8n, Zapier, Make.com, Airtable

## Connect With Me

- **LinkedIn**: [linkedin.com/in/mayank-baraiya](https://www.linkedin.com/in/mayank-baraiya/)
- **GitHub**: [github.com/mikeBaraiya](https://github.com/mikeBaraiya/)
- **Medium**: [@mikebaraiya](https://medium.com/@mikebaraiya)
- **Email**: [002mikebaraiya@gmail.com](mailto:002mikebaraiya@gmail.com)
- **Phone**: [+91 6354799219](tel:+916354799219)

## What technologies are used for this project?

This project is built with:

### Application
- **Next.js** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn-ui** - Component library
- **Tailwind CSS** - Utility-first CSS

### Email
- **Gmail SMTP** - Contact form email delivery

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Gmail account with 2-Step Verification and an App Password

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/MikeBaraiya/mayank-baraiya-portfolio.git
   cd mayank-baraiya-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Set the Gmail credentials in `.env` for local work. Keep the App Password secret and do not commit it.

4. **Run development server**
   ```bash
   npm run dev
   ```
   
   Open http://localhost:3000. The contact endpoint is served by Next.js at `/api/send-contact-email`.

### Build for Production

```bash
npm run build
npm start
```

## 📧 Email Setup

Enable Google 2-Step Verification, create an App Password for Mail, and set `GMAIL_EMAIL`, `GMAIL_APP_PASSWORD`, `GMAIL_SENDER_NAME`, and `ADMIN_EMAIL`. Add the same variables to Vercel Project Settings and redeploy. The API route uses Node.js runtime and Nodemailer. Gmail SMTP connectivity from Vercel must be tested in the deployed function; if SMTP is blocked or times out, use an email provider's HTTPS API instead.

## 🌐 Deployment

For Vercel, select the **Next.js** framework preset, use `npm run build`, and leave the output directory at its Next.js default. Set the Gmail values as environment variables for the required deployment environments, then redeploy.

