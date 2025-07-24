import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border/50 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-muted-foreground">
            <span>Made by Peter Messay</span>
            <a
              href="/Peter-Messay-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 py-1 border border-primary rounded text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-sm"
            >
              Download Resume
            </a>
          </div>
          
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Peter Messay. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;