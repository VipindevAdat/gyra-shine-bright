import { Sparkles, Network, Presentation, BookMarked } from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "Innovative Education Model",
    description:
      "A collaborative, modern, and research-oriented training framework that engages students in advanced scientific methodologies.",
  },
  {
    icon: Network,
    title: "Diverse Global Network",
    description:
      "Access to a worldwide coalition of professionals — scientists, engineers, doctors, educators, artists, and writers.",
  },
  {
    icon: Presentation,
    title: "Authentic Research Platforms",
    description:
      "Initiatives such as the International Research Conference for Children (IRCC), facilitating direct engagement with established experts.",
  },
  {
    icon: BookMarked,
    title: "Student Research Publication",
    description:
      "A peer-reviewed journal dedicated to publishing research by school students.",
  },
];

const GyraProvidesSection = () => (
  <section className="py-20 lg:py-28">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">What We Offer</span>
        <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-foreground mt-3 mb-4">
          GYRA Provides
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Everything a young researcher needs — a proven model, a global network, and real platforms to publish and present.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex gap-5 bg-card rounded-xl p-7 shadow-card hover:shadow-elevated transition-shadow"
          >
            <div className="w-12 h-12 rounded-lg bg-teal-light flex items-center justify-center shrink-0">
              <item.icon className="text-primary" size={22} />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GyraProvidesSection;
