import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-navy via-primary/20 to-accent/10 overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/30"
            style={{
              width: Math.random() * 40 + 20 + "px",
              height: Math.random() * 40 + 20 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: `drift ${Math.random() * 20 + 15}s linear infinite`,
              animationDelay: Math.random() * 5 + "s",
            }}
          />
        ))}

        {/* Accent floating elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`accent-${i}`}
            className="absolute rounded-full bg-accent/20 blur-sm"
            style={{
              width: Math.random() * 30 + 10 + "px",
              height: Math.random() * 30 + 10 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: `float ${Math.random() * 15 + 12}s ease-in-out infinite`,
              animationDelay: Math.random() * 4 + "s",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-md mx-auto">
        {/* Animated 404 */}
        <div className="mb-8">
          <div className="text-8xl lg:text-9xl font-heading font-extrabold text-gradient animate-pulse">
            404
          </div>
        </div>

        {/* Text */}
        <h1 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-3">
          Lost in Space
        </h1>
        <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
          You've drifted too far from our research platform. Let's navigate you back to the mission.
        </p>

        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="bg-gradient-hero hover:opacity-90 transition-opacity text-base px-6 h-11">
            <Link to="/">
              <Home size={18} className="mr-2" />
              Return Home
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-base px-6 h-11 border-primary/50 text-primary hover:bg-primary/10"
            onClick={() => window.history.back()}
          >
            <button>
              <ArrowLeft size={18} className="mr-2" />
              Go Back
            </button>
          </Button>
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes drift {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translate(50px, -100px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(20px);
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
