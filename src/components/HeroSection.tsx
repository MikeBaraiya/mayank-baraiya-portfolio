import { Mail, Phone, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const sectionRef = useScrollReveal();
  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden opacity-0">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          {/* <div className="mb-8 opacity-0 animate-fade-in">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-lg shadow-primary/20">
              <img 
                src={profilePhoto} 
                alt="Mayank Baraiya" 
                className="w-full h-full object-cover"
              />
            </div>
          </div> */}

          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-glow mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-mono text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-foreground">Mayank</span>{" "}
            <span className="text-gradient">Baraiya</span>
          </h1>

          {/* Title */}
          <div className="flex items-center justify-center gap-3 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <p className="text-xl md:text-2xl font-mono text-primary">
              Backend Developer
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </div>

          {/* Summary */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Result-oriented Backend Developer with <span className="text-foreground font-semibold">3.5+ years</span> of experience in PHP, Laravel, and modern backend development. Skilled in building scalable APIs, developing automation workflows, and delivering high-quality solutions.
          </p>

          {/* Contact info */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <a href="mailto:002mikebaraiya@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="font-mono text-sm">002mikebaraiya@gmail.com</span>
            </a>
            <a href="tel:+916354799219" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="font-mono text-sm">+91 6354799219</span>
            </a>
            <span className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="font-mono text-sm">Rajkot, Gujarat</span>
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
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
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
