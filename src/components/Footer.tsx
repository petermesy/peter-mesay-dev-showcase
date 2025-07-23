import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border/50 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>and</span>
            <Code className="w-4 h-4 text-primary" />
            <span>by Peter Mesay</span>
          </div>
          
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Peter Mesay. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;