import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar, Globe } from "lucide-react";

const ContactPage = () => {
  const offices = [
    {
      city: "Mumbai (Head Office)",
      address: "123 Travel Street, Tourism District, Mumbai - 400001",
      phone: "+91 98765 43210",
      email: "mumbai@mallicktravels.com",
      hours: "Mon - Sat: 9:00 AM - 7:00 PM"
    },
    {
      city: "Delhi",
      address: "456 Adventure Avenue, Connaught Place, New Delhi - 110001",
      phone: "+91 98765 43211",
      email: "delhi@mallicktravels.com",
      hours: "Mon - Sat: 9:00 AM - 7:00 PM"
    },
    {
      city: "Bangalore",
      address: "789 Explorer Lane, MG Road, Bangalore - 560001",
      phone: "+91 98765 43212",
      email: "bangalore@mallicktravels.com",
      hours: "Mon - Sat: 9:00 AM - 7:00 PM"
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our travel experts",
      value: "+91 98765 43210",
      action: "Call Now",
      available: "24/7 Emergency Support"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us your travel requirements",
      value: "info@mallicktravels.com",
      action: "Send Email",
      available: "Response within 2 hours"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant assistance from our team",
      value: "Available on website",
      action: "Start Chat",
      available: "Mon - Sat: 9 AM - 9 PM"
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book a consultation call",
      value: "Free 30-min consultation",
      action: "Book Now",
      available: "Available slots shown"
    }
  ];

  const faqs = [
    {
      question: "How far in advance should I book my trip?",
      answer: "We recommend booking international trips 2-3 months in advance and domestic trips 3-4 weeks ahead for the best deals and availability."
    },
    {
      question: "Do you provide travel insurance?",
      answer: "Yes, we offer comprehensive travel insurance covering medical emergencies, trip cancellations, lost baggage, and more."
    },
    {
      question: "Can I customize my travel package?",
      answer: "Absolutely! All our packages are customizable. We work with you to create an itinerary that matches your preferences and budget."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, bank transfers, and UPI payments. We also offer flexible payment plans."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next adventure? Get in touch with our travel experts who are here to help 
            you plan the perfect getaway. We're available 24/7 for your convenience.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the most convenient way to reach us. Our team is ready to assist you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card key={index} className="text-center shadow-soft hover:shadow-travel transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{method.title}</h3>
                    <p className="text-muted-foreground mb-3">{method.description}</p>
                    <p className="text-primary font-semibold mb-2">{method.value}</p>
                    <p className="text-sm text-muted-foreground mb-4">{method.available}</p>
                    <Button className="w-full" variant="outline">{method.action}</Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <Contact />

      {/* Office Locations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Office Locations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Visit us at any of our offices across India for personalized travel consultation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="shadow-soft hover:shadow-travel transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>{office.city}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 mt-1 text-muted-foreground flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">{office.address}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">{office.phone}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">{office.email}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">{office.hours}</p>
                  </div>
                  <Button className="w-full gradient-ocean text-white border-0 hover:opacity-90">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to common questions about our services and booking process.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-soft hover:shadow-travel transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button size="lg" className="gradient-ocean text-white border-0 hover:opacity-90">
              Contact Our Support Team
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-r from-destructive to-destructive/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            24/7 Emergency Support
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Traveling and need immediate assistance? Our emergency support team is available around the clock.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-destructive hover:bg-white/90">
              <Phone className="w-4 h-4 mr-2" />
              Emergency Hotline
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-destructive">
              <Globe className="w-4 h-4 mr-2" />
              International Support
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;