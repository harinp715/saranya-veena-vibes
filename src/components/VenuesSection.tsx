import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Music, Trophy, Star } from "lucide-react";

const VenuesSection = () => {
  const venueCategories = [
    {
      icon: Trophy,
      title: "Prestigious Venues",
      venues: [
        "Sri Shanmukhananda Sabha, Mumbai",
        "Narada Gana Sabha, Chennai", 
        "Neelakanta Sivan Sangeetha Sabha, Trivandrum",
        "Edapally Sangeetha Sabha, Cochin"
      ]
    },
    {
      icon: Music,
      title: "Festival Performances",
      venues: [
        "Chembai Sangeetholsavam, Guruvayur",
        "Sri Krishna Gana Sabha, Mavelikara",
        "Chembai Sangeetha Bhavan, Kannur",
        "National Youth Festival, Amritsar"
      ]
    },
    {
      icon: Star,
      title: "Cultural Institutions",
      venues: [
        "Sri Muttuswami Deekshithar Trust, Shimogga",
        "Sri Muttuswami Deekshithar Trust, Ettayapuram",
        "All India Radio Competitions",
        "State & University Festivals"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Performance Venues
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-warm-earth mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Saranya has graced stages across India, from renowned sabhas to prestigious cultural festivals
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {venueCategories.map((category, index) => (
            <Card key={index} className="border-none shadow-elegant bg-card/80 backdrop-blur-sm hover:shadow-deep transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-gold to-warm-earth rounded-full flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-gold-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {category.venues.map((venue, venueIndex) => (
                    <li key={venueIndex} className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{venue}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenuesSection;