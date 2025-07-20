import { Card, CardContent } from "@/components/ui/card";
import veenaPerformance from "@/assets/veena-performance.jpg";
import concertHall from "@/assets/concert-hall.jpg";

const PhotoGallery = () => {
  const photos = [
    {
      src: "/lovable-uploads/607f7f10-3e37-4bae-8256-f808f6533582.png",
      alt: "Saranya B. Mangal performing on the veena",
      title: "Classical Performance",
      description: "Saranya performing traditional Carnatic music on the veena"
    },
    {
      src: "/lovable-uploads/6c4a8d82-8962-4940-8a87-6ebc3dbd4280.png",
      alt: "Saranya B. Mangal with veena in traditional attire",
      title: "Classical Performance",
      description: "Saranya showcasing her artistry with the veena in traditional setting"
    },
    {
      src: "/lovable-uploads/c2bb7ab1-fe9f-4d9a-aae1-0c6f39de1a19.png",
      alt: "Saranya B. Mangal in concert setting with traditional instruments",
      title: "Concert Ensemble",
      description: "Saranya in elegant traditional attire surrounded by classical instruments"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Photo Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-warm-earth mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Glimpses of Saranya's musical journey and performances
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <Card key={index} className="border-none shadow-elegant bg-card/80 backdrop-blur-sm hover:shadow-deep transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold mb-2">{photo.title}</h3>
                  <p className="text-sm text-background/90">{photo.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Experience the artistry and tradition of classical Indian music through Saranya's performances
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;