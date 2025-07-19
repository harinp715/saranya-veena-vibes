import { Button } from "@/components/ui/button";
import heroImage from "@/assets/veena-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/80 via-deep-blue/60 to-gold/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-background">
          <span className="block text-gold">Saranya B Mangal</span>
          <span className="block text-2xl md:text-4xl font-light mt-4 text-background/90">
            "A-Grade" All India Radio Artist • Veena & Vocal Virtuoso
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-background/80 max-w-2xl mx-auto leading-relaxed">
          All India Radio National Competition Winner • Youngest "A-Grade" Veena Artist from Trivandrum
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Listen to Performances
          </Button>
          <Button variant="elegant" size="lg" className="text-lg px-8 py-6">
            Book a Concert
          </Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-background/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;