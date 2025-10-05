import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter, Calendar, Users, Star } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import contactHeroBg from "@/assets/contact-hero-bg.webp";

const Contact = () => {

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 82968 46578", "Available 9 AM - 8 PM"],
      action: "Call Now",
      link: "tel:+918296846578"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["theearkspa@gmail.com", "We respond within 24 hours"],
      action: "Send Email",
      link: "mailto:theearkspa@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["The Ark Spa", "Bangalore, India"],
      action: "Get Directions",
      link: "https://maps.app.goo.gl/DGhEjSkX7AhiGoEy6?g_st=ipc"
    }
  ];

  const hours = [
    { days: "Monday - Friday", hours: "10:30 AM - 9:00 PM" },
    { days: "Saturday", hours: "10:30 AM - 9:00 PM" },
    { days: "Sunday", hours: "10:30 AM - 9:00 PM" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      {/* <section className="pt-32 pb-16" style={{background: 'linear-gradient(0deg, rgba(34, 195, 139, 1) 0%, rgba(45, 48, 253, 1) 100%)'}}> */}
      <section className="relative pt-32 pb-24 min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${contactHeroBg})` }}
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Get In
              <span className="block text-primary">Touch</span>
            </h1>
            <p className="text-xl text-white/80">
              Ready to book your wellness experience? We're here to help you every step of the way
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6 mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{info.title}</h3>
                  <div className="space-y-2 mb-6">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className={detailIndex === 0 ? "font-medium" : "text-sm text-muted-foreground"}>
                        {detail}
                      </p>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full bg-gradient-to-r from-primary to-sage hover:from-primary/90 hover:to-sage/90 text-white" asChild>
                    <a href={info.link} target={info.link.startsWith('http') ? '_blank' : '_self'} rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}>
                      {info.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Additional Info */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Hours & Social Media (35% width) */}
            <div className="lg:col-span-4 space-y-8">
              {/* Hours */}
              <Card className="bg-gradient-to-br from-primary/5 to-sage/5">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple/10 rounded-full">
                      <Clock className="h-6 w-6 text-purple" />
                    </div>
                    <CardTitle className="text-xl">Operating Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {hours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-3 px-4 bg-white/50 rounded-lg">
                        <span className="font-medium">{schedule.days}</span>
                        <span className="text-muted-foreground font-medium">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-purple/10 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> We recommend booking 48 hours in advance to ensure availability. Same-day appointments may be available - please call to check.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-gradient-to-br from-primary/5 to-sage/5">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple/10 rounded-full">
                      <Users className="h-6 w-6 text-purple" />
                    </div>
                    <CardTitle className="text-xl">Follow Us</CardTitle>
                  </div>
                  <p className="text-muted-foreground">Stay connected for wellness tips and special offers</p>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 justify-center">
                    <a href="https://www.instagram.com/thearkspa?igsh=MWh2cGhmcTljNmFieQ==" target="_blank" rel="noopener noreferrer" className="p-4 bg-purple/10 rounded-full hover:bg-purple/20 transition-colors group">
                      <Instagram className="h-6 w-6 text-purple group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="p-4 bg-purple/10 rounded-full hover:bg-purple/20 transition-colors opacity-50 cursor-not-allowed group">
                      <Facebook className="h-6 w-6 text-purple group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="p-4 bg-purple/10 rounded-full hover:bg-purple/20 transition-colors opacity-50 cursor-not-allowed group">
                      <Twitter className="h-6 w-6 text-purple group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    More social media links coming soon!
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Location Map (65% width) */}
            <div className="lg:col-span-8">
              <Card className="bg-gradient-to-br from-primary/5 to-sage/5 h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple/10 rounded-full">
                      <MapPin className="h-6 w-6 text-purple" />
                    </div>
                    <CardTitle className="text-xl">Find Us</CardTitle>
                  </div>
                  <p className="text-muted-foreground">Visit our spa location in Bangalore</p>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="rounded-lg overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248757.24384760653!2d77.47270307239364!3d13.046367513419085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150102309305%3A0xfd5c1f8cdf88058e!2sThe%20ark%20spa!5e0!3m2!1sen!2sin!4v1758645122873!5m2!1sen!2sin" 
                      width="100%" 
                      height="500" 
                      style={{border: 0}} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="The Ark Spa Location"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking Options */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Book?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred way to book your appointment with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-primary/5 to-sage/5 hover:from-purple/10 hover:to-purple/15">
              <CardContent className="p-8">
                <div className="mb-6 mx-auto w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center group-hover:bg-purple/20 transition-colors">
                  <Phone className="h-8 w-8 text-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Call Us</h3>
                <p className="text-muted-foreground mb-6">Speak directly with our team for immediate booking and personalized service recommendations.</p>
                <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                  <a href="tel:+918296846578">Call +91 82968 46578</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-primary/5 to-sage/5 hover:from-purple/10 hover:to-purple/15">
              <CardContent className="p-8">
                <div className="mb-6 mx-auto w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center group-hover:bg-purple/20 transition-colors">
                  <Mail className="h-8 w-8 text-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Email Us</h3>
                <p className="text-muted-foreground mb-6">Send us your requirements and we'll get back to you within 24 hours with availability.</p>
                <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                  <a href="mailto:theearkspa@gmail.com">Send Email</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-primary/5 to-sage/5 hover:from-purple/10 hover:to-purple/15">
              <CardContent className="p-8">
                <div className="mb-6 mx-auto w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center group-hover:bg-purple/20 transition-colors">
                  <Calendar className="h-8 w-8 text-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
                <p className="text-muted-foreground mb-6">Walk in to our spa and speak with our reception team for same-day availability.</p>
                <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                  <a href="https://maps.app.goo.gl/DGhEjSkX7AhiGoEy6?g_st=ipc" target="_blank" rel="noopener noreferrer">Get Directions</a>
                </Button>
              </CardContent>
            </Card>
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
            <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90" onClick={() => window.open('tel:+918296846578', '_self')}>
              Call Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8" onClick={() => window.open('tel:+918296846578', '_self')}>
              Call Us Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;