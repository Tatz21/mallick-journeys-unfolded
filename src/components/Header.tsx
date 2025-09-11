import { Button } from "@/components/ui/button";
import { Plane, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <Plane className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">SkyBound</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium hover:text-slate-900 transition-colors px-3 py-2 rounded-full ${
                location.pathname === "/" ? "bg-yellow-400 text-slate-900 font-semibold" : "text-slate-600"
              }`}
            >
              Flights
            </Link>
            <Link
              to="/services"
              className={`text-sm font-medium hover:text-slate-900 transition-colors px-3 py-2 rounded-full ${
                location.pathname === "/services" ? "bg-yellow-400 text-slate-900 font-semibold" : "text-slate-600"
              }`}
            >
              Stay
            </Link>
            <Link
              to="/destinations"
              className={`text-sm font-medium hover:text-slate-900 transition-colors px-3 py-2 rounded-full ${
                location.pathname === "/destinations" ? "bg-yellow-400 text-slate-900 font-semibold" : "text-slate-600"
              }`}
            >
              Car rentals
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium hover:text-slate-900 transition-colors px-3 py-2 rounded-full ${
                location.pathname === "/about" ? "bg-yellow-400 text-slate-900 font-semibold" : "text-slate-600"
              }`}
            >
              Cruises
            </Link>
          </div>

          {/* Right side - Auth buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900">
              Log in
            </Button>
            <Button size="sm" className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-6">
              Sign up
            </Button>
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
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200 pt-4">
            <nav className="flex flex-col space-y-2">
              <Link to="/" className={`px-4 py-2 transition-colors ${isActive('/') ? 'text-slate-900 font-semibold' : 'text-slate-600 hover:text-slate-900'}`} onClick={() => setIsMenuOpen(false)}>
                Flights
              </Link>
              <Link to="/services" className={`px-4 py-2 transition-colors ${isActive('/services') ? 'text-slate-900 font-semibold' : 'text-slate-600 hover:text-slate-900'}`} onClick={() => setIsMenuOpen(false)}>
                Stay
              </Link>
              <Link to="/destinations" className={`px-4 py-2 transition-colors ${isActive('/destinations') ? 'text-slate-900 font-semibold' : 'text-slate-600 hover:text-slate-900'}`} onClick={() => setIsMenuOpen(false)}>
                Car rentals
              </Link>
              <Link to="/about" className={`px-4 py-2 transition-colors ${isActive('/about') ? 'text-slate-900 font-semibold' : 'text-slate-600 hover:text-slate-900'}`} onClick={() => setIsMenuOpen(false)}>
                Cruises
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline">Log in</Button>
                <Button className="bg-slate-900 text-white hover:bg-slate-800">Sign up</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;