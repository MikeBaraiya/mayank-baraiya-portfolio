import { Code, Database, Cloud, CreditCard, Workflow, Server, Palette, Zap, CheckSquare, FileCode, Sparkles, Bot } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: Code,
    skills: ["PHP", "Laravel", "CodeIgniter", "JavaScript", "jQuery", "Node.js", "React JS", "Python"],
    color: "primary"
  },
  {
    title: "Frontend Technologies",
    icon: Palette,
    skills: ["HTML", "CSS", "Bootstrap", "Filament", "Livewire"],
    color: "accent"
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "SQLite", "MongoDB", "Firebase", "Supabase"],
    color: "primary"
  },
  {
    title: "Cloud & Hosting",
    icon: Cloud,
    skills: ["AWS (EC2, S3, RDS, SES)", "GCP", "SiteGround", "GoDaddy", "WHM", "Bluehost", "Hostinger", "A2 Hosting", "Cloudflare", "DigitalOcean", "Cloudways", "Vercel", "Netlify", "Heroku"],
    color: "accent"
  },
  {
    title: "Payment Integrations",
    icon: CreditCard,
    skills: ["Stripe", "PayPal", "GCash", "Paytm", "PhonePe", "Pabbly"],
    color: "primary"
  },
  {
    title: "Automation & DevOps",
    icon: Workflow,
    skills: ["n8n", "Zapier", "Make.com", "Airtable", "ElevenLabs", "Git", "GitLab", "GitHub", "Bitbucket", "CI/CD", "MCP server"],
    color: "accent"
  },
  {
    title: "Server Management",
    icon: Server,
    skills: ["cPanel", "WHM", "SSH", "FTP/SFTP", "Linux Commands", "Apache", "Nginx"],
    color: "primary"
  },
  {
    title: "Other Tools & Technologies",
    icon: Zap,
    skills: ["RESTful APIs", "GraphQL", "WebSockets", "Docker", "Postman"],
    color: "accent"
  },
  {
    title: "Task Management Tools",
    icon: CheckSquare,
    skills: ["Jira", "Trello", "Asana", "ClickUp", "Notion", "Monday.com"],
    color: "primary"
  },
  {
    title: "IDEs",
    icon: FileCode,
    skills: ["VS Code", "PHPStorm", "Cursor", "Sublime Text", "Notepad++", "Google Antigravity", "Pieces"],
    color: "accent"
  },
  {
    title: "AI platforms",
    icon: Bot,
    skills: ["ChatGPT", "Claude", "Gemini", "Perplexity", "Amazon Q", "GitHub Copilot", "Grok"],
    color: "primary"
  }
];

const SkillsSection = () => {
  const sectionRef = useScrollReveal();
  return (
    <section ref={sectionRef} id="skills" className="py-24 relative opacity-0">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-wider uppercase">What I Work With</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built over 3+ years of professional development experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in hover:scale-105 hover:-translate-y-2 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                  category.color === 'primary' 
                    ? 'bg-primary/10 text-primary' 
                    : 'bg-accent/10 text-accent'
                }`}>
                  <category.icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-semibold mb-4 text-foreground">{category.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-mono rounded-full bg-secondary/80 text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
