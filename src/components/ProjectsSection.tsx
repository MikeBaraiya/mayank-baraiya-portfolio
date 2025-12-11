import { Github, ExternalLink, Code2, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard",
    technologies: ["Laravel", "React JS", "MySQL", "Stripe", "AWS"],
    github: "#",
    live: "#",
    highlights: ["Payment Integration", "Real-time Inventory", "Admin Dashboard"]
  },
  {
    title: "Automation Workflow System",
    description: "Custom automation platform using n8n and Zapier for workflow orchestration and data synchronization",
    technologies: ["n8n", "Zapier", "Node.js", "PostgreSQL", "REST API"],
    github: "#",
    live: "#",
    highlights: ["Workflow Automation", "Data Sync", "Multi-Platform"]
  },
  {
    title: "Real-time Chat Application",
    description: "Interactive chat application with real-time messaging, user presence, and file sharing capabilities",
    technologies: ["React JS", "Node.js", "WebSockets", "MongoDB", "Socket.io"],
    github: "#",
    live: "#",
    highlights: ["Real-time Messaging", "File Sharing", "User Presence"]
  },
  {
    title: "Cloud Infrastructure Dashboard",
    description: "Management dashboard for monitoring and controlling AWS, GCP, and DigitalOcean resources",
    technologies: ["PHP", "Laravel", "AWS", "GCP", "Docker"],
    github: "#",
    live: "#",
    highlights: ["Multi-Cloud Support", "Real-time Monitoring", "Cost Analysis"]
  },
  {
    title: "AI-Powered Content Generator",
    description: "Application leveraging OpenAI and Claude APIs for automated content generation and optimization",
    technologies: ["React JS", "Node.js", "OpenAI API", "Claude API", "Supabase"],
    github: "#",
    live: "#",
    highlights: ["AI Integration", "Content Generation", "Quality Optimization"]
  },
  {
    title: "DevOps CI/CD Pipeline",
    description: "Custom CI/CD pipeline setup with GitHub Actions, automated testing, and deployment workflows",
    technologies: ["GitHub Actions", "Docker", "Nginx", "Linux", "Git"],
    github: "#",
    live: "#",
    highlights: ["Automated Testing", "Continuous Deployment", "Infrastructure as Code"]
  }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in bg-gradient-card hover:shadow-lg hover:scale-105 hover:-translate-y-2"
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
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
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
