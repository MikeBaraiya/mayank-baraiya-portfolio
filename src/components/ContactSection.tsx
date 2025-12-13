import { Mail, Phone, MapPin, Send, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ContactSection = () => {
  const sectionRef = useScrollReveal();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Validation rules
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (formData.name.trim().length > 50) {
      newErrors.name = "Name must not exceed 50 characters";
    } else if (!/^[a-zA-Z\s'-]+$/.test(formData.name)) {
      newErrors.name = "Name can only contain letters, spaces, hyphens, and apostrophes";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    } else if (formData.email.length > 100) {
      newErrors.email = "Email must not exceed 100 characters";
    }

    // Phone validation (optional but validate if provided)
    if (formData.phone.trim()) {
      if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
        newErrors.phone = "Phone number can only contain digits, spaces, dashes, plus, and parentheses";
      } else if (formData.phone.replace(/\D/g, '').length < 10) {
        newErrors.phone = "Phone number must contain at least 10 digits";
      } else if (formData.phone.replace(/\D/g, '').length > 15) {
        newErrors.phone = "Phone number must not exceed 15 digits";
      }
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (formData.message.trim().length > 2000) {
      newErrors.message = "Message must not exceed 2000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const baseUrl = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? '' : 'http://localhost:5000');
      const apiUrl = `${baseUrl}/api/send-contact-email`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).then(res => res.json());

      if (!response.success && response.error) {
        throw new Error(response.error);
      }

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Error sending message",
        description: error.message || "Please try again or contact me directly via email.",
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
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="John Doe"
                  className={`bg-secondary/50 border-border/50 focus:border-primary ${errors.name ? 'border-red-500' : ''}`}
                  required
                  disabled={isLoading}
                />
                {errors.name && (
                  <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name}
                  </div>
                )}
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Your Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="john@example.com"
                  className={`bg-secondary/50 border-border/50 focus:border-primary ${errors.email ? 'border-red-500' : ''}`}
                  required
                  disabled={isLoading}
                />
                {errors.email && (
                  <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </div>
                )}
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Your Phone (Optional)</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="+91 9876543210"
                  className={`bg-secondary/50 border-border/50 focus:border-primary ${errors.phone ? 'border-red-500' : ''}`}
                  disabled={isLoading}
                />
                {errors.phone && (
                  <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors.phone}
                  </div>
                )}
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Tell me about your project..."
                  className={`bg-secondary/50 border-border/50 focus:border-primary min-h-32 ${errors.message ? 'border-red-500' : ''}`}
                  required
                  disabled={isLoading}
                />
                <div className="flex items-center justify-between mt-2">
                  {errors.message && (
                    <div className="flex items-center gap-2 text-red-500 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {errors.message}
                    </div>
                  )}
                  <span className="text-xs text-muted-foreground ml-auto">
                    {formData.message.length}/2000
                  </span>
                </div>
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
