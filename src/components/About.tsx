import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const aboutItems = [
    { emoji: "👋", text: "Hi, I'm Peter Mesay" },
    { emoji: "🤖", text: "Full Stack Developer and Machine Learning Expert with expertise in modern web technologies" },
    { emoji: "🎓", text: "Computer Science graduate with hands-on experience in Python, Flask, React, and cloud technologies" },
    { emoji: "🚀", text: "Built multiple projects including Academic ERP systems, social media platforms, and AI-powered applications" },
    { emoji: "💡", text: "Passionate about creating scalable solutions and learning cutting-edge technologies" },
    { emoji: "💞️", text: "Looking to collaborate on innovative projects in AI, machine learning, and full-stack development" },
    { emoji: "📫", text: "Let's connect and discuss exciting opportunities in software development!" }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions and learning new technologies.
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