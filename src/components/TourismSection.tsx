import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";
import mountainImage from "@/assets/destination-switzerland.jpg";
import beachImage from "@/assets/destination-maldives.jpg";
import templeImage from "@/assets/destination-japan.jpg";

const TourismSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-4">
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
            World Locations
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Indonesian tourism
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Extraordinary natural beauty, enjoy the rich culture, 
            and experience the friendliness of the local people
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Large Destination Cards */}
          <div className="space-y-6">
            <Card className="group overflow-hidden shadow-card hover:shadow-travel transition-all duration-300 cursor-pointer">
              <div className="relative">
                <img 
                  src={mountainImage} 
                  alt="Bromo East Java" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">Bromo East Java</h3>
                  <p className="text-white/80 text-sm">Bromo Tengger Tour</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center gap-1 text-white text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.8</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="group overflow-hidden shadow-card hover:shadow-travel transition-all duration-300 cursor-pointer">
              <div className="relative">
                <img 
                  src={beachImage} 
                  alt="Derawan Bay" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">Derawan Bay</h3>
                  <p className="text-white/80 text-sm">Bali Beach Tourism</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center gap-1 text-white text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.9</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Info Card */}
          <div className="flex flex-col justify-center">
            <Card className="bg-muted/30 border-0 p-8">
              <CardContent className="p-0">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    One click for you
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                      </div>
                      <span className="text-foreground">Find your destination</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                      </div>
                      <span className="text-foreground">Book a ticket</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                      </div>
                      <span className="text-foreground">Make payment</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                      </div>
                      <span className="text-foreground">Explore destination</span>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-white gap-2 h-12">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Section - Our Tourist Destination */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
              Our Tourist Destination
            </p>
            <h2 className="text-4xl font-bold text-foreground">
              Our tourist destination
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="group overflow-hidden shadow-card hover:shadow-travel transition-all duration-300 cursor-pointer">
              <div className="relative">
                <img 
                  src={templeImage} 
                  alt="Borobudur Temple" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold">Borobudur Temple</h3>
                  <p className="text-white/80 text-sm">Central Java Package - $263</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                  <div className="flex items-center gap-1 text-white text-xs">
                    <Star className="w-3 h-3 fill-current" />
                    <span>4.9</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="group overflow-hidden shadow-card hover:shadow-travel transition-all duration-300 cursor-pointer">
              <div className="relative">
                <img 
                  src={beachImage} 
                  alt="Raja Ampat" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold">Raja Ampat</h3>
                  <p className="text-white/80 text-sm">West Papua Package - $520</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                  <div className="flex items-center gap-1 text-white text-xs">
                    <Star className="w-3 h-3 fill-current" />
                    <span>4.8</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="group overflow-hidden shadow-card hover:shadow-travel transition-all duration-300 cursor-pointer">
              <div className="relative">
                <img 
                  src={mountainImage} 
                  alt="Lake Toba" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold">Lake Toba</h3>
                  <p className="text-white/80 text-sm">North Sumatra Package - $314</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                  <div className="flex items-center gap-1 text-white text-xs">
                    <Star className="w-3 h-3 fill-current" />
                    <span>4.7</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="gap-2">
              View All Destinations
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourismSection;