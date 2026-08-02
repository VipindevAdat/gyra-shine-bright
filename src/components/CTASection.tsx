import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="py-20 lg:py-28 bg-navy text-primary-foreground">
    <div className="container text-center">
      <h2 className="text-3xl lg:text-4xl font-heading font-extrabold mb-4">
        Ready to Start the Journey?
      </h2>
      <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8 leading-relaxed">
        Join thousands of young scientists across the globe. Whether you're a student, parent, or teacher — there's a place for you in GYRA.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button asChild size="lg" className="bg-gradient-hero hover:opacity-90 transition-opacity text-base px-8 h-12">
          <Link to="/contact">
            Register Now <ArrowRight className="ml-2" size={18} />
          </Link>
        </Button>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 h-12">
          <Link to="/programs">Explore Programs</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default CTASection;
