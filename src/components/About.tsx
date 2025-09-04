import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "50,000+", label: "Happy Travelers" },
    { icon: Globe, number: "100+", label: "Destinations" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Heart, number: "98%", label: "Customer Satisfaction" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Mallick Travels
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For over 15 years, Mallick Travels has been crafting extraordinary travel experiences 
              that go beyond the ordinary. We believe that travel is not just about reaching a 
              destination, but about the journey, the discoveries, and the memories created along the way.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of experienced travel experts is passionate about helping you explore the world 
              with confidence and comfort. From intimate getaways to grand adventures, we ensure every 
              detail is perfectly planned for your peace of mind.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="relative">
            <Card className="shadow-travel">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "To inspire and enable people to explore the world, creating meaningful connections 
                  between travelers and destinations while promoting sustainable and responsible tourism."
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Personalized travel planning tailored to your preferences</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">24/7 support throughout your journey</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Commitment to sustainable and ethical travel practices</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;