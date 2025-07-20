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
                <h3 className="text-2xl font-semibold mb-4 text-gold">Musical Heritage</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Saranya B. Mangal is a promising young Veena and Vocal artist from Trivandrum. Born to B Balasubramoni and Chitra M, 
                  she had her initial training from her grandmother Late Smt N Lalitha (prime disciple of Padmabhushan Sangita Kalanidhi Sri 
                  KS Narayanaswamy) and vocal training from Sri Nedumkunnam Sreedev, and got mentored under Late Padmashri Parassala B Ponnammal.
                </p>
              </CardContent>
            </Card>
            
            
            <Card className="border-none shadow-elegant bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-deep-blue">Outstanding Achievements</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Winner of All India Radio Competition in the Instrumental Category (Veena) for the year 2009 at age 16 and for 
                  Carnatic Vocal for the year 2012. She is now an "A-Grade" artist in Veena and "B-High" Grade artist in Carnatic Vocal. 
                  She is the youngest musician to secure "A" grade for Veena from All India Radio Trivandrum. She has also completed 
                  her B.Tech in Applied Electronics and Instrumentation and M.Tech in VLSI & Embedded Systems with University rank.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gold/20 to-warm-earth/20 p-8 rounded-lg border border-gold/20">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Awards & Recognition</h3>
              <ul className="space-y-4">
                {[
                  "All India Radio National Competition Winner (Veena 2009, Vocal 2012)",
                  "National Youth Festival Winner (2011) - Amritsar", 
                  "Senior Scholarship Recipient - Ministry of Culture",
                  "Yuva Sangeetha Prathibha Puraskar 2013 - Swaranjali",
                  "Sree Neelakanta Sivan Sangeetha Sabha Trust Yuva Puraskar 2014",
                  "M.S.Subbalakshmi fellowship for Music, awarded by Shanmukhananda Sabha in the year 2021"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-gold to-warm-earth rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">{item}</span>
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