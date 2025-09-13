import { Button } from "@/components/ui/button";
import { Compass, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-glow/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <Compass className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">INDOTRAVI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors px-4 py-2 rounded-lg ${
                isActive('/') 
                  ? "bg-white/10 text-white font-semibold" 
                  : "text-white/80 hover:text-white hover:bg-white/5"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors px-4 py-2 rounded-lg ${
                isActive('/about') 
                  ? "bg-white/10 text-white font-semibold" 
                  : "text-white/80 hover:text-white hover:bg-white/5"
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`text-sm font-medium transition-colors px-4 py-2 rounded-lg ${
                isActive('/services') 
                  ? "bg-white/10 text-white font-semibold" 
                  : "text-white/80 hover:text-white hover:bg-white/5"
              }`}
            >
              Services
            </Link>
            <Link
              to="/destinations" 
              className={`text-sm font-medium transition-colors px-4 py-2 rounded-lg ${
                isActive('/destinations') 
                  ? "bg-white/10 text-white font-semibold" 
                  : "text-white/80 hover:text-white hover:bg-white/5"
              }`}
            >
              Destinations
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors px-4 py-2 rounded-lg ${
                isActive('/contact') 
                  ? "bg-white/10 text-white font-semibold" 
                  : "text-white/80 hover:text-white hover:bg-white/5"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right side - CTA */}
          <div className="hidden lg:flex items-center">
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-6 py-2 rounded-lg">
              Discover
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden border-white/20 text-white hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-white/20 pt-6">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`px-4 py-3 rounded-lg transition-colors ${
                  isActive('/') ? 'bg-white/10 text-white font-semibold' : 'text-white/80 hover:text-white hover:bg-white/5'
                }`} 
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`px-4 py-3 rounded-lg transition-colors ${
                  isActive('/about') ? 'bg-white/10 text-white font-semibold' : 'text-white/80 hover:text-white hover:bg-white/5'
                }`} 
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className={`px-4 py-3 rounded-lg transition-colors ${
                  isActive('/services') ? 'bg-white/10 text-white font-semibold' : 'text-white/80 hover:text-white hover:bg-white/5'
                }`} 
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/destinations" 
                className={`px-4 py-3 rounded-lg transition-colors ${
                  isActive('/destinations') ? 'bg-white/10 text-white font-semibold' : 'text-white/80 hover:text-white hover:bg-white/5'
                }`} 
                onClick={() => setIsMenuOpen(false)}
              >
                Destinations
              </Link>
              <Link 
                to="/contact" 
                className={`px-4 py-3 rounded-lg transition-colors ${
                  isActive('/contact') ? 'bg-white/10 text-white font-semibold' : 'text-white/80 hover:text-white hover:bg-white/5'
                }`} 
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold mt-4">
                Discover
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;