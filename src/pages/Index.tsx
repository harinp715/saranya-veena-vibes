import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PhotoGallery from "@/components/PhotoGallery";
import PerformanceSection from "@/components/PerformanceSection";
import VideoGallery from "@/components/VideoGallery";
import VenuesSection from "@/components/VenuesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <PhotoGallery />
      <PerformanceSection />
      <VideoGallery />
      <VenuesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
