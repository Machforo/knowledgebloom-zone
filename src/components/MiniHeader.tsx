import { Facebook, Twitter, Linkedin, Instagram, Dribbble, Phone, Mail } from "lucide-react";

export const MiniHeader = () => {
  return (
    <div className="bg-primary/5 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-6 py-2">
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+917840068855" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span>+91-7840068855</span>
            </a>
            <a href="mailto:hr@traininglobe.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              <span>hr@traininglobe.com</span>
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Dribbble className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
