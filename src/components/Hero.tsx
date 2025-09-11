import { Button } from "@/components/ui/button";
import { Search, MapPin, Calendar, Users, Building2, Palmtree, Castle, Home, Trees, Mountain } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Hero = () => {
  const categories = [
    { icon: Building2, name: "Beachfront", count: "316 Activities", badge: "Top rated" },
    { icon: Mountain, name: "Lakefront", count: "190 Activities", badge: "Trending" },
    { icon: Palmtree, name: "Tropical", count: "248 Activities", badge: "Guest favorite" },
    { icon: Castle, name: "Castles", count: "74 Activities", badge: "Top rated" },
    { icon: Home, name: "Farmhouse", count: "128 Activities", badge: "Trending" },
    { icon: Building2, name: "City", count: "294 Activities", badge: "Trending" },
  ];

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header Content */}
        <div className="text-center mb-12">
          <div className="flex items-center gap-2 justify-center mb-4">
            <MapPin className="w-5 h-5 text-muted-foreground" />
            <span className="text-muted-foreground">Kings Beach</span>
            <span className="text-muted-foreground">845 Miles away</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-slate-900 mb-4">
            Explore City
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Embrace the Beauty of the Great Outdoors
          </p>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">🔥</span>
            <span className="text-2xl">⭐</span>
            <span className="text-2xl">😍</span>
            <span className="text-2xl">💙</span>
            <span className="text-2xl">👍</span>
            <span className="text-2xl">👑</span>
          </div>
          
          <p className="text-sm text-slate-600 border-b border-slate-300 inline-block pb-1">
            Loved from 500k users
          </p>
        </div>

        {/* Search Form */}
        <Card className="bg-white shadow-lg max-w-5xl mx-auto mb-16 rounded-2xl">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Location</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Enter your destination" className="pl-10 h-12 bg-slate-50 border-slate-200" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Room</label>
                <Select>
                  <SelectTrigger className="h-12 bg-slate-50 border-slate-200">
                    <SelectValue placeholder="Select rooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Room</SelectItem>
                    <SelectItem value="2">2 Rooms</SelectItem>
                    <SelectItem value="3">3 Rooms</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Check in</label>
                <Input type="date" className="h-12 bg-slate-50 border-slate-200" />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Check out</label>
                <Input type="date" className="h-12 bg-slate-50 border-slate-200" />
              </div>
            </div>
            
            <div className="flex justify-center mt-6">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-full h-12 w-12">
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Category Selection */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Select Category</h2>
              <p className="text-muted-foreground">Uncover the Perfect Match in Every Category</p>
            </div>
            <Button variant="outline" className="gap-2">
              <span className="text-sm">🔧</span>
              Filters
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={category.name} className="relative overflow-hidden hover:shadow-md transition-shadow cursor-pointer group">
                  {category.badge && (
                    <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${
                      category.badge === "Top rated" ? "bg-yellow-100 text-yellow-800" :
                      category.badge === "Trending" ? "bg-red-100 text-red-800" :
                      "bg-blue-100 text-blue-800"
                    }`}>
                      {category.badge}
                    </div>
                  )}
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-100 transition-colors">
                      <IconComponent className="w-6 h-6 text-slate-600 group-hover:text-yellow-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-1">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.count}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;