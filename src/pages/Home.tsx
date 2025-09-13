import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TourismSection from "@/components/TourismSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TourismSection />
      <Footer />
    </div>
  );
};

export default Home;