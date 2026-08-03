import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, FlaskConical, ArrowRight, CheckCircle, Globe, Accessibility } from "lucide-react";
import middleSchoolImg from "@/assets/middle-school-program.png.asset.json";
import highSchoolImg from "@/assets/high-school-program.jpg.asset.json";
import irccImg from "@/assets/ircc-2.jpg.asset.json";
import inclusiveImg from "@/assets/special-mission.jpeg.asset.json";

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




const stages = [
  {
    step: "1",
    title: "Inception",
    items: [
      "Outreach to schools, teachers, or parents",
      "Identification of interested participants",
      "Orientation sessions",
      "GYRA tree planting",
      "Signing of MOU",
    ],
  },
  {
    step: "2",
    title: "Establishment",
    items: [
      "Formation of GYRA units",
      "Assignment of an expert mentor",
      "Training sessions for teachers and students",
    ],
  },
  {
    step: "3",
    title: "Exploration",
    items: [
      "Weekly one-hour meetings",
      "Topic selection after several iterations",
      "Research planning and literature review",
      "Experimental design and data collection",
      "Analysis and reporting",
    ],
  },
  {
    step: "4",
    title: "Dissemination",
    items: [
      "Thesis preparation and defense",
      "Conference presentations, including IRCC",
      "Publication in peer-reviewed international journals",
    ],
  },
];

const roadmap = [
  { year: "2023", milestone: "First school in GYRA" },
  { year: "2026", milestone: "2,000 kids, 5+ countries, GYRA peer-reviewed research journal" },
  { year: "2028", milestone: "Post-GYRA Fellowship" },
  { year: "2029", milestone: "GYRA funded research" },
  { year: "2030", milestone: "GYRA Labs" },
  { year: "2035", milestone: "Add 2,000 kids/year, expanding to 10+ countries/year" },
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
        <div className="container max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-teal-light flex items-center justify-center">
              <BookOpen className="text-primary" size={20} />
            </div>
            <span className="text-sm font-medium text-primary bg-teal-light px-3 py-1 rounded-full">Grades 6–8</span>
          </div>
          <h2 className="text-3xl font-heading font-extrabold text-foreground mb-2">GYRA Laureate Program</h2>
          <p className="text-sm font-medium text-primary mb-6">Research in Middle School</p>
          <div className="rounded-xl overflow-hidden shadow-elevated mb-8">
            <img src={middleSchoolImg.url} alt="GYRA Laureate Program students in a science lab" className="w-full h-auto object-cover" loading="lazy" width={800} height={600} />
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            GYRA's middle school program introduces students to the fundamentals of research through a structured, guided, and highly engaging learning experience. Students work closely with trained mentors on a weekly basis — exploring ideas, asking meaningful questions, and presenting their findings with confidence. The program typically spans approximately three years, and upon successful completion students graduate as <strong className="text-foreground">GYRA Laureates</strong>.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
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
      </section>

      {/* High School */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-teal-light flex items-center justify-center">
              <FlaskConical className="text-primary" size={20} />
            </div>
            <span className="text-sm font-medium text-primary bg-teal-light px-3 py-1 rounded-full">Grades 9–12</span>
          </div>
          <h2 className="text-3xl font-heading font-extrabold text-foreground mb-2">GYRA Fellow Program</h2>
          <p className="text-sm font-medium text-primary mb-6">Research in High School</p>
          <div className="rounded-xl overflow-hidden shadow-elevated mb-8">
            <img src={highSchoolImg.url} alt="GYRA Fellow Program student presenting research at IRCC" className="w-full h-auto object-cover" loading="lazy" width={800} height={600} />
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A personalized one-on-one mentoring program for high school students interested in research, innovation, and global collaboration. Each student receives tailored guidance aligned with their research interests, academic goals, and college application timelines, under the supervision of experienced Ph.D.-level mentors. Students can access the program by volunteering with GYRA and earning mentorship credits, or through a flexible pay-per-hour model that directly supports GYRA's initiatives.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
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
      </section>





      {/* IRCC */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container max-w-4xl">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-full bg-teal-light flex items-center justify-center mx-auto mb-5">
              <Globe className="text-primary" size={24} />
            </div>
            <h2 className="text-3xl font-heading font-extrabold text-foreground mb-4">
              International Research Conference for Children (IRCC)
            </h2>
          </div>
          <div className="rounded-xl overflow-hidden shadow-elevated mb-10 max-w-3xl mx-auto">
            <img src={irccImg.url} alt="Scientists and young researchers at the IRCC poster session" className="w-full h-auto object-cover" loading="lazy" width={1200} height={800} />
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center">
            <p>
              IRCC, launched in 2023, is GYRA's annual flagship program and a premier global platform for student researchers, educators, parents, and other stakeholders. The conference features keynote addresses, plenary sessions, and presentations by eminent scientists, along with oral and poster presentations by school students.
            </p>
            <p>
              A unique aspect of IRCC is its focus on fostering direct interaction between young learners and established scientists — encouraging collaborative learning and inspiring the next generation of researchers and innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Inclusive Research Platform */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-4xl">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-full bg-teal-light flex items-center justify-center mx-auto mb-5">
              <Accessibility className="text-primary" size={24} />
            </div>
            <h2 className="text-3xl font-heading font-extrabold text-foreground mb-4">
              Inclusive Research Platform for Children with Disabilities
            </h2>
          </div>
          <div className="rounded-xl overflow-hidden shadow-elevated mb-10 max-w-3xl mx-auto">
            <img src={inclusiveImg.url} alt="GYRA inclusive research workshop group photo with students, teachers and mentors" className="w-full h-auto object-cover" loading="lazy" width={1200} height={600} />
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center">
            <p>
              GYRA supports students with disabilities, fostering their scientific curiosity and research skills. We create an inclusive mentoring platform for children with disabilities, paving the way for them to participate in mainstream research.
            </p>
            <p>
              GYRA advocates for training in research methodology as a tool for empowering persons with disabilities, ensuring equal opportunities for scientific exploration and innovation. This approach of research as an early intervention tool has been part of research and pilot studies under the supervision of Prof. Pavan Antony, Adelphi University, NY.
            </p>
          </div>
        </div>
      </section>


      {/* How It Works — Operations & Approach */}
      <section className="py-20 lg:py-28 bg-navy text-primary-foreground">
        <div className="container max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl font-heading font-extrabold mt-3 mb-5">Operations and Approach</h2>
            <p className="text-primary-foreground/70 leading-relaxed">
              GYRA operates through structured organizations including schools and non-profit organizations where children can be safely gathered for research activities. In special cases, GYRA works with neighbourhoods, provided parents are willing to take responsibility for the safe conduct of the program. For the high school program, the same approach is followed on an individual basis, on a timeline agreed upon by the scholar and the advisor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map((s) => (
              <div key={s.step} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center mb-4 text-lg font-heading font-extrabold">
                  {s.step}
                </div>
                <h3 className="font-heading font-bold text-lg mb-3">{s.title}</h3>
                <ul className="space-y-2">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-primary-foreground/70 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Roadmap */}
          <div className="mt-20">
            <h3 className="text-2xl font-heading font-extrabold text-center mb-4">The GYRA Roadmap</h3>
            <p className="text-center text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto mb-12">
              GYRA is not just a program — it is a long-term movement to transform how young students engage with science, research, and innovation.
            </p>
            <ol className="flex gap-6 overflow-x-auto pb-4 snap-x md:grid md:grid-cols-6 md:gap-4 md:overflow-visible">
              {roadmap.map((r) => (
                <li key={r.year} className="relative snap-start shrink-0 w-56 md:w-auto pt-8">
                  <span className="absolute left-0 top-[7px] h-px w-full bg-primary-foreground/20" />
                  <span className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-hero border-2 border-navy" />
                  <div className="font-heading font-extrabold text-accent text-lg leading-none mb-1">{r.year}</div>
                  <p className="text-sm text-primary-foreground/70 leading-relaxed">{r.milestone}</p>
                </li>
              ))}
            </ol>

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
