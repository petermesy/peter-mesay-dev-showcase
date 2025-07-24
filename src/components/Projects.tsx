import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Academic ERP Q&A Application",
      description: "Advanced ERP Q&A system with AI integration for educational institutions. Features intelligent questioning, content-aware answers in Multiple Choice Question formats and advanced search functionality.",
      technologies: ["Python", "Flask", "Machine Learning", "SQL"],
      category: "Full Stack & AI"
    },
    {
      title: "Iron Wheels Tracker",
      description: "Real-time tracking system for TGS transportation companies enabling efficient fleet management and route optimization with advanced analytics.",
      technologies: ["React", "Node.js", "MongoDB", "GPS Integration"],
      category: "Full Stack"
    },
    {
      title: "BREF Social Media Platform",
      description: "Feature-rich social networking platform with real-time messaging, content sharing, and advanced user interaction capabilities.",
      technologies: ["React", "Express.js", "MongoDB", "Socket.io"],
      category: "Full Stack"
    },
    {
      title: "PackLight",
      description: "Smart Logistics Management System for enhanced supply chain efficiency with real-time tracking and automated optimization algorithms.",
      technologies: ["Python", "Django", "PostgreSQL", "REST APIs"],
      category: "Backend & Analytics"
    },
    {
      title: "Book Store App",
      description: "Modern e-commerce platform with advanced search capabilities, inventory management, and seamless user experience.",
      technologies: ["React", "Node.js", "MongoDB", "Payment Integration"],
      category: "E-commerce"
    },
    {
      title: "E-commerce Website",
      description: "Full-featured online shopping platform with product catalog, shopping cart, and secure payment processing.",
      technologies: ["React", "Express.js", "MySQL", "Stripe API"],
      category: "E-commerce"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work in full-stack development, machine learning, and innovative web solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group bg-card/50 border-border/50 hover:bg-card/70 hover:shadow-card transition-all duration-300 animate-fade-in-up h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs border-primary/30 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 hover:bg-primary hover:text-primary-foreground"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 hover:bg-primary hover:text-primary-foreground"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;