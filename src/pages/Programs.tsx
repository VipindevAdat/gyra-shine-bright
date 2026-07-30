import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, FlaskConical, ArrowRight, CheckCircle } from "lucide-react";
import middleSchoolImg from "@/assets/middle-school-program.jpg";
import highSchoolImg from "@/assets/high-school-program.jpg";

const middleSchoolFeatures = [
  "Introduction to the scientific methodology",
  "Observation and questioning skills",
  "Guided group experiments",
  "Basic data collection & journaling",
  "Presentation and communication practice",
  "Fun, hands-on project-based learning",
  "Age-appropriate mentorship from GYRA advisors",
  "Opportunities to present at school-level symposiums",
];

const highSchoolFeatures = [
  "Independent research project design",
  "Advanced hypothesis formulation",
  "Quantitative & qualitative data analysis",
  "Academic paper writing & citation",
  "Poster and oral presentation training",
  "One-on-one expert mentorship",
  "International conference participation (IRCC)",
  "Portfolio building for college applications",
];

const comparisonRows = [
  { aspect: "Target Grades", middle: "5–8", high: "9–12" },
  { aspect: "Research Type", middle: "Guided group projects", high: "Independent studies" },
  { aspect: "Mentorship", middle: "Group advisory", high: "1-on-1 expert mentors" },
  { aspect: "Data Skills", middle: "Observation & journaling", high: "Statistical analysis" },
  { aspect: "Presentations", middle: "School-level symposiums, IRCC", high: "IRCC & international events" },
  { aspect: "Outcome", middle: "Research foundation & curiosity", high: "Research portfolio & publications" },
];

const steps = [
  { step: "1", title: "Register", desc: "Sign up through GYRA or your school's GYRA chapter." },
  { step: "2", title: "Get Matched", desc: "Connect with a mentor who aligns with your research interest." },
  { step: "3", title: "Research", desc: "Design and conduct your research project with expert guidance." },
  { step: "4", title: "Present", desc: "Showcase your work at symposiums and the annual IRCC conference." },
];

const Programs = () => (
  <>
    <Navbar />
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="container text-center max-w-3xl">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Programs</span>
          <h1 className="text-4xl lg:text-5xl font-heading font-extrabold text-foreground mt-3 mb-5">
            A Research Path for Every Age
          </h1>
          <p className="text-muted-foreground leading-relaxed text-lg">
            GYRA was initiated as a research program for middle school students. We further expanded to high school students and started our flagship conference — the International Research Conference for Children (IRCC) — as a platform for young researchers to present their work and interact with leading scientists from different parts of the world.
          </p>
        </div>
      </section>

      {/* Middle School */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-teal-light flex items-center justify-center">
                  <BookOpen className="text-primary" size={20} />
                </div>
                <span className="text-sm font-medium text-primary bg-teal-light px-3 py-1 rounded-full">Grades 6–8</span>
              </div>
              <h2 className="text-3xl font-heading font-extrabold text-foreground mb-2">GYRA Laureate Program</h2>
              <p className="text-sm font-medium text-primary mb-4">Research in Middle School</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                GYRA's middle school program introduces students to the fundamentals of research through a structured, guided, and highly engaging learning experience. Students work closely with trained mentors on a weekly basis — exploring ideas, asking meaningful questions, and presenting their findings with confidence. The program typically spans approximately three years, and upon successful completion students graduate as <strong className="text-foreground">GYRA Laureates</strong>.
              </p>
              <ul className="space-y-3 mb-8">
                {middleSchoolFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground/80">
                    <CheckCircle className="text-primary shrink-0 mt-0.5" size={16} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-gradient-hero hover:opacity-90 transition-opacity">
                <Link to="/contact">
                  Enroll Now <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
            <div className="rounded-xl overflow-hidden shadow-elevated">
              <img src={middleSchoolImg} alt="Middle school students in a science lab" className="w-full h-auto object-cover" loading="lazy" width={800} height={600} />
            </div>
          </div>
        </div>
      </section>

      {/* High School */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-elevated">
              <img src={highSchoolImg} alt="High school students at a research conference" className="w-full h-auto object-cover" loading="lazy" width={800} height={600} />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-teal-light flex items-center justify-center">
                  <FlaskConical className="text-primary" size={20} />
                </div>
                <span className="text-sm font-medium text-primary bg-teal-light px-3 py-1 rounded-full">Grades 9–12</span>
              </div>
              <h2 className="text-3xl font-heading font-extrabold text-foreground mb-2">GYRA Fellow Program</h2>
              <p className="text-sm font-medium text-primary mb-4">Research in High School</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A personalized one-on-one mentoring program for high school students interested in research, innovation, and global collaboration. Each student receives tailored guidance aligned with their research interests, academic goals, and college application timelines, under the supervision of experienced Ph.D.-level mentors. Students can access the program by volunteering with GYRA and earning mentorship credits, or through a flexible pay-per-hour model that directly supports GYRA's initiatives.
              </p>
              <ul className="space-y-3 mb-8">
                {highSchoolFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground/80">
                    <CheckCircle className="text-primary shrink-0 mt-0.5" size={16} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-gradient-hero hover:opacity-90 transition-opacity">
                <Link to="/contact">
                  Enroll Now <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-heading font-extrabold text-foreground text-center mb-12">
            Program Comparison
          </h2>
          <div className="bg-card rounded-xl shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left p-4 font-heading font-bold text-foreground">Aspect</th>
                    <th className="text-left p-4 font-heading font-bold text-primary">Middle School</th>
                    <th className="text-left p-4 font-heading font-bold text-accent">High School</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.aspect} className="border-t border-border">
                      <td className="p-4 font-medium text-foreground">{row.aspect}</td>
                      <td className="p-4 text-muted-foreground">{row.middle}</td>
                      <td className="p-4 text-muted-foreground">{row.high}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-navy text-primary-foreground">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-heading font-extrabold text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-4 text-xl font-heading font-extrabold">
                  {s.step}
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 text-center">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-heading font-extrabold text-foreground mb-4">
            Ready to Begin?
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Take the first step towards thinking like a scientist. Register your interest and we'll connect you with the right program.
          </p>
          <Button asChild size="lg" className="bg-gradient-hero hover:opacity-90 transition-opacity text-base px-8 h-12">
            <Link to="/contact">
              Register Now <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Programs;
