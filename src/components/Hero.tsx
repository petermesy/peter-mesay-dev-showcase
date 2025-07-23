import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/coding-robot-hero.jpg";
const profileImage = "/lovable-uploads/0846f033-88cc-4e67-a7a4-70f82b44bdfd.png";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["AI Engineer", "Full-Stack Developer", "Software Engineer", "Problem Solver", "Tech Innovator"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-background/70 z-10" />
      
      {/* Background robot image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="block text-foreground">Hi, I'm</span>
                <span className="block bg-gradient-primary bg-clip-text text-transparent animate-pulse-glow">
                  Peter Mesay
                </span>
              </h1>
              
              <div className="text-2xl lg:text-3xl text-muted-foreground h-12 flex items-center justify-center lg:justify-start">
                <span className="border-r-2 border-primary pr-2 animate-typing overflow-hidden whitespace-nowrap">
                  {roles[currentRole]}
                </span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Passionate about creating innovative solutions and building amazing web experiences. 
              Let's collaborate and bring ideas to life through code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-fade-in-up">
            <div className="relative rounded-2xl overflow-hidden shadow-card max-w-sm mx-auto">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={profileImage}
                  alt="Peter Mesay - AI Engineer & Software Developer"
                  className="w-full h-full object-cover object-top animate-float"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-primary opacity-10" />
              <div className="absolute inset-0 ring-2 ring-primary/30 rounded-2xl" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;