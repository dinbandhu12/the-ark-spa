import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Leaf, Star } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Gallery from "@/components/Gallery";
import spaHero from "@/assets/spa-hero.jpg";
import spaTreatment from "@/assets/spa-treatment.jpg";
import img01 from "@/assets/gallery-images/img01.webp";
import img02 from "@/assets/gallery-images/img02.webp";
import img03 from "@/assets/gallery-images/img03.webp";
import img04 from "@/assets/gallery-images/img04.webp";
import img05 from "@/assets/gallery-images/img05.webp";
import img06 from "@/assets/gallery-images/img06.webp";
import img07 from "@/assets/gallery-images/img07.webp";
import img08 from "@/assets/gallery-images/img08.webp";
import img09 from "@/assets/gallery-images/img09.webp";
import img10 from "@/assets/gallery-images/img10.webp";

const Home = () => {

  const services = [
    {
      icon: Sparkles,
      title: "Facial Treatments",
      description: "Rejuvenating facials that restore your natural glow and vitality.",
      // price: "From $95",
      // duration: "45-75 min"
    },
    {
      icon: Heart,
      title: "Massage Therapy",
      description: "Therapeutic massages to release tension and promote deep relaxation.",
      // price: "From $110",
      // duration: "60-90 min"
    },
    {
      icon: Leaf,
      title: "Body Treatments",
      description: "Luxurious body wraps and scrubs for ultimate skin nourishment.",
      // price: "From $85",
      // duration: "45-90 min"
    }
  ];

  // Gallery images - Local spa images
  const galleryImages = [
    img01, img02, img03, img04, img05, img06, img07, img08, img09, img10
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      // country: "India",
      rating: 5,
      text: "Absolutely amazing experience! The atmosphere here is so peaceful and relaxing. The facial treatment I received was truly exceptional and left my skin glowing."
    },
    {
      name: "Akira Tanaka",
      // country: "Japan",
      rating: 5,
      text: "Wonderful spa experience! The staff's professional service and the relaxing atmosphere really impressed me. I will definitely come back again."
    },
    {
      name: "Maria Rodriguez",
      // country: "Spain",
      rating: 5,
      text: "A truly relaxing experience. The massage was exceptional and the environment is perfect for disconnecting from daily stress. Highly recommended."
    },
    {
      name: "James Thompson",
      // country: "Australia",
      rating: 5,
      text: "The most luxurious spa experience I've ever had. The attention to detail and the serene atmosphere made it absolutely perfect. Worth every penny!"
    },
    {
      name: "Fatima Al-Zahra",
      // country: "UAE",
      rating: 5,
      text: "An unforgettable experience! The service is excellent and the atmosphere is very peaceful. The treatment I received was wonderful and I will definitely return."
    }
  ];


  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[85vh] sm:h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16 w-full max-w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${spaHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-foreground">
            Your Sanctuary of
            <span className="block bg-gradient-to-r from-primary to-sage bg-clip-text text-transparent">
              Wellness & Peace
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-black mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Escape the ordinary and immerse yourself in pure tranquility at The Ark Spa
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto">
              Book Your Experience
            </Button>
            <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-12 sm:py-16 lg:py-20 bg-byzantium">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Our Signature Services</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-platinum max-w-2xl mx-auto px-2">
              Discover our carefully curated treatments designed to restore your body, mind, and spirit
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
            {services.map((service, index) => (
              <div key={index} className="w-full max-w-full">
                <div className="bg-card rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  {/* Icon */}
                  <div className="mb-6 mx-auto">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl flex items-center justify-center">
                      <service.icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center flex-grow">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg lg:text-xl mb-6">{service.description}</p>
                  </div>

                  {/* Button */}
                  <button className="w-full bg-gradient-to-r from-primary to-sage hover:from-primary/90 hover:to-sage/90 text-white py-3 sm:py-4 px-6 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg text-base sm:text-lg">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-12 sm:py-16 lg:py-20 w-full max-w-full overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                Where Luxury Meets
                <span className="block text-primary">Tranquility</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-4 sm:mb-6">
                At The Ark Spa, we believe that true wellness begins with inner peace. Our carefully designed treatments and serene environment provide the perfect escape from life's daily stresses.
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8">
                Experience the perfect harmony of ancient wellness traditions and modern luxury in our peaceful sanctuary.
              </p>
              <Button asChild variant="outline" size="lg" className="bg-white/50 w-full sm:w-auto">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative order-1 lg:order-2">
              <img 
                src={spaTreatment}
                alt="Spa treatment room"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-secondary/30 w-full max-w-full overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Our Spa Gallery</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto px-4">
              Take a visual journey through our serene spaces and luxurious treatments
            </p>
          </div>

          <Gallery images={galleryImages} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-mintgreen w-full max-w-full overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">What Our Guests Say</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground px-4">
              Discover why our guests from around the world choose The Ark Spa for their wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/50 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-luxury text-luxury" />
                    ))}
                  </div>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground text-base sm:text-lg">{testimonial.name}</p>
                      {/* <p className="text-xs sm:text-sm text-primary font-medium">{testimonial.country}</p> */}
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary/20 to-sage/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-xs sm:text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
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