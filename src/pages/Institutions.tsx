import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { School, MapPin, ArrowRight } from "lucide-react";

type Institution = { name: string; location: string };
type Country = { country: string; institutions: Institution[] };

const countries: Country[] = [
  {
    country: "India",
    institutions: [
      { name: "Rajagiri Public School", location: "Kalamassery, Kerala" },
      { name: "Rajagiri Seashore CMI School", location: "Vypin, Kerala" },
      { name: "Nirmala Training Centre", location: "Ernakulam, Kerala" },
      { name: "Guardian Angels", location: "Manjummel, Ernakulam, Kerala" },
      { name: "Holy Cross Special School", location: "Kottayam, Kerala" },
      { name: "Odappalam Government School", location: "Wayanad, Kerala" },
      { name: "St. Antony's", location: "Kizhakkambalam, Kerala" },
      { name: "St. Antony's", location: "Thayyil, Kannur, Kerala" },
      { name: "Don Bosco Speech & Hearing School", location: "Kannur, Kerala" },
      { name: "St. John's School", location: "Anchal, Kerala" },
      { name: "Jeevodaya Special School", location: "Kasaragod, Kerala" },
      { name: "St. Paul's AUPS", location: "Kasaragod, Kerala" },
      { name: "St. Joseph's Boys", location: "Calicut, Kerala" },
      { name: "Providence School", location: "Calicut, Kerala" },
      { name: "Rajagiri CMS Public School", location: "Cherthala, Kerala" },
      { name: "Pratheeksha Bhavan", location: "Irinjalakuda, Kerala" },
      { name: "Chaithanya Special School", location: "Palakkad, Kerala" },
      { name: "St. Sebastian's", location: "Ponjikkara, Kochi, Kerala" },
      { name: "Bhavans Vikas Vidyalaya", location: "Kalady, Kerala" },
      { name: "PSHSS Thirumudikkunnu", location: "Thrissur, Kerala" },
      { name: "Villa Nazareth CBSE School", location: "Trivandrum, Kerala" },
      { name: "Bethany School", location: "Trivandrum, Kerala" },
      { name: "KVUPS", location: "Malappuram, Kerala" },
      { name: "NVKS Attoor", location: "Nagercoil, Tamil Nadu" },
      { name: "NVKS Vidyalaya", location: "Vettuvenni, Tamil Nadu" },
      { name: "St. Vincent Pallotti School", location: "Nagpur, Maharashtra" },
      { name: "Vidhyadhiraja High School", location: "Mumbai, Maharashtra" },
      { name: "Sharon English Medium School", location: "Mumbai, Maharashtra" },
      { name: "Adarsha Vidyalaya School", location: "Mumbai, Maharashtra" },
      { name: "ELF Neighbourhood Unit", location: "Mumbai, Maharashtra" },
      { name: "St. Mary's ICSE School", location: "Mumbai, Maharashtra" },
      { name: "Navabharath Nutum", location: "Mumbai, Maharashtra" },
      { name: "Holy Cross Special School", location: "Thane, Mumbai, Maharashtra" },
      { name: "Margram High School", location: "Birbhum, West Bengal" },
      { name: "Nawabganj Balika Vidyalaya", location: "Ichapore, North 24 Parganas, West Bengal" },
    ],
  },
  {
    country: "United States of America",
    institutions: [
      { name: "Kerala Association of Washington", location: "Everett, Washington" },
      { name: "Neighbourhood Unit", location: "Dallas, Texas" },
      { name: "GYRA Rancho Cucamonga", location: "Rancho Cucamonga, California" },
    ],
  },
  {
    country: "Kuwait",
    institutions: [{ name: "Indian Community School", location: "Salmiya, Kuwait" }],
  },
  {
    country: "Singapore",
    institutions: [{ name: "Neighbourhood Unit", location: "Singapore" }],
  },
];

const totalInstitutions = countries.reduce((n, c) => n + c.institutions.length, 0);

const Institutions = () => {
  const [region, setRegion] = useState<string>("All");
  const regions = ["All", ...countries.map((c) => c.country)];
  const visible = region === "All" ? countries : countries.filter((c) => c.country === region);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-muted py-16 lg:py-24">
          <div className="container text-center max-w-3xl">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">GYRA Institutions</span>
            <h1 className="text-4xl lg:text-5xl font-heading font-extrabold text-foreground mt-3 mb-5">
              Our Network of Associated Schools
            </h1>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Discover the schools and units associated with GYRA, dedicated to fostering excellence in research. Browse the network by region and find the ones near you.
            </p>
          </div>
        </section>

        {/* List */}
        <section className="py-20 lg:py-28">
          <div className="container max-w-5xl">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {regions.map((r) => (
                <button
                  key={r}
                  onClick={() => setRegion(r)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors border ${
                    region === r
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-foreground/70 border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>

            {visible.map((c) => (
              <div key={c.country} className="mb-14 last:mb-0">
                <div className="flex items-center gap-3 mb-6">
                  <School className="text-primary" size={20} />
                  <h2 className="font-heading font-bold text-xl text-foreground">{c.country}</h2>
                  <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                    {c.institutions.length} institutions
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {c.institutions.map((i) => (
                    <div
                      key={`${i.name}-${i.location}`}
                      className="bg-card rounded-xl p-5 shadow-card hover:shadow-elevated transition-shadow"
                    >
                      <h3 className="font-heading font-bold text-sm text-foreground mb-2 leading-snug">{i.name}</h3>
                      <p className="flex items-start gap-2 text-xs text-muted-foreground">
                        <MapPin size={14} className="shrink-0 mt-0.5 text-primary" />
                        {i.location}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-muted text-center">
          <div className="container max-w-2xl">
            <h2 className="text-3xl font-heading font-extrabold text-foreground mb-4">
              Bring GYRA to Your School
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Join {totalInstitutions}+ institutions across the world already nurturing young researchers with GYRA — at no core-program cost to your institution.
            </p>
            <Button asChild size="lg" className="bg-gradient-hero hover:opacity-90 transition-opacity text-base px-8 h-12">
              <Link to="/contact">
                Partner With Us <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Institutions;
