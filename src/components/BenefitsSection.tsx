import { Brain, Microscope, Globe, Users, Award, Heart } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Critical Thinking",
    description: "Develop analytical skills through structured scientific inquiry and evidence-based reasoning.",
  },
  {
    icon: Microscope,
    title: "Real Research Skills",
    description: "Learn authentic research methodology - from problem statement to hypothesis to publishable research.",
  },
  {
    icon: Globe,
    title: "Global Exposure",
    description: "Connect with peers and mentors from around the world through GYRA's international network.",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Get guided by volunteer advisors and researchers from leading institutions worldwide.",
  },
  {
    icon: Award,
    title: "Conference Access",
    description: "Present your research at IRCC — the International Research Conference for Children.",
  },
  {
    icon: Heart,
    title: "Inclusive Programs",
    description: "GYRA's Special Mission welcomes students with disabilities into the world of research.",
  },
];

const BenefitsSection = () => (
  <section className="py-20 lg:py-28 bg-muted">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">Why GYRA</span>
        <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-foreground mt-3 mb-4">
          What Your Child Gains
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          GYRA goes beyond textbooks<br />Building lifelong skills through hands-on scientific research.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="bg-card rounded-lg p-8 shadow-card hover:shadow-elevated transition-shadow group"
          >
            <div className="w-12 h-12 rounded-lg bg-teal-light flex items-center justify-center mb-5 group-hover:bg-gradient-hero transition-colors">
              <b.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={24} />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{b.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
