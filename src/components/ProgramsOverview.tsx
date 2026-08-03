import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, FlaskConical } from "lucide-react";
import middleSchoolImg from "@/assets/middle_school.png";
import highSchoolImg from "@/assets/HighSchool.jpg";

const programs = [
  {
    title: "GYRA Laureate Program",
    grades: "Grades 6–8",
    image: middleSchoolImg,
    icon: BookOpen,
    description:
      "Introduce young minds to the joy of scientific inquiry. Students learn observation, questioning, and basic research methodology through fun, hands-on projects.",
    highlights: [
      "Age-appropriate research methodology",
      "Guided exploration & experimentation",
      "Team-based projects",
      "Presentation skills development",
    ],
  },
  {
    title: "GYRA Fellow Program",
    grades: "Grades 9–12",
    image: highSchoolImg,
    icon: FlaskConical,
    description:
      "Advanced research training for serious young scientists. Students design independent studies, analyze data, and present findings at national and international conferences.",
    highlights: [
      "Independent research projects",
      "Advanced data analysis",
      "Academic paper writing",
      "IRCC conference participation",
    ],
  },
];

const ProgramsOverview = () => (
  <section className="py-20 lg:py-28">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Programs</span>
        <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-foreground mt-3 mb-4">
          Two Pathways, One Mission
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Whether your child is just discovering science or ready to lead their own research — GYRA has a program for them.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {programs.map((p) => (
          <div
            key={p.title}
            className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow group"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium text-primary">
                {p.grades}
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-3">
                <p.icon className="text-primary" size={22} />
                <h3 className="font-heading font-bold text-xl text-foreground">{p.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.description}</p>
              <ul className="space-y-2 mb-6">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/programs">
                  Learn More <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProgramsOverview;
