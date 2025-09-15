import { Link } from "react-router-dom";
import { Leaf, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brand - Take more space */}
          <div className="space-y-4 md:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-full">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold text-foreground">The Ark Spa</span>
            </Link>
            <p className="text-muted-foreground text-base">
              Your sanctuary for relaxation, wellness, and rejuvenation. Experience the perfect blend of luxury and tranquility at our premium spa facility. We offer world-class treatments designed to restore your body, mind, and spirit.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-base text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-base text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/services" className="text-base text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/contact" className="text-base text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+918296846578" className="text-base text-muted-foreground hover:text-primary transition-colors">
                  +91 82968 46578
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:theearkspa@gmail.com" className="text-base text-muted-foreground hover:text-primary transition-colors">
                  theearkspa@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-base text-muted-foreground">
                  The Ark Spa<br />
                  Bangalore, India
                </span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Follow Us</h3>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/thearkspa?igsh=MWh2cGhmcTljNmFieQ==" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                <Instagram className="h-4 w-4 text-primary" />
              </a>
              <a href="#" className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors opacity-50 cursor-not-allowed">
                <Facebook className="h-4 w-4 text-primary" />
              </a>
              <a href="#" className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors opacity-50 cursor-not-allowed">
                <Twitter className="h-4 w-4 text-primary" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              More social links coming soon!
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-base text-muted-foreground">
            © 2024 The Ark Spa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;