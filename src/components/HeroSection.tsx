import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Students collaborating in a science lab"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-navy/70" />
    </div>

    <div className="container relative z-10 py-20">
      <div className="max-w-2xl animate-fade-up">
        <span className="inline-block bg-primary/20 text-teal-light text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          A Global Platform for Young Scientists
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-tight mb-6 text-primary-foreground">
          Empowering Your Child to{" "}
          <span className="text-gradient">Think Like a Scientist</span>
        </h1>
        <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed max-w-xl">
          GYRA nurtures curiosity and critical thinking through real research projects - guided by expert mentors from around the world. Programs for grades 1–12.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="bg-gradient-hero hover:opacity-90 transition-opacity text-base px-8 h-12">
            <Link to="/programs">
              Explore Programs <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 h-12">
            <Link to="/contact">Register Now</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
