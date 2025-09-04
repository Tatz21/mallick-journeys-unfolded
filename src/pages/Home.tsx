import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Users, Award, Plane } from "lucide-react";
import maldivesImage from "@/assets/destination-maldives.jpg";
import switzerlandImage from "@/assets/destination-switzerland.jpg";
import japanImage from "@/assets/destination-japan.jpg";

const Home = () => {
  const featuredDestinations = [
    {
      image: maldivesImage,
      title: "Maldives",
      location: "Indian Ocean",
      rating: 4.9,
      price: "₹89,999"
    },
    {
      image: switzerlandImage,
      title: "Switzerland", 
      location: "Central Europe",
      rating: 4.8,
      price: "₹1,24,999"
    },
    {
      image: japanImage,
      title: "Japan",
      location: "East Asia", 
      rating: 4.7,
      price: "₹95,999"
    }
  ];

  const quickStats = [
    { icon: Users, number: "50,000+", label: "Happy Travelers" },
    { icon: Plane, number: "100+", label: "Destinations" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Star, number: "98%", label: "Customer Satisfaction" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Quick Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Destinations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular travel destinations that promise unforgettable experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDestinations.map((destination, index) => (
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
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">{destination.title}</h3>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-primary">{destination.price}</span>
                      <span className="text-sm text-muted-foreground ml-1">per person</span>
                    </div>
                    <Button className="gradient-ocean text-white border-0 hover:opacity-90">
                      Explore
                    </Button>
                  </div>
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

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Mallick Travels?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-soft hover:shadow-travel transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Expert Planning</h3>
                <p className="text-muted-foreground">
                  15+ years of experience crafting perfect travel experiences tailored to your preferences.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-soft hover:shadow-travel transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Round-the-clock assistance throughout your journey for complete peace of mind.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-soft hover:shadow-travel transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Best Value</h3>
                <p className="text-muted-foreground">
                  Competitive pricing with exclusive deals and no hidden charges for maximum value.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;