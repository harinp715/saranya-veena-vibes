import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Music } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "saranya.bmangal@music.com",
      description: "For booking inquiries and collaborations"
    },
    {
      icon: Phone, 
      title: "Phone",
      details: "+91 98765 43210",
      description: "Available during business hours"
    },
    {
      icon: MapPin,
      title: "Location", 
      details: "Bengaluru, Karnataka",
      description: "Available for performances across India"
    },
    {
      icon: Music,
      title: "Performances",
      details: "Concerts & Events",
      description: "Classical music presentations and cultural events"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-warm-earth mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with Saranya for concert bookings, collaborations, or to learn more about veena performances
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <Card key={index} className="text-center border-none shadow-elegant bg-card/80 backdrop-blur-sm hover:shadow-deep transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-gold to-warm-earth rounded-full flex items-center justify-center mb-4">
                  <contact.icon className="w-6 h-6 text-gold-foreground" />
                </div>
                <CardTitle className="text-foreground">{contact.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-gold mb-2">{contact.details}</p>
                <p className="text-muted-foreground text-sm">{contact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center bg-gradient-to-r from-deep-blue/10 to-gold/10 p-8 rounded-lg border border-gold/20">
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Ready to Experience Classical Music?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're organizing a cultural event, planning a concert, or simply wish to experience the beauty of veena music, 
            Saranya is ready to bring the timeless art of classical music to your audience.
          </p>
          <Button variant="elegant" size="lg" className="text-lg px-8 py-4">
            Book a Performance
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;