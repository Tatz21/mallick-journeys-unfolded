import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Destinations from "@/components/Destinations";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Search, Filter, Calendar, Users } from "lucide-react";
import maldivesImage from "@/assets/destination-maldives.jpg";
import switzerlandImage from "@/assets/destination-switzerland.jpg";
import japanImage from "@/assets/destination-japan.jpg";

const DestinationsPage = () => {
  const allDestinations = [
    {
      image: maldivesImage,
      title: "Maldives",
      location: "Indian Ocean",
      rating: 4.9,
      price: "₹89,999",
      duration: "5 Days 4 Nights",
      category: "Beach",
      description: "Crystal clear waters, overwater bungalows, and pristine beaches.",
      highlights: ["Snorkeling", "Water Sports", "Spa Treatments", "Sunset Dining"]
    },
    {
      image: switzerlandImage,
      title: "Switzerland",
      location: "Central Europe",
      rating: 4.8,
      price: "₹1,24,999",
      duration: "7 Days 6 Nights",
      category: "Mountains",
      description: "Majestic Alps, charming villages, and world-class hospitality.",
      highlights: ["Alpine Views", "Cable Car Rides", "Chocolate Tours", "Lake Cruises"]
    },
    {
      image: japanImage,
      title: "Japan",
      location: "East Asia",
      rating: 4.7,
      price: "₹95,999",
      duration: "6 Days 5 Nights",
      category: "Culture",
      description: "Ancient traditions, modern wonders, and breathtaking cherry blossoms.",
      highlights: ["Temple Visits", "Traditional Cuisine", "Cherry Blossoms", "Modern Cities"]
    },
    {
      image: maldivesImage,
      title: "Bali, Indonesia",
      location: "Southeast Asia",
      rating: 4.6,
      price: "₹65,999",
      duration: "5 Days 4 Nights",
      category: "Beach",
      description: "Tropical paradise with rich culture and stunning landscapes.",
      highlights: ["Rice Terraces", "Beach Clubs", "Temple Tours", "Volcano Hiking"]
    },
    {
      image: switzerlandImage,
      title: "Norway Fjords",
      location: "Northern Europe",
      rating: 4.8,
      price: "₹1,45,999",
      duration: "8 Days 7 Nights",
      category: "Mountains",
      description: "Dramatic fjords, Northern Lights, and pristine wilderness.",
      highlights: ["Fjord Cruises", "Northern Lights", "Hiking", "Wildlife Safari"]
    },
    {
      image: japanImage,
      title: "Thailand",
      location: "Southeast Asia",
      rating: 4.5,
      price: "₹55,999",
      duration: "6 Days 5 Nights",
      category: "Culture",
      description: "Vibrant culture, delicious cuisine, and friendly locals.",
      highlights: ["Street Food", "Temples", "Markets", "Elephant Sanctuary"]
    }
  ];

  const categories = ["All", "Beach", "Mountains", "Culture", "Adventure", "City"];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Explore Destinations
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover amazing places around the world. From tropical beaches to mountain peaks, 
            find your perfect getaway destination.
          </p>
          
          {/* Search and Filter Bar */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-travel max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search destinations..." className="pl-10" />
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3-5">3-5 Days</SelectItem>
                    <SelectItem value="6-8">6-8 Days</SelectItem>
                    <SelectItem value="9+">9+ Days</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="gradient-ocean text-white border-0 hover:opacity-90">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Popular Destinations */}
      <Destinations />

      {/* All Destinations Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              All Destinations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse our complete collection of carefully curated travel destinations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allDestinations.map((destination, index) => (
              <Card key={index} className="overflow-hidden shadow-soft hover:shadow-travel transition-all duration-300 hover:scale-105 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-foreground">{destination.category}</Badge>
                  </div>
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

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.highlights.slice(0, 3).map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-primary">{destination.price}</span>
                      <span className="text-sm text-muted-foreground ml-1">per person</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">{destination.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1 gradient-ocean text-white border-0 hover:opacity-90">
                      View Details
                    </Button>
                    <Button variant="outline" size="icon">
                      <Star className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              Load More Destinations
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Can't Find Your Dream Destination?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our travel experts create a custom itinerary for any destination you have in mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Request Custom Package
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Speak to Expert
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DestinationsPage;