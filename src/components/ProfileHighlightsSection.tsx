import { BrainCircuit, Sparkles, Workflow, Rocket, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const highlights = [
  {
    icon: BrainCircuit,
    title: "AI-first builder",
    description:
      "I enjoy building AI-powered workflows, voice agents, and automation systems that reduce manual work and create smarter business processes.",
  },
  {
    icon: Workflow,
    title: "Fullstack problem solver",
    description:
      "From frontend interfaces to backend architecture, API integrations, and deployment, I build complete solutions that work end-to-end.",
  },
  {
    icon: Rocket,
    title: "Product mindset",
    description:
      "I focus on practical outcomes, clean user experience, and scalable implementation so ideas become usable products faster and more reliably.",
  },
  {
    icon: Sparkles,
    title: "Creative and adaptive",
    description:
      "I love learning new technologies quickly, experimenting with better workflows, and adapting modern tools to solve real-world challenges creatively.",
  },
];

const ProfileHighlightsSection = () => {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} id="about" className="py-24 relative opacity-0">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-wider uppercase">More About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Creative, <span className="text-gradient">Adaptable, and Built for Real Impact</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            I’m a fullstack developer who enjoys turning ideas into practical digital products, combining strong technical execution with curiosity, automation, and business-focused thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto mb-14">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-5xl mx-auto rounded-2xl border border-border/60 bg-gradient-to-r from-primary/5 via-background to-accent/5 p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
            <div>
              <p className="text-sm font-mono uppercase tracking-[0.2em] text-primary mb-4">My approach</p>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">I build solutions that are useful, scalable, and easy to evolve.</h3>
              <p className="text-muted-foreground leading-relaxed">
                I like working across the stack, exploring modern tools, and finding the fastest path to a real business result. Whether it is a custom web application, a workflow automation layer, an AI-powered assistant, or a system integration, I focus on building something reliable, practical, and ready for growth.
              </p>
            </div>

            <div className="rounded-xl border border-border/60 bg-background/80 p-5 space-y-3">
              {[
                "Fullstack web development",
                "AI automation & agent workflows",
                "API integrations & system design",
                "Modern tools & rapid learning",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHighlightsSection;
