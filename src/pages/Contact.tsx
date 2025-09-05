import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "Available 9 AM - 8 PM"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@thearkspa.com", "We respond within 24 hours"],
      action: "Send Email"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Wellness Avenue", "Serenity City, SC 12345"],
      action: "Get Directions"
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
                  <Button variant="outline" className="w-full">
                    {info.action}
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
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Book Your Appointment</CardTitle>
                  <p className="text-muted-foreground">Fill out the form below and we'll contact you to confirm your booking</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Service Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="facial">Facial Treatment</SelectItem>
                          <SelectItem value="massage">Massage Therapy</SelectItem>
                          <SelectItem value="body">Body Treatment</SelectItem>
                          <SelectItem value="wellness">Wellness Ritual</SelectItem>
                          <SelectItem value="package">Spa Package</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input id="date" type="date" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Special Requests or Questions</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Let us know if you have any special requirements, allergies, or questions..."
                      rows={4}
                    />
                  </div>
                  
                  <Button className="w-full" size="lg">
                    Request Appointment
                  </Button>
                  
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
                    <a href="#" className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                      <Instagram className="h-6 w-6 text-primary" />
                    </a>
                    <a href="#" className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                      <Facebook className="h-6 w-6 text-primary" />
                    </a>
                    <a href="#" className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                      <Twitter className="h-6 w-6 text-primary" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Location Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="h-12 w-12 mx-auto mb-4" />
                      <p>Interactive Map</p>
                      <p className="text-sm">123 Wellness Avenue, Serenity City</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;