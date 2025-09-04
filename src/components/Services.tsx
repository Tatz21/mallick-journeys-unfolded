import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Hotel, Car, MapPin, Shield, Headphones } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Flight Booking",
      description: "Find the best deals on domestic and international flights with our exclusive partnerships.",
      color: "text-primary"
    },
    {
      icon: Hotel,
      title: "Hotel Reservations",
      description: "Comfortable stays at handpicked hotels, resorts, and boutique accommodations worldwide.",
      color: "text-secondary"
    },
    {
      icon: Car,
      title: "Car Rentals",
      description: "Convenient and reliable car rental services for your local transportation needs.",
      color: "text-accent"
    },
    {
      icon: MapPin,
      title: "Tour Packages",
      description: "Carefully curated tour packages for couples, families, and group adventures.",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Travel Insurance",
      description: "Comprehensive travel insurance to protect your journey and give you peace of mind.",
      color: "text-secondary"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support to assist you throughout your travel experience.",
      color: "text-accent"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From planning to execution, we handle every aspect of your journey with expertise and care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="shadow-soft hover:shadow-travel transition-all duration-300 hover:scale-105 bg-card">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 ${service.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;