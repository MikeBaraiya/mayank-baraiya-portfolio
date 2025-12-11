import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const sectionRef = useScrollReveal();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="py-24 relative opacity-0">
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-wider uppercase">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="opacity-0 animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-6">
              <a 
                href="mailto:002mikebaraiya@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all group opacity-0 animate-fade-in"
                style={{ animationDelay: '0.1s' }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-mono text-foreground">002mikebaraiya@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+916354799219"
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all group opacity-0 animate-fade-in"
                style={{ animationDelay: '0.2s' }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-mono text-foreground">+91 6354799219</p>
                </div>
              </a>

              <div 
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-card border border-border/50 opacity-0 animate-fade-in"
                style={{ animationDelay: '0.3s' }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-mono text-foreground">Rajkot, Gujarat, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form 
            onSubmit={handleSubmit}
            className="p-8 rounded-xl bg-gradient-card border border-border/50 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            <div className="space-y-6">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Your Name</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Your Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="bg-secondary/50 border-border/50 focus:border-primary min-h-32"
                  required
                  disabled={isLoading}
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold glow-primary"
                disabled={isLoading}
              >
                <Send className="w-4 h-4 mr-2" />
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
