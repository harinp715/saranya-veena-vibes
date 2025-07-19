import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PerformanceSection = () => {
  const performances = [
    {
      title: "Evening Raga Recital",
      date: "March 15, 2024",
      venue: "Cultural Heritage Center",
      description: "An enchanting evening featuring traditional ragas performed on the veena, showcasing the depth and beauty of classical compositions."
    },
    {
      title: "Classical Music Festival",
      date: "April 22, 2024", 
      venue: "City Music Hall",
      description: "A celebration of Indian classical music featuring renowned artists. Saranya will present a special veena performance."
    },
    {
      title: "Spiritual Music Concert",
      date: "May 10, 2024",
      venue: "Temple Auditorium", 
      description: "A devotional music concert featuring traditional spiritual compositions played on the veena in a serene temple setting."
    }
  ];

  return (
    <section className="py-20 px-4 bg-deep-blue text-deep-blue-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Upcoming Performances
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-warm-earth mx-auto mb-8"></div>
          <p className="text-xl text-deep-blue-foreground/80 max-w-2xl mx-auto">
            Join us for these extraordinary musical experiences celebrating the timeless art of veena
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {performances.map((performance, index) => (
            <Card key={index} className="bg-background/10 backdrop-blur-sm border-gold/20 hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-gold text-xl">{performance.title}</CardTitle>
                <p className="text-warm-earth font-semibold">{performance.date}</p>
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
            View All Performances
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;