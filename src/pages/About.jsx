import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import headImg from "../assets/optimized/head.webp";
import aboutComImg from "../assets/optimized/aboutcom.webp";
import founderImg from "../assets/optimized/founder.jpg";
import { useNavigate } from "react-router-dom";
import {
  Target,
  ShieldCheck,
  Users,
  Eye,
  HardHat,
  Leaf,
  Settings,
  Lightbulb,
  Star,
} from "lucide-react";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* HERO SECTION */}
      <div className="bg-[#002853] pt-12 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-4 md:py-5 relative z-10">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold">
              About <span className="text-orange-500">Us</span>
            </h1>

            <p className="text-gray-200 mt-2 max-w-lg mx-auto text-xs md:text-sm">
              Aditherm Technologies LLP is a new-age industrial automation
              company focused on delivering smart, reliable and efficient
              solutions.
            </p>
          </div>

          <div className="mt-6 text-sm text-gray-200">
            Home <span className="text-orange-500">{">"}</span>{" "}
            <span className="text-orange-500">About Us</span>
          </div>
        </div>

        {/* Image */}
        <div className="absolute top-0 right-0 h-full w-[40%] hidden md:block">
          <img
            src={headImg}
            className="h-full w-full object-cover object-right opacity-35"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#002853] via-[#002853]/95 to-transparent"></div>
      </div>

      {/* ABOUT STORY */}
      <div className="bg-gray-100 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* LEFT IMAGE */}
            <div className="md:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src={aboutComImg}
                  alt="About"
                  className="w-full h-[295px] md:h-[365px] object-cover"
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="md:w-1/2">
              <p className="text-orange-500 text-sm font-semibold mb-1">
                OUR STORY
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
                Built on Passion. <br /> Driven by Purpose.
              </h2>
              <div className="mt-auto">
                <div className="w-10 h-1 bg-orange-500 mt-2 rounded"></div>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm mt-4 leading-relaxed">
                Aditherm Technologies LLP, established in 2026, is a visionary
                team of engineers supported by strong leadership with extensive
                experience in industrial automation solutions. We are committed
                to simplifying complex industrial processes through innovative
                technology, quality engineering, and customer-focused solutions.
              </p>

              <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                Our core strength lies in delivering reliable, efficient, and
                optimized solutions tailored to a wide range of industrial
                applications. By understanding each customer’s unique
                requirements, we provide solutions that enhance operational
                efficiency, improve performance, and ensure long-term
                sustainability.
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-6 mt-4">
                {/* Innovative */}
                <div className="flex items-center gap-2">
                  <Target className="text-orange-500 w-5 h-5" />
                  <p className="text-sm font-medium text-gray-700">
                    Innovative Solutions
                  </p>
                </div>

                {/* Reliable */}
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-orange-500 w-5 h-5" />
                  <p className="text-sm font-medium text-gray-700">
                    Reliable Systems
                  </p>
                </div>

                {/* Customer */}
                <div className="flex items-center gap-2">
                  <Users className="text-orange-500 w-5 h-5" />
                  <p className="text-sm font-medium text-gray-700">
                    Customer Focused
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MISSION & VISION */}
      <div className="bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#FF5200] via-[#FF6A1A] to-[#E64A00] rounded-2xl shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* MISSION */}
              <div className="flex-1 px-6 py-6">
                {/* Title + Line */}
                <div className="mb-3">
                  <p className="text-white/80 text-xs font-semibold">
                    OUR MISSION
                  </p>
                  <div className="w-10 h-[2px] bg-white/80 mt-1"></div>
                </div>

                {/* Icon + Text */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Target className="text-white w-5 h-5" />
                  </div>

                  <p className="text-sm text-white leading-relaxed">
                    To empower industries with smart automation solutions that
                    improve productivity, safety and efficiency through advanced
                    technology and expert service.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block h-12 w-px bg-white/30"></div>

              {/* VISION */}
              <div className="flex-1 px-6 py-6">
                {/* Title + Line */}
                <div className="mb-3">
                  <p className="text-white/80 text-xs font-semibold">
                    OUR VISION
                  </p>
                  <div className="w-10 h-[2px] bg-white/80 mt-1"></div>
                </div>

                {/* Icon + Text */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Eye className="text-white w-5 h-5" />
                  </div>

                  <p className="text-sm text-white leading-relaxed">
                    To become a leading name in industrial automation by
                    delivering cutting-edge, dependable and cost-effective
                    control solutions to achieve profitable growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OUR VALUES */}
      <div className="bg-gray-100 py-6 md:py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-orange-500 text-sm font-semibold mb-2">
            OUR VALUES
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            The Principles That Define Us
          </h2>
          <div className="w-16 h-[2px] bg-orange-500 mx-auto mt-3 mb-10"></div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* CARD 1 */}
            <div className="bg-[#002853] rounded-xl p-6 shadow-md text-center">
              <div className="bg-white/10 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4">
                <Target className="text-white w-6 h-6" />
              </div>
              <h3 className="text-white font-semibold mb-2">Innovation</h3>
              <p className="text-white/80 text-sm">
                We embrace new technologies and ideas to deliver smart and
                future-ready solutions.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#002853] rounded-xl p-6 shadow-md text-center">
              <div className="bg-white/10 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4">
                <ShieldCheck className="text-white w-6 h-6" />
              </div>
              <h3 className="text-white font-semibold mb-2">Reliability</h3>
              <p className="text-white/80 text-sm">
                We stand by our commitment to quality, precision and consistent
                performance.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#002853] rounded-xl p-6 shadow-md text-center">
              <div className="bg-white/10 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4">
                <Users className="text-white w-6 h-6" />
              </div>
              <h3 className="text-white font-semibold mb-2">Integrity</h3>
              <p className="text-white/80 text-sm">
                We operate with transparency, respect and honesty in every
                partnership.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="bg-[#002853] rounded-xl p-6 shadow-md text-center">
              <div className="bg-white/10 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4">
                <HardHat className="text-white w-6 h-6" />
              </div>
              <h3 className="text-white font-semibold mb-2">Safety</h3>
              <p className="text-white/80 text-sm">
                We prioritize safety in every solution to protect people and
                processes.
              </p>
            </div>

            {/* CARD 5 */}
            <div className="bg-[#002853] rounded-xl p-6 shadow-md text-center">
              <div className="bg-white/10 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4">
                <Leaf className="text-white w-6 h-6" />
              </div>
              <h3 className="text-white font-semibold mb-2">Sustainability</h3>
              <p className="text-white/80 text-sm">
                We design solutions that promote efficiency and a sustainable
                future.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* FOUNDER SECTION */}
      {/* <div className="bg-gray-100 py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-md py-4 md:py-8 px-6 md:px-10 flex flex-col md:flex-row items-center gap-8">
            
            <div className="md:w-[30%] w-full">
              <div className="rounded-xl overflow-hidden">
                <img
                  src={founderImg}
                  alt="Founder"
                  className="w-full h-[280px] md:h-[320px] object-cover"
                />
              </div>
            </div>

            
            <div className="md:w-[70%] w-full">
              
              <h2 className="text-2xl md:text-3xl font-bold text-[#002853]">
                Mr. Abhay Deore
              </h2>

              
              <p className="text-orange-500 text-sm font-semibold mt-1">
                Founder & CEO
              </p>

              
              <p className="text-gray-700 text-sm mt-4 leading-relaxed">
                With a strong foundation in engineering and a passion for
                automation, Mr. Abhay Deore established Aditherm Technologies
                LLP in 2026.
              </p>

              <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                His vision is to create impactful automation solutions that help
                industries achieve operational excellence through innovation and
                reliability.
              </p>

              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <Settings className="text-orange-500 w-4 h-4" />
                  </div>
                  <p className="text-sm text-gray-700">
                    Expertise in industrial automation and control systems
                  </p>
                </div>

                
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <Lightbulb className="text-orange-500 w-4 h-4" />
                  </div>
                  <p className="text-sm text-gray-700">
                    Focus on quality, innovation and continuous improvement
                  </p>
                </div>

                
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <Star className="text-orange-500 w-4 h-4" />
                  </div>
                  <p className="text-sm text-gray-700">
                    Committed to building long-term partnerships and trust
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* CTA */}
      <div className="border-b border-gray-700 bg-[#002853] px-4 md:px-6 py-4 md:py-10 flex flex-col md:flex-row items-center justify-between text-white">
        <div className="mb-4 md:mb-0">
          <h3 className="text-md md:text-lg font-semibold">
            Looking for a Solution for Your Industry?
          </h3>
          <p className="text-gray-200 text-sm mt-1">
            Our experts are ready to understand your requirements and provide
            the best solution.
          </p>
        </div>

        <button
          className="bg-orange-500 text-white font-semibold hover:bg-gray-200 px-5 py-2 rounded-md"
          onClick={() => navigate("/contact")}
        >
          Contact Us →
        </button>
      </div>
      <CTASection />
      <Footer />
    </div>
  );
};

export default About;
