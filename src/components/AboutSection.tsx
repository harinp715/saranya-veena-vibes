import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About the Artist
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-warm-earth mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="border-none shadow-elegant bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gold">Musical Journey</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Saranya B Mangal is a distinguished classical musician specializing in the ancient and revered art of veena playing. 
                  With years of dedicated practice and deep understanding of Indian classical music traditions, she brings 
                  soulful melodies to life through the strings of this magnificent instrument.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-elegant bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-deep-blue">Artistic Excellence</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Her performances are characterized by technical mastery, emotional depth, and a profound connection 
                  to the spiritual essence of classical music. Each performance is a journey through the rich heritage 
                  of Indian classical traditions, delivered with contemporary sensitivity and artistic brilliance.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gold/20 to-warm-earth/20 p-8 rounded-lg border border-gold/20">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Specializations</h3>
              <ul className="space-y-4">
                {[
                  "Classical Veena Performances",
                  "Traditional Ragas & Compositions", 
                  "Concert Presentations",
                  "Cultural Music Events",
                  "Educational Workshops"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-gold to-warm-earth rounded-full"></div>
                    <span className="text-foreground text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;