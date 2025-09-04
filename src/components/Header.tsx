import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Plane, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <Plane className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">Mallick Travels</h1>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className={`px-4 py-2 transition-colors ${isActive('/') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}>
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/services" className={`px-4 py-2 transition-colors ${isActive('/services') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}>
                  Services
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/destinations" className={`px-4 py-2 transition-colors ${isActive('/destinations') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}>
                  Destinations
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className={`px-4 py-2 transition-colors ${isActive('/about') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}>
                  About
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline">Login</Button>
            <Button>Book Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-2">
              <Link to="/" className={`px-4 py-2 transition-colors ${isActive('/') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`} onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/services" className={`px-4 py-2 transition-colors ${isActive('/services') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`} onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link to="/destinations" className={`px-4 py-2 transition-colors ${isActive('/destinations') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`} onClick={() => setIsMenuOpen(false)}>
                Destinations
              </Link>
              <Link to="/about" className={`px-4 py-2 transition-colors ${isActive('/about') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`} onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline">Login</Button>
                <Button>Book Now</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;