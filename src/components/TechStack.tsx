import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TechStack = () => {
  const techCategories = [
    {
      title: "Languages",
      color: "bg-red-500/10 text-red-400 border-red-500/20",
      technologies: ["C++", "Java", "JavaScript", "Python", "PHP"]
    },
    {
      title: "Front-end",
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      technologies: ["Bootstrap", "HTML5", "CSS3", "React", "React Native", "Flutter", "Tailwind CSS", "TypeScript"]
    },
    {
      title: "Back-end", 
      color: "bg-green-500/10 text-green-400 border-green-500/20",
      technologies: ["Express", "Next.js", "Node.js", "Django", "Flask"]
    },
    {
      title: "Databases",
      color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
      technologies: ["MySQL", "Postgres", "SQLite", "MongoDB", "Jupyter", "Anaconda", "Spark"]
    },
    {
      title: "Developer Tools",
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      technologies: ["Git", "Figma", "Postman", "Insomnia", "Google Cloud", "GraphQL", "Adobe Illustrator"]
    },
    {
      title: "AI Development",
      color: "bg-pink-500/10 text-pink-400 border-pink-500/20",
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face"]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Languages & <span className="bg-gradient-primary bg-clip-text text-transparent">Tools</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="bg-card/30 border-border/50 hover:bg-card/50 transition-all duration-300 hover:shadow-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center text-primary">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.technologies.map((tech, techIndex) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className={`${category.color} hover:scale-105 transition-all duration-200 cursor-default animate-fade-in`}
                      style={{ animationDelay: `${(index * 0.1) + (techIndex * 0.05)}s` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <Card className="inline-block bg-gradient-secondary border-primary/20 hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6">
              <p className="text-lg text-primary font-semibold">
                🚀 Always learning new technologies and staying up-to-date with industry trends
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechStack;