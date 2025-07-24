import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Mail, Github,PhoneCall } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/peter_messay/",
      color: "hover:text-pink-400 hover:shadow-pink-400/30"
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      url: "https://www.linkedin.com/in/peter-messay-84726a319/",
      color: "hover:text-blue-400 hover:shadow-blue-400/30"
    },
    {
      name: "Github", 
      icon: Github,
      url: "https://www.github.com/in/petermesy-84726a319/",
      color: "hover:text-blue-400 hover:shadow-blue-400/30"
    },
    {
      name: "Gmail", 
      icon: Mail,
      url: "https://mail.google.com/mail/petermesy7@gmail.com",
      color: "hover:text-blue-400 hover:shadow-blue-400/30"
    },
    {
      name: "Phone ", 
      icon: PhoneCall,
      url: "+25174268517",
      color: "hover:text-blue-400 hover:shadow-blue-400/30"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on exciting projects or just want to say hello? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/30 border-border/50 hover:shadow-card transition-all duration-300 animate-fade-in-up">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Contact Info */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-primary">Get In Touch</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Whether you have a project in mind, want to collaborate, or just want to chat about tech, 
                      I'm always open to new opportunities and connections.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>Open to project collaborations</span>
                  </div>

                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Github className="w-5 h-5 text-primary" />
                    <span>Available for open source contributions</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-center">Connect With Me</h3>
                  <div className="flex flex-col gap-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <Button
                          key={social.name}
                          variant="outline"
                          size="lg"
                          className={`w-full justify-start gap-4 border-border/50 hover:border-primary/50 transition-all duration-300 ${social.color} animate-fade-in-up`}
                          style={{ animationDelay: `${index * 0.1}s` }}
                          onClick={() => window.open(social.url, '_blank')}
                        >
                          <IconComponent className="w-6 h-6" />
                          <span className="text-lg">{social.name}</span>
                        </Button>
                      );
                    })}
                  </div>

                  <div className="text-center pt-4">
                    <Card className="inline-block bg-gradient-secondary border-primary/20 hover:shadow-glow transition-all duration-300">
                      <CardContent className="p-4">
                        <p className="text-sm text-primary font-semibold">
                          💬 Always excited to discuss new ideas and opportunities!
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;