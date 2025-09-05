import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Leaf, Star } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import spaHero from "@/assets/spa-hero.jpg";
import spaTreatment from "@/assets/spa-treatment.jpg";

const Home = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Facial Treatments",
      description: "Rejuvenating facials that restore your natural glow and vitality."
    },
    {
      icon: Heart,
      title: "Massage Therapy",
      description: "Therapeutic massages to release tension and promote deep relaxation."
    },
    {
      icon: Leaf,
      title: "Body Treatments",
      description: "Luxurious body wraps and scrubs for ultimate skin nourishment."
    }
  ];

  const testimonials = [
    {
      name: "Emma Johnson",
      rating: 5,
      text: "The most relaxing experience I've ever had. The staff is incredibly professional and the atmosphere is pure bliss."
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Amazing massage therapy! I left feeling completely renewed and stress-free. Highly recommend The Ark Spa."
    },
    {
      name: "Sarah Williams",
      rating: 5,
      text: "The facial treatment was exceptional. My skin has never looked better. This place is truly a sanctuary."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${spaHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Your Sanctuary of
            <span className="block bg-gradient-to-r from-primary to-sage bg-clip-text text-transparent">
              Wellness & Peace
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Escape the ordinary and immerse yourself in pure tranquility at The Ark Spa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Book Your Experience
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Signature Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated treatments designed to restore your body, mind, and spirit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Where Luxury Meets
                <span className="block text-primary">Tranquility</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At The Ark Spa, we believe that true wellness begins with inner peace. Our carefully designed treatments and serene environment provide the perfect escape from life's daily stresses.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Experience the perfect harmony of ancient wellness traditions and modern luxury in our peaceful sanctuary.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={spaTreatment}
                alt="Spa treatment room"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Guests Say</h2>
            <p className="text-xl text-muted-foreground">
              Discover why our guests choose The Ark Spa for their wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/50">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-luxury text-luxury" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-foreground">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;