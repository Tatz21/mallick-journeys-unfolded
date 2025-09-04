import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin } from "lucide-react";
import maldivesImage from "@/assets/destination-maldives.jpg";
import switzerlandImage from "@/assets/destination-switzerland.jpg";
import japanImage from "@/assets/destination-japan.jpg";

const Destinations = () => {
  const destinations = [
    {
      image: maldivesImage,
      title: "Maldives",
      location: "Indian Ocean",
      rating: 4.9,
      price: "₹89,999",
      duration: "5 Days 4 Nights",
      description: "Crystal clear waters, overwater bungalows, and pristine beaches await you in this tropical paradise."
    },
    {
      image: switzerlandImage,
      title: "Switzerland",
      location: "Central Europe",
      rating: 4.8,
      price: "₹1,24,999",
      duration: "7 Days 6 Nights",
      description: "Experience the majestic Alps, charming villages, and world-class hospitality in the heart of Europe."
    },
    {
      image: japanImage,
      title: "Japan",
      location: "East Asia",
      rating: 4.7,
      price: "₹95,999",
      duration: "6 Days 5 Nights",
      description: "Discover ancient traditions, modern wonders, and breathtaking cherry blossoms in the Land of the Rising Sun."
    }
  ];

  return (
    <section id="destinations" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked destinations that promise unforgettable experiences and lifetime memories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card key={index} className="overflow-hidden shadow-soft hover:shadow-travel transition-all duration-300 hover:scale-105 group">
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold">{destination.rating}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{destination.location}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2">{destination.title}</h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {destination.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-primary">{destination.price}</span>
                    <span className="text-sm text-muted-foreground ml-1">per person</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{destination.duration}</span>
                </div>
                
                <Button className="w-full gradient-ocean text-white border-0 hover:opacity-90">
                  Explore Package
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;