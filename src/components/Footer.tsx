import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {currentYear} Mayank Baraiya. Built with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
          </div>

          <div className="flex items-center gap-6">
            <a href="#skills" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Skills
            </a>
            <a href="#experience" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Experience
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
