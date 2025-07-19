import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PerformanceSection from "@/components/PerformanceSection";
import VenuesSection from "@/components/VenuesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <PerformanceSection />
      <VenuesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
