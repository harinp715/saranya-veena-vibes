import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PerformanceSection = () => {
  const performances = [
    {
      title: "Sri Shanmukhananda Sabha",
      location: "Mumbai",
      venue: "Main Auditorium",
      description: "A prestigious performance at one of India's most renowned cultural institutions, showcasing traditional Carnatic compositions on the veena."
    },
    {
      title: "Narada Gana Sabha", 
      location: "Chennai",
      venue: "Music Season Concert",
      description: "Performance during the famous Chennai Music Season, presenting classical ragas to a distinguished audience of music connoisseurs."
    },
    {
      title: "Chembai Sangeetholsavam",
      location: "Guruvayur", 
      venue: "Festival Venue",
      description: "A celebrated performance at this prestigious music festival, honoring the legacy of Chembai Vaidyanatha Bhagavatar."
    }
  ];

  return (
    <section className="py-20 px-4 bg-deep-blue text-deep-blue-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Notable Performances
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-warm-earth mx-auto mb-8"></div>
          <p className="text-xl text-deep-blue-foreground/80 max-w-2xl mx-auto">
            Saranya has performed at prestigious venues across India, captivating audiences with her exceptional artistry
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {performances.map((performance, index) => (
            <Card key={index} className="bg-background/10 backdrop-blur-sm border-gold/20 hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-gold text-xl">{performance.title}</CardTitle>
                <p className="text-warm-earth font-semibold">{performance.location}</p>
                <p className="text-deep-blue-foreground/70">{performance.venue}</p>
              </CardHeader>
              <CardContent>
                <p className="text-deep-blue-foreground/80 leading-relaxed">
                  {performance.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            View Performance Videos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;