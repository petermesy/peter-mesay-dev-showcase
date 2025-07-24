import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";

const Resume = () => {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/Peter-Messay-Resume.pdf';
    link.download = 'Peter-Messay-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Download my complete resume to learn more about my experience, skills, and achievements.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-card/50 border-border/50 hover:bg-card/70 hover:shadow-card transition-all duration-300 animate-fade-in-up">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">
                    Peter Mesay - Developer Resume
                  </h3>
                  <p className="text-muted-foreground">
                    Full Stack Developer • Machine Learning Expert • AI Engineer
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div>
                    <span className="font-semibold text-foreground">Experience:</span> Full Stack Development
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Specialization:</span> AI & ML
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Education:</span> Software Engineering
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Projects:</span> 6+ Major Projects
                  </div>
                </div>

                <Button 
                  onClick={handleDownload}
                  size="lg"
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume (PDF)
                </Button>

                <p className="text-xs text-muted-foreground">
                  Last updated: January 2024 • PDF Format • 2 Pages
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resume;