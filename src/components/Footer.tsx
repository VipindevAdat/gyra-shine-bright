import { Link } from "react-router-dom";
import { Mail, MapPin, Globe } from "lucide-react";
import gyraLogo from "@/assets/gyra-logo.png.asset.json";

const Footer = () => (
  <footer className="bg-navy text-primary-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <img
            src={gyraLogo.url}
            alt="GYRA — Global Young Researchers' Academy logo"
            className="h-14 w-auto mb-4 bg-primary-foreground rounded-md p-2"
          />

          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Global Young Researchers' Academy — empowering the next generation to think like scientists.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold mb-4 text-sm uppercase tracking-wider text-primary-foreground/50">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Home", path: "/" },
              { label: "Programs", path: "/programs" },
              { label: "Why GYRA", path: "/why-gyra" },
              { label: "About Us", path: "/about" },
              { label: "GYRA Institutions", path: "/institutions" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-heading font-bold mb-4 text-sm uppercase tracking-wider text-primary-foreground/50">Programs</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/programs" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Middle School
              </Link>
            </li>
            <li>
              <Link to="/programs" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                High School
              </Link>
            </li>
            <li>
              <a href="https://www.ircc.world/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                IRCC Conference
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-bold mb-4 text-sm uppercase tracking-wider text-primary-foreground/50">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2 text-primary-foreground/70">
              <Mail size={16} className="mt-0.5 shrink-0" />
              <span>info@thinkgyra.org</span>
            </li>
            <li className="flex items-start gap-2 text-primary-foreground/70">
              <Globe size={16} className="mt-0.5 shrink-0" />
              <span>thinkgyra.org</span>
            </li>
            <li className="flex items-start gap-2 text-primary-foreground/70">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>Kerala, India (Global Operations)</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} GYRA — Global Young Researchers' Academy. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
