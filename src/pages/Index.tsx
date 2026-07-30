import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import GyraProvidesSection from "@/components/GyraProvidesSection";
import ProgramsOverview from "@/components/ProgramsOverview";
import StatsBar from "@/components/StatsBar";
import IRCCSection from "@/components/IRCCSection";
import SpecialMissionSection from "@/components/SpecialMissionSection";
import CTASection from "@/components/CTASection";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <BenefitsSection />
      <GyraProvidesSection />
      <ProgramsOverview />
      <StatsBar />
      <IRCCSection />
      <SpecialMissionSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;
