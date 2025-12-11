import { GraduationCap, Globe } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const EducationSection = () => {
  const sectionRef = useScrollReveal();
  return (
    <section ref={sectionRef} id="education" className="py-24 relative opacity-0">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-wider uppercase">Background</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Education & <span className="text-gradient">Languages</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Card */}
          <div className="group p-8 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6">
              <GraduationCap className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Bachelor of Engineering
            </h3>
            <p className="text-lg text-primary font-medium mb-1">Computer Engineering</p>
            <p className="text-muted-foreground mb-4">Om Engineering College, Junagadh</p>
            
            <div className="flex items-center justify-between pt-4 border-t border-border/50">
              <span className="text-sm text-muted-foreground font-mono">Graduated: 03/2021</span>
              <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                7.5 CGPI
              </div>
            </div>
          </div>

          {/* Languages Card */}
          <div className="group p-8 rounded-xl bg-gradient-card border border-border/50 hover:border-accent/30 transition-all duration-300 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-6">
              <Globe className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-6">Languages</h3>

            <div className="space-y-4">
              {[
                { name: "English", level: 80 },
                { name: "Hindi", level: 95 },
                { name: "Gujarati", level: 100 }
              ].map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">{lang.name}</span>
                    <span className="text-muted-foreground text-sm font-mono">{lang.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-primary transition-all duration-1000"
                      style={{ width: `${lang.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
