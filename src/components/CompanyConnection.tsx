import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, ArrowRight } from "lucide-react";

const CompanyConnection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Part of Phoenix Group
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mallick Travels is proudly part of the Phoenix Group, bringing you trusted service across multiple industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="shadow-soft hover:shadow-travel transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Mallick Travels</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your trusted partner for unforgettable travel experiences. Expert planning, 
                personalized service, and 15+ years of excellence in the travel industry.
              </p>
              <div className="text-primary font-semibold mb-4">Travel & Tourism</div>
              <Button variant="outline" className="group-hover:bg-primary group-hover:text-white transition-colors">
                Explore Travel Services
              </Button>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft hover:shadow-travel transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Phoenix Real Estate</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Discover your perfect dream home with our comprehensive real estate services. 
                From cozy retreats to spacious family homes in Kolkata and beyond.
              </p>
              <div className="text-secondary font-semibold mb-4">Real Estate</div>
              <Button 
                variant="outline" 
                className="group-hover:bg-secondary group-hover:text-white transition-colors"
                onClick={() => window.open('https://phoenixrealesthatic.com/', '_blank')}
              >
                Visit Real Estate Site
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Same trusted management, multiple specialized services for all your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-ocean text-white border-0 hover:opacity-90">
              Contact Phoenix Group
            </Button>
            <Button size="lg" variant="outline">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyConnection;