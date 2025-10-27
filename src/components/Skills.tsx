import { Code2, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: <Code2 className="text-primary" size={32} />,
      skills: [
        { name: "Programming", items: ["Python", "Java", "JavaScript"] },
        { name: "Web Technologies", items: ["HTML5", "CSS3", "React.js"] },
        { name: "Databases", items: ["SQL", "MongoDB"] },
        { name: "Tools & Frameworks", items: ["Vite", "Vercel", "Git"] },
      ],
    },
    {
      title: "Soft Skills",
      icon: <Lightbulb className="text-primary" size={32} />,
      skills: [
        { name: "Problem Solving", items: ["Critical thinking", "Analytical approach"] },
        { name: "Collaboration", items: ["Team communication", "Project ownership"] },
        { name: "Learning", items: ["Data-driven decisions", "Continuous improvement"] },
        { name: "Leadership", items: ["Initiative", "Responsibility"] },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover-lift"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">
                      {skill.name}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full border border-border hover:border-primary transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
