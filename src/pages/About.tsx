import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Sparkles, Heart } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useSEO } from "@/hooks/useSEO";
import { seoConfig } from "@/config/seoConfig";
import { StructuredData, organizationSchema } from "@/components/StructuredData";
import spaAbout from "@/assets/spa-about.jpg";
import aboutHeroBg from "@/assets/about-hero-bg.jpg";

const About = () => {
  // Set up SEO for this page
  useSEO(seoConfig.about);

  const values = [
    {
      icon: Heart,
      title: "Holistic Wellness",
      description: "We believe in treating the whole person - body, mind, and spirit - for complete rejuvenation."
    },
    {
      icon: Sparkles,
      title: "Luxury Experience",
      description: "Every detail is crafted to provide you with an unparalleled spa experience that exceeds expectations."
    },
    {
      icon: Users,
      title: "Expert Therapists",
      description: "Our certified professionals bring years of experience and passion to every treatment."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "We use only the finest organic products and state-of-the-art equipment for optimal results."
    }
  ];

  return (
    <div className="min-h-screen">
      <StructuredData data={organizationSchema} />
      <Header />
      
      {/* Hero Section */}
      {/* <section className="pt-32 pb-16" style={{background: 'radial-gradient(circle, rgba(110, 101, 199, 1) 10%, rgba(66, 161, 255, 1) 100%)'}}> */}
      <section className="relative pt-32 pb-24 min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aboutHeroBg})` }}
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              About
              <span className="block text-primary" style={{
                textShadow: '0 0 10px rgba(89, 0, 255, 0.5), 0 0 20px rgba(89, 0, 255, 0.3), 0 0 30px rgba(89, 0, 255, 0.2)'
              }}>The Ark Spa</span>
            </h1>
            <p className="text-xl text-white/80">
              Your journey to wellness and tranquility begins here
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={spaAbout}
                alt="Peaceful spa meditation space"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2018, The Ark Spa was born from a simple yet profound vision: to create a sanctuary where people could escape the chaos of modern life and reconnect with their inner peace.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Inspired by ancient wellness traditions from around the world, we've carefully curated a collection of treatments that honor both time-tested practices and modern innovations in spa therapy.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we're proud to be recognized as one of the premier wellness destinations, helping thousands of guests discover their path to relaxation, rejuvenation, and renewal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at The Ark Spa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6 mx-auto w-16 h-16 bg-primary/30 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Mission</h2>
            <div className="bg-gradient-to-r from-primary/10 to-sage/10 rounded-2xl p-12">
              <p className="text-2xl text-foreground leading-relaxed">
                "To provide a transformative wellness experience that nurtures the body, calms the mind, and rejuvenates the spirit, helping every guest discover their own path to balance and inner peace."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Excellence */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Excellence in Every Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Our team of certified therapists and wellness experts are dedicated to providing you with personalized care and exceptional service that exceeds your expectations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Expert Therapists</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-muted-foreground">Happy Guests</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Signature Treatments</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;