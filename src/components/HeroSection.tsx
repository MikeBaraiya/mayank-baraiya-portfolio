import { Mail, Phone, MapPin, Download, Briefcase, Sparkles, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import profilePhoto from "@/assets/mayank-profile-img.png";

const HeroSection = () => {
  const sectionRef = useScrollReveal();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY * 0.12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      x: px * 14,
      y: py * -14,
    });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden opacity-0">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] items-center gap-10 lg:gap-14">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-glow mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-mono text-muted-foreground">Available for opportunities</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="text-foreground">Mayank</span>{" "}
              <span className="text-gradient">Baraiya</span>
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
              <p className="text-xl md:text-2xl font-mono text-primary">
                Fullstack Developer • AI Automation
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl lg:max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Fullstack developer with <span className="text-foreground font-semibold">5+ years</span> of hands-on experience in <span className="text-foreground font-semibold">Laravel, Next.js, Node.js, Express, React, Python, and backend architecture</span>, now focused on <span className="text-foreground font-semibold">AI automation, voice agents, and product-grade digital experiences</span>. I combine clean UI thinking with scalable engineering to build solutions that are both beautiful and effective.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <a href="mailto:002mikebaraiya@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="font-mono text-sm">002mikebaraiya@gmail.com</span>
              </a>
              <a href="tel:+916354799219" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="font-mono text-sm">+91 6354799219</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <a href="mailto:002mikebaraiya@gmail.com">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold glow-primary transition-all hover:scale-105">
                  <Mail className="w-4 h-4 mr-2" />
                  Get in Touch
                </Button>
              </a>
              <a href="/Mayank-Baraiya-CV.pdf" download="Mayank-Baraiya-CV.pdf">
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all hover:scale-105">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div
              className="hero-3d-shell"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) translateY(${Math.min(scrollOffset, 26)}px)`,
              }}
            >
              <div className="hero-visual-glow" />

              <div className="hero-photo-frame">
                <div className="hero-grid-overlay" />
                <img
                  src={profilePhoto}
                  alt="Mayank Baraiya"
                  className="w-full h-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="flex items-center justify-between gap-3 rounded-2xl border border-cyan-400/20 bg-slate-950/80 p-3 shadow-[0_0_30px_rgba(45,212,191,0.12)] backdrop-blur-md">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-cyan-200/80">Specializing in</p>
                      <p className="text-sm font-semibold text-white">AI • Fullstack • Automation</p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-950 shadow-[0_0_20px_rgba(45,212,191,0.45)]">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="floating-badge top-left">
                <Sparkles className="w-3.5 h-3.5" />
                AI Builder
              </div>
              <div className="floating-badge top-right">
                <Briefcase className="w-3.5 h-3.5" />
                Fullstack
              </div>
              <div className="floating-badge bottom-left">
                <MapPin className="w-3.5 h-3.5" />
                Rajkot
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
