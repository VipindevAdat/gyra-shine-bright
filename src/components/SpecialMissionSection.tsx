import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SpecialMissionSection = () => (
  <section className="py-20 lg:py-28">
    <div className="container">
      <div className="max-w-4xl mx-auto text-center bg-card rounded-2xl p-10 lg:p-16 shadow-elevated relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-hero" />
        <div className="w-16 h-16 rounded-full bg-teal-light flex items-center justify-center mx-auto mb-6">
          <Heart className="text-primary" size={28} />
        </div>
        <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-foreground mb-4">
          GYRA Special Mission
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
          GYRA welcomes students with disabilities, marking a significant step towards inclusivity in research. Specialists in special education provide training in research methodology to empower these students to pursue research.
        </p>
        <p className="text-sm text-foreground/70 mb-8 max-w-xl mx-auto">
          We believe every child is equally capable of thinking like a scientist — and we're here to prove it.
        </p>
        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <Link to="/about">Learn More About Our Mission</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default SpecialMissionSection;
