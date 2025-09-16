import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-border w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:justify-center h-16 w-full relative">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 sm:gap-2 flex-shrink-0 min-w-0 md:absolute md:left-0">
            <div className="p-1 sm:p-1.5 bg-primary/10 rounded-full">
              <Leaf className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-foreground truncate">
              The Ark Spa
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8 flex-shrink-0">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-base font-medium transition-colors hover:text-primary whitespace-nowrap ${
                  isActive(item.href) ? "text-primary" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Book Now Button - Right Side */}
          <div className="hidden md:block absolute right-0">
            <Button variant="default" className="whitespace-nowrap text-base px-4 py-2">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1 sm:p-2 flex-shrink-0 z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 border-t border-border bg-background/95 backdrop-blur-md w-full">
            <nav className="px-4 py-6 space-y-4 flex flex-col items-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-lg font-medium transition-colors hover:text-primary py-2 text-center ${
                    isActive(item.href) ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 w-full max-w-xs">
                <Button variant="default" className="w-full">
                  Book Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;