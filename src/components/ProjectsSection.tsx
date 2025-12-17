import { Github, ExternalLink, Code2, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const projects = [
  {
    title: "Novaeo Recruitment",
    description: "A recruitment platform developed with Laravel v10 and MySQL, designed to simplify hiring workflows. It includes a role-based access control system for secure and efficient user management. The platform supports real-time communication through SMTP (email) for notifications and updates.",
    technologies: ["Laravel v10", "MySQL", "SMTP", "RBAC", "Git"],
    github: "#",
    live: "https://novaeo.co",
    highlights: ["Candidate Management", "Job Posting", "Automated Notifications", "Scalable Architecture"]
  },
  {
    title: "Preachathon Donation",
    description: "A charity donation platform focused on supporting children in need, built with CodeIgniter v4 and MySQL. It integrates PayPal and Kanno Payment for secure transactions and stores donation details in Google Sheets for transparent tracking.",
    technologies: ["CodeIgniter v4", "MySQL", "PayPal", "Kanno Payment", "Google Sheets API", "Git"],
    github: "#",
    live: "https://preachathon.org",
    highlights: ["Secure Payments", "Google Sheets Integration", "Donor Engagement", "Transparent Tracking"]
  },
  {
    title: "Content Corner",
    description: "A content writing and blog publishing platform built with Laravel v10, featuring Stripe integration for subscription management with monthly, quarterly, and yearly plans. The platform includes real-time notifications via Twilio (SMS), Redis, and SMTP (email). It integrates ChatGPT API to generate blogs and content.",
    technologies: ["Laravel v10", "Stripe", "ChatGPT API", "Twilio", "Redis", "SMTP", "DigitalOcean", "Git"],
    github: "#",
    live: "https://contentcorner.io",
    highlights: ["AI Content Generation", "Subscription Plans", "Real-time Notifications", "Multi-Subdomain Management"]
  },
  {
    title: "Healthcare Management System",
    description: "A healthcare platform built with CodeIgniter v3 and MySQL, designed to streamline virtual healthcare services. It integrates secure payment gateways (Stripe, PayPal, GCash) for seamless transactions and supports real-time communication through Twilio for SMS and SMTP for email. The platform enables virtual consultations via Vonage API for video and voice calls and meeting with the Zoom Meeting API.",
    technologies: ["CodeIgniter v3", "MySQL", "Stripe", "PayPal", "GCash", "Twilio", "Vonage API", "SMTP", "Git", "Zoom Meeting"],
    github: "#",
    live: "https://yo-vivo.co/",
    highlights: ["Virtual Consultations", "Multi-Payment Gateway", "Real-time Communication", "Video & Voice Calls"]
  },
  {
    title: "Property Rental Platform",
    description: "A real estate platform developed with Laravel v8, integrated with APIs to display property details. Features include generating QR codes for agents to facilitate direct contact and sales, and using mPDF to generate property brochures from API data. The platform enhances property browsing and agent outreach capabilities.",
    technologies: ["Laravel v8", "MySQL", "mPDF", "QR Code", "API Integration", "HTML", "CSS", "JavaScript", "Git"],
    github: "#",
    live: "https://primeestate.com.au/",
    highlights: ["QR Code Generation", "PDF Brochures", "API Integration", "Agent Outreach"]
  },
  {
    title: "Loan Management System",
    description: "End-to-end loan management platform enabling user registration, KYC verification, loan applications, document e-signing, approval workflows, and disbursement.",
    technologies: ["Laravel v12", "Twilio", "Plaid API", "DocuSign API", "Git"],
    github: "#",
    live: "https://portal.tbbigroup.net/",
    highlights: ["KYC Integration", "E-Signature", "Approval Workflows", "Multi-Domain Support"]
  },
  {
    title: "AI Script Analysis & Report Generator",
    description: "Platform for film industry professionals to upload screenplays and generate comprehensive AI-powered reports including character analysis, plot structure, and dialogue evaluation.",
    technologies: ["Laravel v9", "OpenAI API", "AWS", "SES", "RDS", "Stripe", "Voyager", "CI/CD", "Git"],
    github: "#",
    live: "https://first-look.net/",
    highlights: ["AI Integration", "Report Generation", "Subscription Plans"]
  },
  {
    title: "Expense Splitting & Payment Calendar",
    description: "Group expense management application allowing users to track shared expenses and automatically split payments among group members with detailed financial records.",
    technologies: ["Laravel v10", "MySQL", "HTML", "CSS", "JavaScript", "Bitbucket"],
    github: "#",
    live: "https://splitwise.expertroofingguide.com/",
    highlights: ["Group Management", "Expense Tracking", "Payment Splitting"]
  },
  {
    title: "Shopify Order Management & Automation",
    description: "Enterprise order management system integrating with Shopify and multiple vendor platforms, automating order distribution, inventory management, and multi-format report generation.",
    technologies: ["Laravel v11", "MySQL RDS", "AWS", "Shopify API", "JavaScript", "CI/CD", "Google SSO", "XML/PDF", "FTP/SFTP", "Git"],
    github: "#",
    live: "https://ubereats-packaging.com/",
    highlights: ["Shopify Integration", "Order Automation", "Multi-Vendor", "Role-Based Access"]
  },
  {
    title: "Food Delivery Application",
    description: "A food delivery platform built with Core PHP for the backend, Laravel for server-side management. It offers daily tiffin delivery with flexible time slots. Features include Stripe payment integration for one-time payments and monthly subscriptions.",
    technologies: ["Core PHP", "Laravel", "MySQL", "Stripe", "HTML", "CSS", "JavaScript", "Git Lab"],
    github: "#",
    live: "https://www.foober.com.au/",
    highlights: ["Daily Tiffin Delivery", "Flexible Time Slots", "Stripe Integration", "Role-Based System"]
  },
  {
    title: "Scape details form the LinkedIn via Google Sheet",
    description: "Automation workflow that scrapes LinkedIn profile details based on a list of profile URLs in Google Sheets and populates the data back into the sheet using Google AppScript.",
    technologies: ["Google AppScript", "LinkedIn Scraping", "Google Sheets", "Bright Data API", "Python", "Puppeteer"],
    github: "#",
    live: null,
    highlights: ["Data Scraping", "Google Sheets Integration", "Automation"]
  },
  {
    title: "AI-Powered Product Recommendation Engine",
    description: "Intelligent automation system that analyzes user preferences from form submissions and recommends personalized products using AI models with n8n workflow integration.",
    technologies: ["n8n", "WordPress", "AI models", "Gravity Form"],
    github: "#",
    live: null,
    highlights: ["AI Integration", "Workflow Automation", "Form Processing"]
  },
];

const ProjectsSection = () => {
  const sectionRef = useScrollReveal();
  return (
    <section ref={sectionRef} id="projects" className="py-24 relative opacity-0">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-wider uppercase">Showcase</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects demonstrating my expertise in full-stack development, automation, and cloud technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto justify-items-center">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in bg-gradient-card hover:shadow-lg hover:scale-105 hover:-translate-y-2 w-full max-w-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 p-6 flex flex-col h-full">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
                    >
                      <Zap className="w-3 h-3" />
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded-full bg-secondary/60 text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-border/30">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
