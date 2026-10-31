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

### Frontend
- **Vite** - Fast build tool
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn-ui** - Component library
- **Tailwind CSS** - Utility-first CSS

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
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
   
   Then update `.env` with your Gmail SMTP credentials:
   ```env
   GMAIL_EMAIL=your-gmail-address@gmail.com
   GMAIL_APP_PASSWORD=your-16-character-app-password
   GMAIL_SENDER_NAME=Portfolio Contact
   ADMIN_EMAIL=002mikebaraiya@gmail.com
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   PORT=5000
   ```

4. **Run development server**
   ```bash
   npm run dev:full
   ```
   
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

### Build for Production

```bash
npm run build
npm start
```

## 📧 Email Setup

Enable Google 2-Step Verification, create an App Password for Mail, and set `GMAIL_EMAIL`, `GMAIL_APP_PASSWORD`, `GMAIL_SENDER_NAME`, and `ADMIN_EMAIL`. Add the Gmail variables to Vercel Project Settings and redeploy. Gmail SMTP may be blocked or unreliable from serverless hosting; local Express testing uses `smtp.gmail.com:587`, but Vercel delivery must be verified from its function logs and may require a mail API provider instead.

## 🌐 Deployment

See `RENDER_DEPLOYMENT.md` for deployment instructions to Render or other hosting providers.

