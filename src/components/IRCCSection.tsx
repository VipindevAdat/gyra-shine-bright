import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import irccImg from "@/assets/ircc-conference.jpg";

const IRCCSection = () => (
  <section className="py-20 lg:py-28 bg-muted">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-xl overflow-hidden shadow-elevated">
          <img
            src={irccImg}
            alt="International Research Conference for Children"
            className="w-full h-auto object-cover"
            loading="lazy"
            width={800}
            height={600}
          />
        </div>
        <div>
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Annual Event</span>
          <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-foreground mt-3 mb-5">
            International Research Conference for Children
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            IRCC is a three-day, in-person event where young researchers from grades 1–12 showcase their projects on a global stage. It's where curiosity meets recognition. Last IRCC was in Milpitas, CA, USA
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Present research to an international audience",
              "Network with peers and scientists worldwide",
              "Receive expert feedback on your work",
              "Open to all GYRA scholars",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <Button asChild className="bg-gradient-hero hover:opacity-90 transition-opacity">
            <a href="https://www.ircc.world/" target="_blank" rel="noopener noreferrer">
              Visit IRCC Website <ExternalLink className="ml-2" size={16} />
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default IRCCSection;
