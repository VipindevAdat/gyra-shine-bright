import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Eye, Target, Lightbulb, Heart, Globe } from "lucide-react";
import team1 from "@/assets/team/team-1.png.asset.json";
import team2 from "@/assets/team/team-2.jpg.asset.json";
import team3 from "@/assets/team/team-3.png.asset.json";
import team4 from "@/assets/team/team-4.png.asset.json";
import team6 from "@/assets/team/team-6.png.asset.json";
import team7 from "@/assets/team/team-7.png.asset.json";
import team10 from "@/assets/team/team-10.png.asset.json";
import team11 from "@/assets/team/team-11.jpg.asset.json";
import team12 from "@/assets/team/team-12.png.asset.json";
import team13 from "@/assets/team/team-13.png.asset.json";
import team14 from "@/assets/team/team-14.png.asset.json";
import team15 from "@/assets/team/team-15.png.asset.json";
import team16 from "@/assets/team/team-16.png.asset.json";
import team17 from "@/assets/team/team-17.png.asset.json";
import team18 from "@/assets/team/team-18.png.asset.json";
import team19 from "@/assets/team/team-19.png.asset.json";
import team20 from "@/assets/team/team-20.jpg.asset.json";
import team21 from "@/assets/team/team-21.png.asset.json";
import team22 from "@/assets/team/team-22.png.asset.json";
import globalMap from "@/assets/team/global-map.png.asset.json";

const values = [
  {
    icon: Eye,
    title: "Vision",
    description:
      "A global arena for the curious, inquisitive and self-driven young minds to inculcate a lifelong passion for transformative research.",
  },
  {
    icon: Target,
    title: "Mission",
    description:
      "To mentor the young generation to be innovative, creative and critical — instilling multidisciplinary research driven by standard scientific research methodology.",
  },
  {
    icon: Lightbulb,
    title: "Objective",
    description:
      '"Think Like a Scientist" encourages individuals to adopt a mindset of curiosity, critical thinking, and a systematic approach to problem-solving.',
  },
];

const initials = (name: string) =>
  name
    .replace(/^(Dr\.|Mr\.|Ms\.|Mrs\.|Fr\.)\s+/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

const globalOfficials = [
  { name: "Dr. Irimpan Mathews", role: "President", img: team1.url },
  { name: "Dr. Vipindev Adat Vasudevan", role: "Secretary", img: team2.url },
  { name: "Ms. Divya V V", role: "Treasurer", img: team3.url },
  { name: "Ms. Devi Gireesh", role: "Head of IT", img: team4.url },
  { name: "Dr. Finosh Thankam", role: "Executive Member", img: team6.url },
  { name: "Mr. Raibin Raphy", role: "Executive Member", img: team7.url },
  { name: "Mr. Nixon Xavier", role: "Executive Member", img: team10.url },
  { name: "Mr. Viju Kolattukudy", role: "Executive Member", img: team11.url },
  { name: "Dr. Ramachandran Thekkedath", role: "Executive Member", img: "" },
  { name: "Dr. Usha R. Thekkedath", role: "Executive Member", img: "" },
];

const indiaOfficials = [
  { name: "Dr. Renju Joseph", role: "President", img: team12.url },
  { name: "Dr. Priyankar Bhooshan", role: "Secretary", img: team13.url },
  { name: "Ms. Maria", role: "Joint Secretary", img: team14.url },
  { name: "Fr. Vincent Pereppadan", role: "Director of Operations", img: team15.url },
  { name: "Ms. Sowmini K V", role: "Treasurer", img: team16.url },
  { name: "Ms. Renjitha C S", role: "Joint Treasurer", img: team17.url },
  { name: "Fr. Jijo Kandamkulathy", role: "Executive Member", img: team18.url },
  { name: "Dr. Nisha V M", role: "Executive Member", img: team19.url },
  { name: "Ms. Devabala Smitha", role: "Executive Member", img: team20.url },
  { name: "Dr. Manjula Devananda", role: "Executive Member", img: team21.url },
  { name: "Mr. Abish Jose", role: "Executive Member", img: team22.url },
];



const About = () => (
  <>
    <Navbar />
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="container text-center max-w-3xl">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">About GYRA</span>
          <h1 className="text-4xl lg:text-5xl font-heading font-extrabold text-foreground mt-3 mb-5">
            Global Empowerment Through Young Research
          </h1>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Global Young Researchers' Academy (GYRA) is an international non-profit organization registered in Oregon, USA, with a registered office in India — dedicated to cultivating research aptitude in school students and shaping the next generation of committed researchers.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-4xl">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              GYRA envisions addressing the increasing global demand for dedicated researchers by initiating and igniting school students to engage in research, following advanced-level standard scientific research methodology. GYRA provides opportunities to collaborate, facilitate, and offers a new and innovative model of research-oriented education and training.
            </p>
            <p>
              In this mission, GYRA brings together individuals from diverse backgrounds and expertise across the world — including scientists, engineers, doctors, educators, artists, and writers — all united by a shared passion for fostering scientific temper in young minds.
            </p>
            <p>
              We provide group-based training for middle school students and individualized training for high school students, matching them with an expert researcher in their field of interest. High school students also have the opportunity to volunteer for GYRA, actively contribute to the organization, and enhance their leadership skills. We actively encourage collaboration with students from other countries, ensuring cultural exchange and a global perspective for research.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              { value: "5+", label: "Countries" },
              { value: "2,000+", label: "Students reached" },
              { value: "200+", label: "Partner schools" },
              { value: "100+", label: "Volunteer scientists" },
            ].map((s) => (
              <div key={s.label} className="bg-card rounded-xl p-6 text-center shadow-card">
                <div className="text-3xl font-heading font-extrabold text-gradient mb-1">{s.value}</div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center mt-6">
            In the US, GYRA has an active presence in more than 5 states, serving about 100 middle and high school students.
          </p>
        </div>
      </section>

      {/* Vision / Mission / Objective */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-card rounded-xl p-8 shadow-card text-center">
                <div className="w-14 h-14 rounded-full bg-teal-light flex items-center justify-center mx-auto mb-5">
                  <v.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* President's Message */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-4xl">
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-elevated">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <img
                src={team1.url}
                alt="Dr. Irimpan Mathews"
                className="w-32 h-32 rounded-xl object-cover shrink-0"
                loading="lazy"
              />
              <div>
                <h2 className="text-2xl font-heading font-extrabold text-foreground mb-1">President's Message</h2>
                <p className="text-sm text-primary font-medium mb-4">Dr. Irimpan Mathews, Global President</p>
                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    GYRA is the name of an endangered African cat. It looks tiny but moves swiftly and its eyes glitter with curiosity. Global Young Researchers' Academy loves to inherit those characteristics, especially its curiosity.
                  </p>
                  <p>
                    In GYRA we believe that if the researchers are awakened, we will have more questions, more ways of analyses, and consequently, more solutions to problems around us. Therefore, GYRA looks for curious kids who want to follow their questions like passionate scientists.
                  </p>
                  <p>
                    GYRA looks forward to a world after 25 years: a world with many socially committed scientists and researchers in various fields. Let's all make GYRA a great dream in wakefulness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Mission */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-14 h-14 rounded-full bg-teal-light flex items-center justify-center mx-auto mb-5">
              <Heart className="text-primary" size={24} />
            </div>
            <h2 className="text-3xl font-heading font-extrabold text-foreground mb-4">Special Mission: Inclusivity</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              GYRA supports students with disabilities, fostering their scientific curiosity and research skills. We create an inclusive mentoring platform for children with disabilities, paving the way for them to participate in mainstream research.
            </p>
            <p className="text-sm text-foreground/60 mt-4 max-w-2xl mx-auto">
              GYRA advocates for training in research methodology as a tool for empowering persons with disabilities. This approach of research as an early intervention tool has been part of research and pilot studies under the supervision of Prof. Pavan Antony, Adelphi University, NY.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Leadership</span>
            <h2 className="text-3xl font-heading font-extrabold text-foreground mt-3 mb-4">Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Meet the officials leading GYRA globally and across the India region.
            </p>
          </div>

          {[
            { heading: "Global Officials", people: globalOfficials },
            { heading: "India Officials", people: indiaOfficials },
          ].map((group) => (
            <div key={group.heading} className="mb-16 last:mb-0">
              <h3 className="font-heading font-bold text-xl text-foreground text-center mb-8">{group.heading}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {group.people.map((m) => (
                  <div key={m.name} className="text-center">
                    {m.img ? (
                      <img
                        src={m.img}
                        alt={`${m.name}, ${m.role} at GYRA`}
                        className="w-24 h-24 rounded-full object-cover mx-auto mb-3 shadow-card bg-card"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full mx-auto mb-3 shadow-card bg-teal-light flex items-center justify-center font-heading font-extrabold text-xl text-primary">
                        {initials(m.name)}
                      </div>
                    )}
                    <h4 className="font-heading font-bold text-sm text-foreground">{m.name}</h4>
                    <p className="text-xs text-muted-foreground">{m.role}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Global Map */}
      <section className="py-20 lg:py-28">
        <div className="container text-center max-w-4xl">
          <div className="w-14 h-14 rounded-full bg-teal-light flex items-center justify-center mx-auto mb-5">
            <Globe className="text-primary" size={24} />
          </div>
          <h2 className="text-3xl font-heading font-extrabold text-foreground mb-4">Global Presence</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            GYRA currently operates in over 5 countries, partners with 200+ schools, and has an active presence in more than 5 US states — connecting young researchers with mentors and peers around the world.
          </p>
          <img
            src="https://thinkgyra.org/front/images/map.png"
            alt="GYRA's global expansion map"
            className="w-full rounded-xl shadow-card"
            loading="lazy"
          />
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default About;
