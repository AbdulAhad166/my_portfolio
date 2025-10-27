import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import edututorImage from "@/assets/edututor-project.jpg";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Featured Projects
        </h2>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border hover-lift">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Project Image */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={edututorImage}
                  alt="EduTutor AI Project"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent"></div>
              </div>

              {/* Project Details */}
              <div className="p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="mb-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-accent/20 text-accent rounded-full border border-accent/30">
                      Featured Project
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold mb-4">EduTutor AI</h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    An innovative generative AI-powered learning assistant that integrates seamlessly with Learning Management Systems to provide personalized educational experiences. Leveraging NLP and advanced AI models to transform how students learn and interact with course content.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-accent">•</span>
                          <span>AI-driven personalized learning paths</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-accent">•</span>
                          <span>Seamless LMS integration</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-accent">•</span>
                          <span>Natural language content generation</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-accent">•</span>
                          <span>Adaptive user experience optimization</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {["Python", "NLP", "LMS APIs", "MongoDB", "React.js"].map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="default"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >
                    <a
                      href="https://github.com/AbdulAhad16062005"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2" size={18} />
                      View on GitHub
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href="#contact">
                      <ExternalLink className="mr-2" size={18} />
                      Learn More
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
