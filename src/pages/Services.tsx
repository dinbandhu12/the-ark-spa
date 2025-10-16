import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, Sparkles, Heart, Crown, Gem, Zap, Droplet, Waves } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useSEO } from "@/hooks/useSEO";
import { seoConfig } from "@/config/seoConfig";
import { StructuredData, localBusinessSchema } from "@/components/StructuredData";
import servicesHeroBg from "@/assets/services-hero-bg.png";

const Services = () => {
  const navigate = useNavigate();

  // Set up SEO for this page
  useSEO(seoConfig.services);

  const handleBookNow = () => {
    navigate('/contact');
  };

  const handleContactUs = () => {
    navigate('/contact');
  };

  const normalServices = [
    {
      name: "Full Body Traditional Thai Massage (Dry Therapy)",
      description: "The therapy includes treating the electromagnetic or energetic field that surrounds, infuses and brings the body to life through pressure or manipulative massage. Thai massage are numerous with the most predominant being the maintenance of good health and its ability to treat a wide spectrum of physical concerns. Traditional Thai massage is also well known for its ability to clear the energy pathways.",
      durations: [
        { time: "60 minutes" },
        { time: "90 minutes" }
      ],
      featured: true
    },
    {
      name: "Full Body Aroma Therapy Massage (Oil Therapy)",
      description: "Aromatherapy massage is used for a variety of different reasons, including relaxation, pain management and improved mood. These are also some of the basic benefits of massage therapy. Adding essential oils is thought to enhance such benefits.",
      durations: [
        { time: "60 minutes" },
        { time: "90 minutes" }
      ]
    },
    {
      name: "Full Body Swedish Massage (Oil Therapy)",
      description: "During a Swedish massage, the massage therapist will lubricate the skin with massage oil and perform various massage strokes. The specific massage strokes includes effleurage (gliding) strokes, petrissage (kneading) strokes, friction, tapotement (percussive) strokes, and vibration.",
      durations: [
        { time: "60 minutes" },
        { time: "90 minutes" }
      ]
    },
    {
      name: "Full Body Deep Tissue Massage (Oil Therapy)",
      description: "Deep tissue massage is a massage technique that's mainly used to resolve musculoskeletal issues, such as strains and sports injuries. It involves sustained pressure using slow, deep strokes to target the inner layers of your muscles and connective tissues. This helps break up scar tissue that forms following an injury and reduce tension in muscle and tissue.",
      durations: [
        { time: "60 minutes" },
        { time: "90 minutes" }
      ]
    },
    {
      name: "Foot Reflexology",
      description: "Besides being an incredibly relaxing and rejuvenating experience, foot reflexology also has an array of benefits for physical health. Foot reflexology isn't just another name for a foot massage. It is a practice based on the principle of various pressure points on the feet which correspond to different organs and glands of the body. When pressure is applied to these points, it induces a healing response, which can even alleviate certain ailments.",
      durations: [
        { time: "30 minutes", price: "₹ 1999" },
        { time: "60 minutes", price: "₹ 1999" }
      ]
    },
    {
      name: "Balinese Massage (Dry & Oil Therapy)",
      description: "Balinese massage is a full-body, deep-tissue, holistic treatment. Balinese massage uses a combination of gentle stretches, acupressure, reflexology, and aromatherapy to stimulate the flow of blood, oxygen and 'qi' (energy) around your body, and bring a sense of well-being, calm and deep relaxation.",
      durations: [
        { time: "60 minutes" },
        { time: "90 minutes" }
      ]
    },
    {
      name: "Full Body Four Hand Massage",
      description: "In a four-hands massage, two therapists work on one client, often using synchronized moves. A four-hands massage can be like experiencing two full-body massages at the same time. When two therapists and four hands hit your body, your mind reacts differently. This is a powerful treatment for anyone.",
      durations: [
        { time: "60 minutes" },
        { time: "90 minutes" }
      ],
      featured: true
    },
    {
      name: "Full Body Six Hand Massage",
      description: "In a six-hands massage, three therapists work on one client, often using synchronized moves. A six-hands massage can be like experiencing three full-body massages at the same time. When three therapists and six hands hit your body, your mind reacts differently. This is a powerful treatment for anyone.",
      durations: [
        { time: "60 minutes" },
        { time: "90 minutes" }
      ],
      featured: true
    }
  ];

  const luxuryServices = [
    {
      name: "Full Body V.VIP Massage / Couple Massage (Oil Massage)",
      description: "In a full-body massage, a therapist will massage the entire body during a therapeutic massage which includes Jacuzzi, Steam and shower Massage. Sessions typically last a minimum of 60, 90 or 120 minutes which allows enough time to work over all the major areas of the body like the back, shoulders, legs, feet, arms, hands and neck.",
      packages: [
        {
          name: "60 Minutes Package",
          includes: ["Any massage - 30min", "Jacuzzi with full Body Scrub - 15min", "Steam shower - 15min", "Shower"]
        },
        {
          name: "90 Minutes Package",
          includes: ["Any massage - 45min", "Jacuzzi with full Body Scrub - 30min", "Steam - 15min", "Shower"]
        },
        {
          name: "120 Minutes Package",
          includes: ["Any massage - 75min", "Jacuzzi with full Body Scrub - 30min", "Steam shower - 15min", "Shower"]
        }
      ],
      couplePackages: [
        {
          name: "Couple Massage - 60 Minutes",
          description: "Only massage"
        },
        {
          name: "Couple Massage - 60 Minutes with Jacuzzi",
          includes: ["Any massage - 30min", "Jacuzzi with full Body Scrub - 15min", "Steam shower - 15min", "Shower"]
        },
        {
          name: "Couple Massage - 90 Minutes",
          description: "Only massage"
        },
        {
          name: "Couple Massage - 90 Minutes with Jacuzzi",
          includes: ["Any massage - 30min", "Jacuzzi with full Body Scrub - 15min", "Steam shower - 15min", "Shower"]
        }
      ]
    }
  ];

  const membershipPackages = [
    {
      name: "BRONZE",
      description: "Any massage",
      details: "10hrs - 1 person",
      validity: "No validity",
      icon: Star,
      color: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
    },
    {
      name: "SILVER",
      description: "Any massage (include 1 time 90min vip service)",
      details: "15hrs + 1 times 90min vip room",
      validity: "Max 2 members - No validity",
      icon: Sparkles,
      color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
    },
    {
      name: "GOLD",
      description: "Any massage VIP service",
      details: "4 vip room service 90min each",
      validity: "Max 2 members - No validity",
      icon: Crown,
      color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      featured: true
    },
    {
      name: "GOLD PLUS",
      description: "Any massage VIP service",
      details: "7 vip room service 90min each",
      validity: "Max 3 members - No validity",
      icon: Crown,
      color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
    },
    {
      name: "PLATINUM",
      description: "Any massage (include VIP service)",
      details: "15hrs + 5vip room service 90min each",
      validity: "Max 5 members - No validity",
      icon: Gem,
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    },
    {
      name: "DIAMOND",
      description: "Any massage with VIP and V.VIP services",
      details: "25hrs + 25 VIP room service 90min each",
      validity: "Max 7 members - No validity",
      icon: Zap,
      color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      featured: true
    }
  ];

  return (
    <div className="min-h-screen">
      <StructuredData data={localBusinessSchema} />
      <Header />
      
      {/* Hero Section */}
      {/* <section className="pt-32 pb-16" style={{background: 'radial-gradient(circle, rgba(101, 196, 199, 1) 10%, rgba(66, 123, 255, 1) 100%)'}}> */}
      <section className="relative pt-32 pb-24 min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${servicesHeroBg})` }}
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white" style={{
              textShadow: '0 0 8px rgba(255, 215, 0, 0.4), 0 0 16px rgba(255, 215, 0, 0.3), 0 0 24px rgba(255, 215, 0, 0.2)'
            }}> */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Our
              <span className="block text-primary" style={{
                textShadow: '0 0 10px rgba(255, 215, 0, 0.5), 0 0 20px rgba(255, 215, 0, 0.3), 0 0 30px rgba(255, 215, 0, 0.2)'
              }}>Services</span>
            </h1>
            <p className="text-xl text-white/80">
              Discover our comprehensive range of treatments designed to nurture your wellness journey
            </p>
          </div>
        </div>
      </section>

      {/* Normal Services Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-4xl font-bold text-center">Traditional Massage Services</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience our range of traditional and therapeutic massage treatments
            </p>
            <div className="mt-8">
              <p className="text-2xl md:text-4xl font-semibold text-primary">All services start with <span className="font-extrabold">₹1999</span></p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {normalServices.map((service, index) => (
              <Card key={index} className={`group relative overflow-hidden bg-gradient-to-br from-card to-card/80 border-2 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 ${service.featured ? 'ring-2 ring-primary/30 bg-gradient-to-br from-primary/5 to-sage/5' : ''}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-2 mb-3">
                        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{service.name}</CardTitle>
                        {service.featured && (
                          <Badge className="bg-gradient-to-r from-primary to-sage text-white shadow-lg flex-shrink-0">
                            <Star className="h-3 w-3 mr-1" />
                            Popular
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.durations.map((duration, durationIndex) => (
                      <div key={durationIndex} className="flex items-center gap-3 p-3 bg-gradient-to-r from-primary/10 to-sage/10 rounded-xl border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                        <div className="p-2 bg-primary/20 rounded-full">
                          <Clock className="h-4 w-4 text-primary" />
                        </div>
                        <span className="font-semibold text-sm text-foreground">{duration.time}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-primary to-sage hover:from-primary/90 hover:to-sage/90 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" onClick={handleBookNow}>
                    Book This Treatment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Room Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Crown className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-4xl font-bold text-center">The Ark Luxury Room Service</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium spa experience with Jacuzzi, Steam, and Shower facilities
            </p>
          </div>

          {luxuryServices.map((service, index) => (
            <div key={index} className="space-y-12">
              <Card className="group relative overflow-hidden bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-sage/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10 pb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-r from-primary to-sage rounded-full shadow-lg">
                      <Droplet className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{service.name}</CardTitle>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base">{service.description}</p>
                </CardHeader>
                <CardContent>
                  {/* Individual Packages */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Droplet className="h-5 w-5 text-primary" />
                      Individual Packages
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {service.packages.map((pkg, pkgIndex) => (
                        <Card key={pkgIndex} className="group relative overflow-hidden bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">{pkg.name}</CardTitle>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <div className="space-y-3 mb-6">
                              {pkg.includes.map((item, itemIndex) => (
                                <div key={itemIndex} className="flex items-center gap-3">
                                  <div className="w-2 h-2 bg-gradient-to-r from-primary to-sage rounded-full flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{item}</span>
                                </div>
                              ))}
                            </div>
                            <Button className="w-full bg-gradient-to-r from-primary to-sage hover:from-primary/90 hover:to-sage/90 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300" size="sm" onClick={handleBookNow}>
                              Book Package
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Couple Packages */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Heart className="h-5 w-5 text-primary" />
                      Couple Massage Packages
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {service.couplePackages.map((pkg, pkgIndex) => (
                        <Card key={pkgIndex} className="group relative overflow-hidden bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">{pkg.name}</CardTitle>
                          </CardHeader>
                          <CardContent className="pt-0">
                            {pkg.description && (
                              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{pkg.description}</p>
                            )}
                            {pkg.includes && (
                              <div className="space-y-3 mb-6">
                                {pkg.includes.map((item, itemIndex) => (
                                  <div key={itemIndex} className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-sage rounded-full flex-shrink-0" />
                                    <span className="text-sm text-muted-foreground">{item}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                            <Button className="w-full bg-gradient-to-r from-primary to-sage hover:from-primary/90 hover:to-sage/90 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300" size="sm" onClick={handleBookNow}>
                              Book Couple Package
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Membership Packages Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-sage/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Gem className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-4xl font-bold text-center">Membership Packages</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our exclusive membership tiers for unlimited wellness experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membershipPackages.map((pkg, index) => (
              <Card key={index} className={`group relative overflow-hidden text-center transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 ${pkg.featured ? 'bg-gradient-to-br from-primary/10 via-white to-sage/10 border-2 border-primary/40 scale-105 shadow-xl shadow-primary/20' : 'bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 hover:border-primary/30'}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-sage/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10 pb-6">
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 rounded-full shadow-lg ${pkg.color} group-hover:scale-110 transition-transform duration-300`}>
                      <pkg.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{pkg.name}</CardTitle>
                    {pkg.featured && (
                      <Badge className="bg-gradient-to-r from-primary to-sage text-white shadow-lg flex-shrink-0">
                        <Star className="h-3 w-3 mr-1" />
                        Most Popular
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{pkg.description}</p>
                </CardHeader>
                <CardContent className="relative z-10 pt-0">
                  <div className="space-y-4 mb-8">
                    <div className="p-4 bg-gradient-to-r from-primary/10 to-sage/10 rounded-xl border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                      <p className="font-semibold text-sm text-foreground">{pkg.details}</p>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-slate-100 to-slate-200 rounded-lg">
                      <p className="text-xs text-muted-foreground font-medium">{pkg.validity}</p>
                    </div>
                  </div>
                  <Button className={`w-full font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${pkg.featured ? 'bg-gradient-to-r from-primary to-sage hover:from-primary/90 hover:to-sage/90 text-white' : 'bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white'}`} onClick={handleBookNow}>
                    Choose {pkg.name}
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
            <Button size="lg" className="text-lg px-8" onClick={handleBookNow}>
              Book Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8" onClick={handleContactUs}>
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