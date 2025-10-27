import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/20 hover-lift">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Briefcase className="text-primary" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">AI Intern</h3>
                <p className="text-xl text-primary font-semibold mb-2">Smart Internz</p>
                <div className="flex flex-wrap gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>July 2025 - Present</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>Remote</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-primary/30 pl-6 space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-accent mb-2">
                  EduTutor AI Project
                </h4>
                <p className="text-foreground leading-relaxed mb-4">
                  Contributing to EduTutor AI, a generative AI-powered learning assistant integrated with LMS platforms to transform personalized education.
                </p>
              </div>

              <div>
                <h5 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
                  Key Responsibilities & Achievements
                </h5>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">▹</span>
                    <span className="text-muted-foreground">
                      Enhancing personalized learning experiences using <span className="text-foreground font-medium">Natural Language Processing</span> and <span className="text-foreground font-medium">AI-driven content generation</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">▹</span>
                    <span className="text-muted-foreground">
                      Developing and optimizing <span className="text-foreground font-medium">backend logic</span> for seamless LMS integration
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">▹</span>
                    <span className="text-muted-foreground">
                      Implementing <span className="text-foreground font-medium">AI integration features</span> to support adaptive learning paths
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">▹</span>
                    <span className="text-muted-foreground">
                      Optimizing <span className="text-foreground font-medium">user experience</span> through intuitive interface design and performance improvements
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <h5 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
                  Technologies Used
                </h5>
                <div className="flex flex-wrap gap-2">
                  {["Python", "NLP Models", "LMS APIs", "React.js", "MongoDB"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
