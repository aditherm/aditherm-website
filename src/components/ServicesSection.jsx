import {
  FaThermometerHalf,
  FaMicrochip,
  FaThLarge,
  FaExclamationTriangle,
  FaTools,
  FaFire,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-gray-100 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
        {/* Section heading */}
        <p className="text-orange-500 font-semibold text-sm tracking-wide">
          OUR SERVICES
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mt-2">
          Solutions Tailored to{" "}
          <span className="text-orange-500">Your Needs</span>
        </h2>

        {/* Services cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mt-12 gap-4">
          {/* CARD */}
          {[
            {
              icon: <FaThermometerHalf />,
              title: "Instrumentation",
              desc: "Temperature, Pressure, Flow & Level measurement solutions along with valves, actuators and analytical instruments.",
            },
            {
              icon: <FaThLarge />,
              title: "Panel Instruments",
              desc: "Indicators, PID controllers, signal conditioners, data loggers and power supplies for precise panel monitoring.",
            },
            {
              icon: <FaFire />,
              title: "Heat Treatment & Combustion",
              desc: "Industrial burners, flame sensors, gas systems and complete burner control solutions for combustion processes.",
            },
            {
              icon: <FaMicrochip />,
              title: "Automation Solutions",
              desc: "PLC, DCS, HMI & SCADA based modular automation solutions for efficient and scalable control systems.",
            },
            {
              icon: <FaExclamationTriangle />,
              title: "Gas & Flame Detection",
              desc: "Portable and fixed gas detectors, flame detection systems and calibration solutions for industrial safety.",
            },
            {
              icon: <FaTools />,
              title: "Welding Equipment",
              desc: "Arc, TIG, plasma and submerged welding machines along with gas cutting and industrial welding solutions.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#002853] rounded-xl p-5 shadow flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.03]"
            >
              {/* ICON */}
              <div className="mb-4 text-orange-500 text-2xl">{item.icon}</div>

              {/* TITLE */}
              <h3 className="text-white font-bold min-h-[56px] leading-tight text-sm md:text-base">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-200 text-xs md:text-sm leading-relaxed mt-2 flex-grow">
                {item.desc}
              </p>

              {/* LINE */}
              <div className="mt-6">
                <div className="w-10 h-1 bg-orange-500 rounded"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => navigate("/services")}
            className="text-orange-500 font-medium text-sm hover:underline"
          >
            View All Services →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
