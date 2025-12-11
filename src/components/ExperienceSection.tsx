import { Building2, Calendar, Award, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const experiences = [
  {
    company: "Cypherox Technologies",
    location: "Rajkot, Gujarat",
    role: "Laravel Developer",
    period: "06/2022 - Present",
    current: true,
    highlights: [
      "Managed, handled, and developed multiple projects across different clients simultaneously",
      "Worked on backend development tasks, feature updates, and issue resolutions",
      "Supported deployments, server management, and automation workflows",
      "Implemented automation using tools like n8n, ElevenLabs, Zapier, and Airtable",
      "Managed project repositories and participated in CI/CD-based deployments"
    ]
  },
  {
    company: "BrainStream Technolabs Pvt. Ltd.",
    location: "Rajkot, Gujarat",
    role: "Web Developer",
    period: "11/2021 - 06/2022",
    current: false,
    highlights: [
      "Started as a fresher and completed comprehensive training in PHP and CodeIgniter",
      "Worked on real project tasks, contributing to live modules and practical development",
      "Built a strong foundation in backend development through continuous learning",
      "Grew into a confident PHP & CodeIgniter developer handling tasks independently"
    ]
  }
];

const ExperienceSection = () => {
  const sectionRef = useScrollReveal();
  return (
    <section ref={sectionRef} id="experience" className="py-24 relative opacity-0">
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-wider uppercase">Career Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building scalable solutions and growing as a developer
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 opacity-0 animate-fade-in ${
                  index % 2 === 0 ? 'md:flex-row-reverse ps-10' : ' pe-10'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-background border-2 border-primary glow-primary z-10" />

                {/* Content card */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="group p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300">
                    {exp.current && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Current Position
                      </div>
                    )}

                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground mt-1">
                          <Building2 className="w-4 h-4 text-primary" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{exp.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 font-mono">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement */}
        <div className="max-w-2xl mx-auto mt-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="p-6 rounded-xl glass border-glow text-center">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Employee of the Month</h3>
            <p className="text-muted-foreground">
              Awarded <span className="text-primary font-semibold">five times</span> for consistent performance, dedication, and quality work
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
