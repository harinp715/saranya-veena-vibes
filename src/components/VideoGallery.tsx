const VideoGallery = () => {
  const videos = [
    {
      title: "Carnatic Classical",
      embedId: "1U81vYNV4bg",
      description: "Traditional Carnatic music performance on the veena - featuring the kriti \"Pahi Parvatha Nandini\""
    },
    {
      title: "Light Music",
      embedId: "CogrHegon1M",
      description: "Light classical musical performance"
    },
    {
      title: "Old Classical Hindi Movie",
      embedId: "0HIKSCUegsk",
      description: "Classic Hindi film music on veena"
    },
    {
      title: "Old Classical Tamil Movie",
      embedId: "05BPbJTko3g",
      description: "Classic Tamil film music performance"
    },
    {
      title: "90s Tamil",
      embedId: "qiz14uWsV3E",
      description: "Popular 90s Tamil music on veena"
    },
    {
      title: "Contemporary Hindi",
      embedId: "7ZWOtawZe6k",
      description: "Modern Hindi music performance"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Performance Videos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-warm-earth mx-auto mb-8"></div>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Experience Saranya's versatility across different musical genres and styles
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gold">{video.title}</h3>
                <p className="text-card-foreground/80">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;