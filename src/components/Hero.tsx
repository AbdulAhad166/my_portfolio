import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <p className="text-primary text-lg font-medium">Hi, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="gradient-text">Abdul Ahad</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                AI & Full-Stack Developer
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Building Smart, Scalable, and Human-Centric Digital Experiences.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 justify-center">
              <Button
                onClick={() => scrollToSection("#projects")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary"
              >
                View Projects
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button
                onClick={() => scrollToSection("#contact")}
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4 justify-center">
              <a
                href="https://github.com/AbdulAhad166"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/abdulahad16/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:abdulahad162005@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
