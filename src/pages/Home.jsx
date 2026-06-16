import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import IndustriesSection from "../components/IndustriesSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import TopCTA from "../components/TopCTA";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      {/* <Navbar /> */}
      <Hero />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <TopCTA
        onContactClick={() => {
          navigate("/contact");
        }}
      />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
