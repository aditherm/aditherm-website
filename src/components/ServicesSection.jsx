// import {
//   FaThermometerHalf,
//   FaMicrochip,
//   FaThLarge,
//   FaExclamationTriangle,
//   FaTools,
//   FaFire,
// } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const ServicesSection = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="w-full bg-gray-100 py-12">
//       <div className="w-full px-6 md:px-8 mx-auto text-center">
//         {/* Section heading */}
//         <p className="text-orange-500 font-semibold text-sm tracking-wide">
//           OUR SERVICES
//         </p>
//         <h2 className="text-2xl md:text-3xl font-bold mt-2">
//           Solutions Tailored to{" "}
//           <span className="text-orange-500">Your Needs</span>
//         </h2>

//         {/* Services cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 mt-10 gap-2">
//           {/* Single card */}

//           <div className="bg-[#002853] rounded-xl py-3 px-3 shadow flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
//             {/* ICON */}
//             <div className="mb-5">
//               <FaThermometerHalf className="text-orange-500 text-2xl" />
//             </div>

//             <h3 className="text-white font-bold min-h-[64px] leading-tight">
//               Instrumentation
//             </h3>

//             <p className="text-gray-200 text-[13px] leading-relaxed min-h-[96px]">
//               Temperature, Pressure, Flow & Level measurement solutions along
//               with valves, actuators and analytical instruments.
//             </p>

//             <div className="mt-auto">
//               <div className="w-10 h-1 bg-orange-500 mt-10 rounded"></div>
//             </div>
//           </div>

//           <div className="bg-[#002853] rounded-xl py-3 px-3 shadow flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
//             <div className="mb-5">
//               <FaThLarge className="text-orange-500 text-2xl" />
//             </div>

//             <h3 className="text-white font-bold min-h-[64px] leading-tight">
//               Panel Instruments
//             </h3>

//             <p className="text-gray-200 text-[13px] leading-relaxed min-h-[96px]">
//               Indicators, PID controllers, signal conditioners, data loggers and
//               power supplies for precise panel monitoring.
//             </p>

//             <div className="mt-auto">
//               <div className="w-10 h-1 bg-orange-500 mt-4 rounded"></div>
//             </div>
//           </div>

//           <div className="bg-[#002853] rounded-xl py-3 px-3 shadow flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
//             <div className="mb-5">
//               <FaFire className="text-orange-500 text-2xl" />
//             </div>

//             <h3 className="text-white font-bold min-h-[64px] leading-tight">
//               Heat Treatment & Combustion
//             </h3>

//             <p className="text-gray-200 text-[13px] leading-relaxed min-h-[96px]">
//               Industrial burners, flame sensors, gas systems and complete burner
//               control solutions for combustion processes.
//             </p>

//             <div className="mt-auto">
//               <div className="w-10 h-1 bg-orange-500 mt-4 rounded"></div>
//             </div>
//           </div>

//           <div className="bg-[#002853] rounded-xl py-3 px-3 shadow flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
//             <div className="mb-5">
//               <FaMicrochip className="text-orange-500 text-2xl" />
//             </div>

//             <h3 className="text-white font-bold min-h-[64px] leading-tight">
//               Automation Solutions
//             </h3>

//             <p className="text-gray-200 text-[13px] leading-relaxed min-h-[96px]">
//               PLC, DCS, HMI & SCADA based modular automation solutions for
//               efficient and scalable control systems.
//             </p>

//             <div className="mt-auto">
//               <div className="w-10 h-1 bg-orange-500 mt-4 rounded"></div>
//             </div>
//           </div>

//           <div className="bg-[#002853] rounded-xl py-3 px-3 shadow flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
//             <div className="mb-5">
//               <FaExclamationTriangle className="text-orange-500 text-2xl" />
//             </div>

//             <h3 className="text-white font-bold min-h-[64px] leading-tight">
//               Gas & Flame Detection
//             </h3>

//             <p className="text-gray-200 text-[13px] leading-relaxed min-h-[96px]">
//               Portable and fixed gas detectors, flame detection systems and
//               calibration solutions for industrial safety.
//             </p>

//             <div className="mt-auto">
//               <div className="w-10 h-1 bg-orange-500 mt-4 rounded"></div>
//             </div>
//           </div>

//           <div className="bg-[#002853] rounded-xl py-3 px-3 shadow flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
//             <div className="mb-5">
//               <FaTools className="text-orange-500 text-2xl" />
//             </div>

//             <h3 className="text-white font-bold min-h-[64px] leading-tight">
//               Welding Equipment
//             </h3>

//             <p className="text-gray-200 text-[13px] leading-relaxed min-h-[96px]">
//               Arc, TIG, plasma and submerged welding machines along with gas
//               cutting and industrial welding solutions.
//             </p>

//             <div className="mt-auto">
//               <div className="w-10 h-1 bg-orange-500 mt-4 rounded"></div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-10 flex justify-center">
//           <button
//             onClick={() => navigate("/services")}
//             className="text-orange-500 font-medium text-sm hover:underline"
//           >
//             View All Services →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesSection;

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mt-12 gap-6">
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
