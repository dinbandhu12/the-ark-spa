import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, Sparkles, Heart, Flower2, Droplet, Sun, Leaf } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Services = () => {
  const serviceCategories = [
    {
      title: "Facial Treatments",
      icon: Sparkles,
      services: [
        {
          name: "Signature Glow Facial",
          duration: "60 min",
          price: "$120",
          description: "Our most popular facial combining deep cleansing, exfoliation, and hydrating mask for radiant skin.",
          featured: true
        },
        {
          name: "Anti-Aging Luxury Treatment",
          duration: "75 min",
          price: "$160",
          description: "Advanced anti-aging facial with peptides and collagen boost for youthful, firm skin."
        },
        {
          name: "Sensitive Skin Soothing",
          duration: "45 min",
          price: "$95",
          description: "Gentle treatment designed for sensitive skin with calming botanical ingredients."
        }
      ]
    },
    {
      title: "Massage Therapy",
      icon: Heart,
      services: [
        {
          name: "Swedish Relaxation Massage",
          duration: "60 min",
          price: "$110",
          description: "Classic full-body massage to release tension and promote deep relaxation.",
          featured: true
        },
        {
          name: "Deep Tissue Therapy",
          duration: "90 min",
          price: "$150",
          description: "Intensive massage targeting chronic tension and muscle knots for therapeutic relief."
        },
        {
          name: "Hot Stone Massage",
          duration: "75 min",
          price: "$135",
          description: "Warming heated stones combined with massage techniques for ultimate relaxation."
        },
        {
          name: "Couples Massage",
          duration: "60 min",
          price: "$220",
          description: "Side-by-side relaxation massage experience perfect for couples or friends."
        }
      ]
    },
    {
      title: "Body Treatments",
      icon: Leaf,
      services: [
        {
          name: "Detoxifying Body Wrap",
          duration: "90 min",
          price: "$140",
          description: "Full-body detox treatment with mineral-rich clay and essential oils.",
          featured: true
        },
        {
          name: "Sugar Scrub Exfoliation",
          duration: "45 min",
          price: "$85",
          description: "Gentle exfoliation with organic sugar scrub leaving skin silky smooth."
        },
        {
          name: "Aromatherapy Body Treatment",
          duration: "75 min",
          price: "$125",
          description: "Customized body treatment with essential oils tailored to your wellness needs."
        }
      ]
    },
    {
      title: "Wellness Rituals",
      icon: Sun,
      services: [
        {
          name: "Meditation & Sound Healing",
          duration: "45 min",
          price: "$65",
          description: "Guided meditation session with healing sound bowls for mental clarity and peace."
        },
        {
          name: "Chakra Balancing Session",
          duration: "60 min",
          price: "$90",
          description: "Energy healing treatment to align and balance your body's energy centers."
        },
        {
          name: "Aromatherapy Consultation",
          duration: "30 min",
          price: "$45",
          description: "Personal consultation to create custom essential oil blends for home use."
        }
      ]
    }
  ];

  const packages = [
    {
      name: "Half-Day Retreat",
      duration: "4 hours",
      price: "$280",
      description: "Perfect introduction to spa wellness",
      includes: ["60-min Signature Facial", "60-min Swedish Massage", "Healthy lunch", "Access to relaxation lounge"]
    },
    {
      name: "Full-Day Sanctuary",
      duration: "6 hours",
      price: "$420",
      description: "Complete wellness immersion experience",
      includes: ["75-min Luxury Facial", "90-min Deep Tissue Massage", "Body wrap treatment", "Meditation session", "Spa lunch & refreshments"],
      featured: true
    },
    {
      name: "Weekend Wellness",
      duration: "2 days",
      price: "$650",
      description: "Ultimate relaxation weekend package",
      includes: ["Multiple treatments", "Yoga sessions", "Nutritional consultation", "Spa cuisine meals", "Take-home wellness kit"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our
              <span className="block text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover our comprehensive range of treatments designed to nurture your wellness journey
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-16 ${categoryIndex % 2 === 1 ? 'bg-secondary/30' : ''}`}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-4xl font-bold">{category.title}</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, serviceIndex) => (
                <Card key={serviceIndex} className={`group hover:shadow-lg transition-all duration-300 ${service.featured ? 'ring-2 ring-primary/20' : ''}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg mb-2">{service.name}</CardTitle>
                        {service.featured && (
                          <Badge className="bg-primary/10 text-primary mb-2">
                            <Star className="h-3 w-3 mr-1" />
                            Popular
                          </Badge>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{service.price}</div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {service.duration}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Button variant="outline" className="w-full">
                      Book This Treatment
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Spa Packages */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-sage/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Wellness Packages</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Curated experiences combining multiple treatments for the ultimate spa journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`text-center group hover:shadow-xl transition-all duration-300 ${pkg.featured ? 'ring-2 ring-primary scale-105' : ''}`}>
                <CardHeader>
                  {pkg.featured && (
                    <Badge className="bg-luxury text-luxury-foreground w-fit mx-auto mb-4">
                      Most Popular
                    </Badge>
                  )}
                  <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary mb-2">{pkg.price}</div>
                  <div className="flex items-center justify-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {pkg.duration}
                  </div>
                  <p className="text-muted-foreground mt-2">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {pkg.includes.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button className={`w-full ${pkg.featured ? 'bg-primary' : ''}`}>
                    Book Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Wellness Journey?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your appointment today and discover why The Ark Spa is the premier destination for relaxation and rejuvenation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Book Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;