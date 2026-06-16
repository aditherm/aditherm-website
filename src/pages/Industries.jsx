import headImg from "../assets/optimized/head.webp";
import Navbar from "../components/Navbar";
import CTASection from "../components/CTASection";
import metalImg from "../assets/optimized/metalind.webp";
import oilGasImg from "../assets/optimized/oilAndGas.webp";
import automobileImg from "../assets/optimized/automobile.webp";
import powerImg from "../assets/optimized/power.webp";
import infraImg from "../assets/optimized/infra.webp";
import textileImg from "../assets/optimized/textileInd.webp";
import pharmaImg from "../assets/optimized/pharma.webp";
import foodBeveragesImg from "../assets/optimized/foodAndBev.webp";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Industries = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);
  const industriesData = [
    {
      title: "Metal Industry",
      image: metalImg,
      items: [
        "Heat treatment systems",
        "Industrial burners",
        "Temperature control",
        "Welding solutions",
      ],
    },
    {
      title: "Oil & Gas",
      image: oilGasImg,
      items: [
        "Gas leak detection systems",
        "Flame detection & safety",
        "Pressure & flow monitoring",
        "Valve automation & regulators",
      ],
    },
    {
      title: "Automobile",
      image: automobileImg,
      items: [
        "PLC-based automation systems",
        "Assembly line control",
        "Panel instruments & controllers",
        "Welding & fabrication solutions",
      ],
    },
    {
      title: "Power",
      image: powerImg,
      items: [
        "SCADA & DCS systems",
        "Panel instruments & controllers",
        "Power monitoring solutions",
        "Data logging & process control",
      ],
    },
    {
      title: "Infrastructure",
      image: infraImg,
      items: [
        "Electrical & control panels",
        "SCADA monitoring systems",
        "Power distribution solutions",
        "Safety & automation systems",
      ],
    },
    {
      title: "Textile",
      image: textileImg,
      items: [
        "Temperature & humidity control",
        "Process instrumentation systems",
        "Panel-based control solutions",
        "Energy-efficient automation",
      ],
    },
    {
      title: "Pharma & Chemical",
      image: pharmaImg,
      items: [
        "Analytical & process instruments",
        "Pressure & flow monitoring",
        "Data logging & control systems",
        "Leak detection & safety systems",
      ],
    },
    {
      title: "Food & Beverage",
      image: foodBeveragesImg,
      items: [
        "Flow & temperature instrumentation",
        "Process automation systems",
        "Control valves & regulators",
        "Safety & monitoring solutions",
      ],
    },
  ];
  return (
    <div>
      {/* <Navbar /> */}
      {/* HERO SECTION */}
      <div className="bg-[#002853] pt-12 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-4 md:py-5 relative z-10">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-orange-500">
              Industries <span className="text-white">We Serve</span>
            </h1>

            <p className="text-gray-200 mt-2 max-w-lg mx-auto text-xs md:text-sm">
              Empowering industries with innovative and reliable solutions{" "}
              <br /> that drive efficiency, safety and growth.
            </p>
          </div>

          <div className="mt-6 text-sm text-gray-200">
            Home <span className="text-orange-500">{">"}</span>{" "}
            <span className="text-orange-500">Industries</span>
          </div>
        </div>

        {/* Image */}
        <div className="absolute top-0 right-0 h-full w-[40%] hidden md:block">
          <img
            src={headImg}
            className="h-full w-full object-cover object-right opacity-35"
          />
        </div>

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002853] via-[#002853]/95 to-transparent"></div>
      </div>
      {/* Industries Section */}
      <div className="bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-6">
          {/*Card Grid */}
          <div className="bg-gradient-to-b from-[#002853] via-[#0b1f4a] to-[#0b0f3f] py-12 md:py-16 px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
              {industriesData.map((industry, index) => (
                <div
                  key={index}
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer active:scale-[0.98] transition"
                >
                  {/* IMAGE */}
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-[220px] object-cover"
                    loading="lazy"
                  />

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-black/10"></div>

                  {/* TITLE */}
                  <div
                    className={`absolute bottom-4 left-4 text-white z-10 transition-all duration-300 
  ${
    activeIndex === index
      ? "opacity-0 translate-y-2"
      : "opacity-100 translate-y-0 group-hover:opacity-0 group-hover:translate-y-2"
  }`}
                  >
                    <h3 className="text-lg font-semibold">{industry.title}</h3>
                  </div>

                  {/* HOVER FLAP */}
                  <div
                    className={`absolute inset-0 
bg-gradient-to-t from-[#ff5400]/95 to-[#ff5400]/70 
transition-all duration-500 ease-in-out
flex flex-col justify-center p-5 text-white

${
  activeIndex === index
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0"
}`}
                  >
                    <h3 className="text-lg font-semibold mb-6">
                      {industry.title}
                    </h3>

                    <ul className="text-sm space-y-1">
                      {industry.items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
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

export default Industries;
