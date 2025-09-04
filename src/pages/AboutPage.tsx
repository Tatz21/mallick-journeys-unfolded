import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import CompanyConnection from "@/components/CompanyConnection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Globe, Heart, Plane, Shield, Clock, Star } from "lucide-react";

const AboutPage = () => {
  const team = [
    {
      name: "Rajesh Mallick",
      role: "Founder & CEO",
      experience: "20+ years",
      description: "Passionate traveler with expertise in luxury and adventure tourism."
    },
    {
      name: "Priya Sharma",
      role: "Travel Operations Head",
      experience: "15+ years",
      description: "Expert in destination planning and customer experience management."
    },
    {
      name: "Amit Kumar",
      role: "Customer Relations Manager",
      experience: "12+ years",
      description: "Dedicated to ensuring exceptional customer service and satisfaction."
    }
  ];

  const milestones = [
    { year: "2009", event: "Mallick Travels founded with a vision to make travel accessible" },
    { year: "2012", event: "Expanded to international destinations and luxury packages" },
    { year: "2015", event: "Launched 24/7 customer support and online booking platform" },
    { year: "2018", event: "Reached milestone of 25,000 happy customers" },
    { year: "2020", event: "Adapted to new travel norms with safety-first approach" },
    { year: "2024", event: "Celebrating 50,000+ travelers and 15 years of excellence" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction and happiness are our top priorities in everything we do."
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "We prioritize your safety with comprehensive insurance and trusted partners."
    },
    {
      icon: Globe,
      title: "Sustainable Tourism",
      description: "We promote responsible travel that benefits local communities and environment."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for perfection in every aspect of your travel experience."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            About Mallick Travels
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over 15 years, we've been crafting extraordinary travel experiences that go beyond the ordinary. 
            Our passion for travel and commitment to excellence drives everything we do.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <About />

      {/* Company Connection */}
      <CompanyConnection />

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to becoming a trusted name in travel, here's our story.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6 p-6 rounded-lg hover:bg-muted/30 transition-colors">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">{milestone.year}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-foreground leading-relaxed">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide us in creating exceptional travel experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center shadow-soft hover:shadow-travel transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate professionals behind your perfect travel experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-travel transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.experience} experience</p>
                  <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-soft">
              <CardContent className="p-8">
                <Award className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Best Travel Agency 2023</h3>
                <p className="text-muted-foreground">Tourism Excellence Awards</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-soft">
              <CardContent className="p-8">
                <Star className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Customer Choice Award</h3>
                <p className="text-muted-foreground">Travel Industry Association</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-soft">
              <CardContent className="p-8">
                <Shield className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Safety Excellence</h3>
                <p className="text-muted-foreground">International Travel Safety Board</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Your Story?
          </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              For over 15 years, Mallick Travels has been part of the Phoenix Group, bringing you the same 
              trusted management and quality service across multiple industries. Join thousands of satisfied 
              travelers who have trusted us with their dream vacations.
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Start Planning
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;