import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  CheckCircle,
  Users,
  GraduationCap,
  School,
  Building2,
  Landmark,
  Briefcase,
} from "lucide-react";

type Audience = {
  id: string;
  label: string;
  icon: typeof Users;
  heading: string;
  intro?: string;
  points: { title: string; text: string }[];
};

const audiences: Audience[] = [
  {
    id: "students",
    label: "Students",
    icon: GraduationCap,
    heading: "For Students",
    points: [
      {
        title: "Work on Real Research Projects",
        text: "Explore topics you care about, ask your own questions, and build projects from idea to outcome — just like real scientists and innovators.",
      },
      {
        title: "Present at International Conferences",
        text: "Showcase your work, share your ideas, and interact with students and experts from around the world.",
      },
      {
        title: "Learn from Real Researchers",
        text: "Get mentored by scientists, engineers, and experts who guide you through every step of your research journey.",
      },
      {
        title: "Build Skills That Set You Apart",
        text: "Develop critical thinking, problem-solving, creativity, teamwork, and communication skills that go beyond school learning.",
      },
      {
        title: "Stand Out for College & Future Opportunities",
        text: "Your research experience, presentations, and achievements give you a strong edge in college applications and future careers.",
      },
      {
        title: "Be Part of a Global Community",
        text: "Connect with like-minded students across countries who are passionate about learning, innovation, and making an impact.",
      },
      {
        title: "Grow as a Leader and Innovator",
        text: "Take ownership of your ideas, work in teams, and develop the confidence to lead and create change.",
      },
    ],
  },
  {
    id: "parents",
    label: "Parents",
    icon: Users,
    heading: "For Parents",
    intro:
      "Choosing the right opportunities for your child is critical in today's competitive and rapidly evolving world. GYRA provides a structured and meaningful pathway for students to go beyond traditional learning, helping them build strong academic profiles while developing essential life skills that extend far beyond the classroom.",
    points: [
      {
        title: "Mentorship & Global Exposure",
        text: "Guidance from experienced researchers connects students to global academic standards and practices. Students can also request letters of recommendation from their mentors if required for their applications.",
      },
      {
        title: "Early Exposure to Research & Careers",
        text: "Students explore real-world problems, helping them identify interests and make informed academic choices.",
      },
      {
        title: "Critical Thinking & Problem-Solving",
        text: "Students learn to analyze, question, and approach complex challenges with structured reasoning.",
      },
      {
        title: "Confidence & Communication",
        text: "Regular presentations and expert interactions build strong public speaking and articulation skills.",
      },
      {
        title: "Character & Work Ethic",
        text: "GYRA fosters integrity, perseverance, accountability, and ethical thinking — qualities essential for long-term success.",
      },
      {
        title: "Stronger College Applications",
        text: "Long-term research experience and presentations at international platforms like IRCC help students stand out with depth, initiative, and originality.",
      },
      {
        title: "Safe, Structured & Community-Oriented Environment",
        text: "Programs are conducted with trained mentors, with opportunities for parents to engage and contribute to the GYRA community.",
      },
    ],
  },

  {
    id: "teachers",
    label: "Teachers",
    icon: School,
    heading: "For Teachers",
    points: [
      {
        title: "Structured Program with Clear Guidance",
        text: "GYRA provides a well-defined, modular framework (30–36 months) with step-by-step rubrics, making it easy to guide students through the research process.",
      },
      {
        title: "Comprehensive Training & Onboarding",
        text: "Teachers receive dedicated training on research methodology, GYRA rubrics, and mentoring practices — equipping them to confidently facilitate student research.",
      },
      {
        title: "Reduced Individual Burden through Shared Mentorship",
        text: "Each group is supported by a GYRA advisor (experienced researcher), ensuring teachers are not solely responsible for domain expertise or technical depth.",
      },
      {
        title: "Weekly Support & Continuous Feedback",
        text: "Regular interactions with GYRA advisors help teachers track progress, address challenges, and ensure students stay on the right path.",
      },
      {
        title: "Professional Development & Research Exposure",
        text: "Teachers gain hands-on exposure to research practices, enhancing their own academic and professional growth.",
      },
      {
        title: "Opportunities for Collaborative Research",
        text: "Interested teachers can engage in research initiatives, publications, and collaborations within the GYRA network.",
      },
      {
        title: "Mentorship Recognition & Certification",
        text: "Teachers receive formal recognition and certification for their role as research mentors, strengthening their professional portfolio.",
      },
      {
        title: "Enhancing Classroom Engagement",
        text: "Integrating research-based learning improves student curiosity, participation, and depth of understanding within regular teaching.",
      },
    ],
  },
  {
    id: "schools",
    label: "Schools",
    icon: Building2,
    heading: "For Schools & Institutions",
    points: [
      {
        title: "Enhanced Institutional Reputation",
        text: "Participation in high-quality research programs and international platforms like IRCC elevates the school's academic profile and visibility.",
      },
      {
        title: "Access to Prestigious Competitions & Platforms",
        text: "GYRA prepares and supports students to participate in globally recognized events such as the FIRST Robotics Competition, Regeneron International Science and Engineering Fair, and state/national science fairs.",
      },
      {
        title: "Curriculum Differentiation & Future-Ready Education",
        text: "Integrating GYRA into the curriculum positions the institution as forward-looking, offering research-driven, experiential learning beyond traditional classroom models.",
      },
      {
        title: "Improved Student Outcomes",
        text: "Students develop strong academic profiles, enhancing college placements and the institution's track record of student success.",
      },
      {
        title: "Global Academic Network & Collaborations",
        text: "Schools become part of an international ecosystem of researchers, educators, and institutions, opening avenues for collaboration and exchange.",
      },
      {
        title: "No Institutional Cost for Core Program Implementation",
        text: "GYRA's core model is designed to be implemented without financial burden on the institution, making high-quality research exposure accessible without significant budgetary constraints.",
      },
      {
        title: "Structured Implementation with Institutional Support",
        text: "GYRA provides a well-defined operational model, including training, mentorship, and continuous guidance, ensuring smooth integration without disruption to existing systems.",
      },
      {
        title: "Showcasing Innovation & Leadership in Education",
        text: "Hosting or participating in GYRA initiatives demonstrates the institution's commitment to innovation, research, and holistic student development.",
      },
    ],
  },
  {
    id: "government",
    label: "Government",
    icon: Landmark,
    heading: "For Government Entities",
    points: [
      {
        title: "Building a Future-Ready Knowledge Economy",
        text: "Early exposure to research fosters critical thinking, innovation, and problem-solving skills essential for national and regional competitiveness in science, technology, and policy.",
      },
      {
        title: "Creating a Sustainable Research Pipeline",
        text: "By engaging students from middle and high school, GYRA helps develop a continuous pipeline of skilled individuals prepared for higher education, research careers, and innovation-driven industries.",
      },
      {
        title: "Scalable and Structured Model",
        text: "GYRA's modular framework and standardized processes allow for scalable implementation across schools, districts, and regions with consistent quality.",
      },
      {
        title: "Alignment with Educational Transformation Goals",
        text: "The program supports inquiry-based learning, experiential education, and interdisciplinary approaches aligned with modern education policies and reform initiatives.",
      },
      {
        title: "Measurable Outcomes and Traceability",
        text: "Student progress, research outputs, conference participation, and long-term academic trajectories provide tangible metrics for evaluating impact.",
      },
      {
        title: "Strengthening Global Competitiveness",
        text: "Participation in international platforms and exposure to global academic standards enhances the region's visibility and competitiveness.",
      },
      {
        title: "Promoting Equity in Access to Research Opportunities",
        text: "The model enables wider access to high-quality research exposure, including in under-resourced or emerging educational ecosystems.",
      },
      {
        title: "Addressing Societal Challenges through Early Innovation",
        text: "Encouraging students to work on real-world problems fosters a generation capable of contributing to solutions in areas such as health, environment, and technology.",
      },
    ],
  },
  {
    id: "sponsors",
    label: "Companies",
    icon: Briefcase,
    heading: "For Companies & Sponsors",
    points: [
      {
        title: "Building the Future Talent Pipeline",
        text: "Students are trained early in research methodologies, critical thinking, and innovation-driven problem solving, directly aligning with skills needed in modern R&D and industry roles.",
      },
      {
        title: "Strengthening Industry-Ready Mindsets",
        text: "Exposure to open-ended, real-world problems helps students develop adaptability, creativity, and collaboration skills essential for fast-evolving corporate environments.",
      },
      {
        title: "Early Engagement with Innovation Culture",
        text: "Companies gain indirect access to students who are already familiar with experimentation, iterative thinking, and evidence-based decision-making.",
      },
      {
        title: "Reducing the Industry–Academia Gap",
        text: "GYRA creates early alignment between academic learning and industry expectations, producing graduates who transition more smoothly into corporate R&D and technical roles.",
      },
      {
        title: "Ethical and Responsible Innovation",
        text: "Students are trained to consider ethics, societal impact, and responsible use of technology — qualities increasingly critical for global companies.",
      },
      {
        title: "Strategic Investment in Long-Term R&D Capacity",
        text: "Supporting GYRA is an investment in strengthening the future innovation ecosystem from which companies will recruit engineers, scientists, and leaders.",
      },
      {
        title: "Enhancing Corporate Social Impact (CSR) Outcomes",
        text: "Engagement with GYRA provides measurable, high-impact CSR opportunities centered on education, innovation, and workforce development.",
      },
      {
        title: "Building Early Brand Association with Future Talent",
        text: "Companies supporting GYRA gain long-term visibility and goodwill among emerging high-potential students and academic communities.",
      },
    ],
  },
];

const WhyGyra = () => (
  <>
    <Navbar />
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="container text-center max-w-3xl">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Why GYRA</span>
          <h1 className="text-4xl lg:text-5xl font-heading font-extrabold text-foreground mt-3 mb-5">
            Value for Every Stakeholder
          </h1>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Whether you're a parent, student, teacher, school, government body, or sponsor — GYRA creates lasting impact through research-driven education.
          </p>
        </div>
      </section>

      {/* Audience tabs */}
      <section className="py-16 lg:py-24">
        <div className="container max-w-5xl">
          <Tabs defaultValue="parents" className="w-full">
            <TabsList className="flex flex-wrap h-auto justify-center gap-2 bg-transparent p-0 mb-12">
              {audiences.map((a) => (
                <TabsTrigger
                  key={a.id}
                  value={a.id}
                  className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary"
                >
                  <a.icon size={16} />
                  {a.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {audiences.map((a) => (
              <TabsContent key={a.id} value={a.id} className="animate-fade-in mt-0">
                <h2 className="text-3xl font-heading font-extrabold text-foreground mb-4">{a.heading}</h2>
                {a.intro && (
                  <p className="text-muted-foreground leading-relaxed mb-10 max-w-3xl">{a.intro}</p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {a.points.map((p) => (
                    <div key={p.title} className="bg-card rounded-xl p-7 shadow-card">
                      <div className="flex items-start gap-3 mb-2">
                        <CheckCircle className="text-primary shrink-0 mt-0.5" size={18} />
                        <h3 className="font-heading font-bold text-base text-foreground">{p.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed pl-[30px]">{p.text}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-muted text-center">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-heading font-extrabold text-foreground mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Join GYRA as a student, parent, mentor, school, or partner — and help shape the next generation of researchers.
          </p>
          <Button asChild size="lg" className="bg-gradient-hero hover:opacity-90 transition-opacity text-base px-8 h-12">
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default WhyGyra;
