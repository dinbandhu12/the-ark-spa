import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your appointment request! We will contact you within 2 hours to confirm.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      message: ''
    });
  };

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
      link: "https://maps.google.com/?q=The+ark+spa"
    }
  ];

  const hours = [
    { days: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
    { days: "Saturday", hours: "8:00 AM - 9:00 PM" },
    { days: "Sunday", hours: "10:00 AM - 6:00 PM" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In
              <span className="block text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
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
                  <Button variant="outline" className="w-full" asChild>
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

      {/* Booking Form & Hours */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div>
              <Card id="booking-form">
                <CardHeader>
                  <CardTitle className="text-2xl">Book Your Appointment</CardTitle>
                  <p className="text-muted-foreground">Fill out the form below and we'll contact you to confirm your booking</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          name="phone"
                          type="tel" 
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 82968 46578" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com" 
                        required 
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Service Type</Label>
                        <Select value={formData.service} onValueChange={handleServiceChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="thai-massage">Traditional Thai Massage</SelectItem>
                            <SelectItem value="aroma-massage">Aroma Therapy Massage</SelectItem>
                            <SelectItem value="swedish-massage">Swedish Massage</SelectItem>
                            <SelectItem value="deep-tissue">Deep Tissue Massage</SelectItem>
                            <SelectItem value="reflexology">Foot Reflexology</SelectItem>
                            <SelectItem value="balinese-massage">Balinese Massage</SelectItem>
                            <SelectItem value="four-hand">Four Hand Massage</SelectItem>
                            <SelectItem value="six-hand">Six Hand Massage</SelectItem>
                            <SelectItem value="luxury-room">Luxury Room Service</SelectItem>
                            <SelectItem value="couple-massage">Couple Massage</SelectItem>
                            <SelectItem value="membership">Membership Package</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="date">Preferred Date</Label>
                        <Input 
                          id="date" 
                          name="date"
                          type="date" 
                          value={formData.date}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time</Label>
                      <Input 
                        id="time" 
                        name="time"
                        type="time" 
                        value={formData.time}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Special Requests or Questions</Label>
                      <Textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Let us know if you have any special requirements, allergies, or questions..."
                        rows={4}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" size="lg">
                      Request Appointment
                    </Button>
                  </form>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    We'll contact you within 2 hours to confirm your appointment
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Hours & Additional Info */}
            <div className="space-y-8">
              {/* Hours */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">Operating Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {hours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                        <span className="font-medium">{schedule.days}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> We recommend booking 48 hours in advance to ensure availability. Same-day appointments may be available - please call to check.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Follow Us</CardTitle>
                  <p className="text-muted-foreground">Stay connected for wellness tips and special offers</p>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/thearkspa?igsh=MWh2cGhmcTljNmFieQ==" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                      <Instagram className="h-6 w-6 text-primary" />
                    </a>
                    <a href="#" className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors opacity-50 cursor-not-allowed">
                      <Facebook className="h-6 w-6 text-primary" />
                    </a>
                    <a href="#" className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors opacity-50 cursor-not-allowed">
                      <Twitter className="h-6 w-6 text-primary" />
                    </a>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    More social media links coming soon!
                  </p>
                </CardContent>
              </Card>

              {/* Location Map */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Find Us</CardTitle>
                  <p className="text-muted-foreground">Visit our spa location in Bangalore</p>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="rounded-lg overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.954595817281!2d77.6520287!3d12.9106398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150102309305%3A0xfd5c1f8cdf88058e!2sThe%20ark%20spa!5e0!3m2!1sen!2sin!4v1757961991473!5m2!1sen!2sin" 
                      width="100%" 
                      height="300" 
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

      {/* CTA Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Wellness Journey?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your appointment today and discover why The Ark Spa is the premier destination for relaxation and rejuvenation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}>
              Book Now
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