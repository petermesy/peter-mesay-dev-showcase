import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const aboutItems = [
    { emoji: "👋", text: "Hi, I'm Peter Messay" },
    { emoji: "🤖", text: "AI Engineer, Full Stack Developer & Machine Learning Expert with a passion for building intelligent, scalable solutions." },
    { emoji: "💡", text: "Experienced in designing, developing, and deploying AI-driven applications and modern web platforms." },
    { emoji: "�", text: "Skilled in Python, JavaScript/TypeScript, React, Node.js, and cloud technologies. Strong background in deep learning, NLP, and data science." },
    { emoji: "🤝", text: "Open to collaboration on innovative projects, research, and open source. Let's connect and create impactful technology together!" }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I am an accomplished AI Engineer and Full Stack Developer with a strong background in machine learning, deep learning, and web development. I thrive on solving complex problems and delivering high-quality, impactful solutions. My expertise spans building intelligent systems, modern web apps, and collaborating with diverse teams to drive innovation.
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {aboutItems.map((item, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border-border/50 hover:bg-card/70 transition-all duration-300 hover:shadow-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                    {item.emoji}
                  </span>
                  <p className="text-lg text-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="inline-block bg-gradient-secondary border-primary/20 hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6">
              <p className="text-lg text-primary font-semibold">
                ✨ Always excited to learn and collaborate on amazing projects!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;