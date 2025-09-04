import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Shield, Clock, Heart, Award } from "lucide-react";

const ServicesPage = () => {
  const servicePackages = [
    {
      title: "Basic Package",
      price: "₹15,000",
      description: "Perfect for budget-conscious travelers",
      features: [
        "Flight booking assistance",
        "Hotel recommendations", 
        "Basic itinerary planning",
        "Email support",
        "Travel insurance guidance"
      ],
      popular: false
    },
    {
      title: "Premium Package", 
      price: "₹35,000",
      description: "Most popular choice for complete peace of mind",
      features: [
        "Priority flight booking",
        "Handpicked hotel reservations",
        "Detailed itinerary planning",
        "24/7 phone support",
        "Comprehensive travel insurance",
        "Airport transfers",
        "Local guide arrangements"
      ],
      popular: true
    },
    {
      title: "Luxury Package",
      price: "₹75,000", 
      description: "Ultimate luxury travel experience",
      features: [
        "Business/First class flights",
        "5-star hotel bookings",
        "Personal travel concierge",
        "VIP airport services",
        "Premium travel insurance",
        "Private transfers",
        "Personal tour guides",
        "Exclusive experiences"
      ],
      popular: false
    }
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: "Travel Insurance",
      description: "Comprehensive coverage for medical emergencies, trip cancellations, and lost baggage.",
      price: "Starting from ₹500"
    },
    {
      icon: Clock,
      title: "Visa Assistance",
      description: "Expert guidance and documentation support for visa applications worldwide.",
      price: "Starting from ₹2,000"
    },
    {
      icon: Heart,
      title: "Honeymoon Specials",
      description: "Romantic getaways with special amenities and personalized experiences for couples.",
      price: "Custom pricing"
    },
    {
      icon: Award,
      title: "Corporate Travel",
      description: "Streamlined business travel solutions with expense management and priority booking.",
      price: "Volume discounts"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From planning to execution, we offer comprehensive travel services tailored to your needs and budget. 
            Let us handle the details while you focus on creating memories.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <Services />

      {/* Service Packages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Service Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package that fits your travel style and budget requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <Card key={index} className={`relative shadow-soft hover:shadow-travel transition-all duration-300 ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  <div className="text-4xl font-bold text-primary">{pkg.price}</div>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className={`w-full ${pkg.popular ? 'gradient-ocean text-white border-0' : ''}`} size="lg">
                    Choose Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enhance your travel experience with our specialized add-on services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="shadow-soft hover:shadow-travel transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-primary font-semibold">{service.price}</span>
                          <Button variant="outline">Learn More</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our travel experts today to discuss your requirements and get a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Call Us Now
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;