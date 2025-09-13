import { Button } from "@/components/ui/button";
import { Calendar, Users, Search, MapPin, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-travel.jpg";

const Hero = () => {
  const stats = [
    { number: "10M+", label: "Happy Travelers" },
    { number: "09+", label: "Years Experience" },
    { number: "12K", label: "Success Trips" },
    { number: "5.0", label: "Overall Rating" }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(210, 100%, 8%) 0%, hsl(210, 80%, 15%) 30%, rgba(0,0,0,0.3) 100%), url(${heroImage})`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen pt-20 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero Text */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-white/80 text-lg mb-6">
              Exploring Indonesia in an extraordinary adventure
            </p>
            
            <h1 className="hero-title text-white mb-8">
              Extraordinary natural and
              <br />
              cultural charm
            </h1>
            
            <p className="text-white/90 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
              Exploring Indonesia encompasses an extraordinary adventure, 
              where natural beauty intertwines with rich cultural heritage
            </p>

            {/* Search Form */}
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto mb-16">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Button
                    variant="outline"
                    className="h-14 bg-white/10 border-white/20 text-white hover:bg-white/20 justify-start gap-3"
                  >
                    <Calendar className="w-5 h-5" />
                    <div className="text-left">
                      <div className="font-medium">Date</div>
                      <div className="text-sm opacity-70">Select dates</div>
                    </div>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="h-14 bg-white/10 border-white/20 text-white hover:bg-white/20 justify-start gap-3"
                  >
                    <Users className="w-5 h-5" />
                    <div className="text-left">
                      <div className="font-medium">Budget</div>
                      <div className="text-sm opacity-70">Set budget</div>
                    </div>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="h-14 bg-white/10 border-white/20 text-white hover:bg-white/20 justify-start gap-3"
                  >
                    <MapPin className="w-5 h-5" />
                    <div className="text-left">
                      <div className="font-medium">Guest</div>
                      <div className="text-sm opacity-70">Add guests</div>
                    </div>
                  </Button>
                  
                  <Button className="h-14 bg-secondary hover:bg-secondary/90 text-white font-semibold">
                    <Search className="w-5 h-5 mr-2" />
                    Search
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="stats-card">
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
    </section>
  );
};

export default Hero;