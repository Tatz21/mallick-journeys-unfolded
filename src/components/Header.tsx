import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Plane, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Plane className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">Mallick Travels</h1>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="#home" className="px-4 py-2 text-foreground hover:text-primary transition-colors">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#services" className="px-4 py-2 text-foreground hover:text-primary transition-colors">
                  Services
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#destinations" className="px-4 py-2 text-foreground hover:text-primary transition-colors">
                  Destinations
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#about" className="px-4 py-2 text-foreground hover:text-primary transition-colors">
                  About
                </NavigationMenuLink>
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
              <a href="#home" className="px-4 py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
              <a href="#services" className="px-4 py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Services
              </a>
              <a href="#destinations" className="px-4 py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Destinations
              </a>
              <a href="#about" className="px-4 py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
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