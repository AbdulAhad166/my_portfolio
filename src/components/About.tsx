import { GraduationCap, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Seshadri Rao Gudlavalleru Engineering College",
      period: "2022 - 2026 (Expected April 2026)",
      icon: "🎓",
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Narayana Junior College",
      period: "Completed May 2022",
      icon: "📚",
    },
    {
      degree: "10th Class",
      institution: "Sri Chaitanya Techno School",
      period: "Completed April 2020",
      icon: "🏫",
    },
  ];

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            About Me
          </h2>

          <div className="space-y-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover-lift">
              <p className="text-lg text-foreground leading-relaxed">
                I'm <span className="text-primary font-semibold">ABDUL</span>, a final-year B.Tech student in Computer Science & Engineering with a passion for building scalable, user-centric applications. Currently interning at Smart Internz, I'm contributing to <span className="text-accent font-semibold">EduTutor AI</span> — an innovative blend of generative AI and LMS integration aimed at transforming education.
              </p>
            </Card>

            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="text-primary" size={28} />
                <h3 className="text-2xl font-semibold">Educational Background</h3>
              </div>

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-card/50 backdrop-blur-sm border-border hover-lift group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl group-hover:scale-110 transition-transform">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-foreground mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-muted-foreground mb-2">{edu.institution}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <h3 className="text-xl font-semibold mb-4 text-primary">Interests & Focus Areas</h3>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent">▹</span>
                  <span>Generative AI & Machine Learning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">▹</span>
                  <span>Educational Technology Innovation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">▹</span>
                  <span>Full-Stack Web Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">▹</span>
                  <span>Scalable Application Architecture</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
