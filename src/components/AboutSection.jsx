// import aboutImg from "../assets/optimized/about.webp";
// import { FaUsers, FaCog, FaShieldAlt, FaHeadphones } from "react-icons/fa";

// const AboutSection = () => {
//   return (
//     <div className="w-full bg-white-100 py-12">
//       <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row items-center gap-10">
//         {/* Left Image Section */}
//         <div className="w-full md:w-[40%] relative">
//           <div className="absolute -bottom-4 -left-4 w-full h-full bg-orange-500 rounded-2xl"></div>
//           <img
//             src={aboutImg}
//             alt="about"
//             className="relative  w-full rounded-xl object-cover shadow-lg"
//           />
//         </div>
//         {/* Right Section */}
//         <div className="w-full md:w-[60%]">
//           {/* Section Title */}
//           <p className="text-orange-500 font-semibold tracking-wide text-sm">
//             ABOUT US
//           </p>

//           {/* Main Title */}
//           <h2 className="text-2xl md:text-3xl mt-2 font-bold leading-tight">
//             Smart Control,
//             <br />
//             <span className="text-orange-500">Reliable</span> Automation.
//           </h2>

//           {/* Description section */}
//           <p className="text-gray-700 mt-5">
//             We are a team of experienced automation professionals delivering
//             application-based, optimized, and reliable solutions to meet the
//             evolving needs of modern industries.
//           </p>

//           {/* Qualities */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 text-center">
//             <div className="flex flex-col items-center gap-2">
//               <FaUsers className="text-[#002853] text-3xl" />
//               <p className="text-sm font-semibold leading-tight">
//                 Experienced <br /> Engineers
//               </p>
//             </div>

//             <div className="flex flex-col items-center gap-2">
//               <FaCog className="text-[#002853] text-3xl" />
//               <p className="text-sm font-semibold leading-tight">
//                 Optimized <br /> Solutions
//               </p>
//             </div>

//             <div className="flex flex-col items-center gap-2">
//               <FaShieldAlt className="text-[#002853] text-3xl" />
//               <p className="text-sm font-semibold leading-tight">
//                 Reliable <br /> Systems
//               </p>
//             </div>

//             <div className="flex flex-col items-center gap-2">
//               <FaHeadphones className="text-[#002853] text-3xl" />
//               <p className="text-sm font-semibold leading-tight">
//                 Customer <br /> Focus
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;

import aboutImg from "../assets/optimized/about.webp";
import { FaUsers, FaCog, FaShieldAlt, FaHeadphones } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="w-full bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Left Image Section */}
        <div className="w-full md:w-[40%] relative">
          <div className="absolute -bottom-3 -left-3 w-full h-full bg-orange-500 rounded-2xl"></div>
          <img
            src={aboutImg}
            alt="about"
            className="relative w-full rounded-xl object-cover shadow-lg"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[60%] text-center md:text-left">
          {/* Section Title */}
          <p className="text-orange-500 font-semibold tracking-wide text-sm">
            ABOUT US
          </p>

          {/* Main Title */}
          <h2 className="text-2xl md:text-3xl mt-2 font-bold leading-tight">
            Smart Control,
            <br />
            <span className="text-orange-500">Reliable</span> Automation.
          </h2>

          {/* Description */}
          <p className="text-gray-700 mt-5 mb-4 text-sm md:text-base leading-relaxed">
            We are a team of experienced automation professionals delivering
            application-based, optimized, and reliable solutions to meet the
            evolving needs of modern industries.
          </p>

          {/* Qualities */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            <div className="flex flex-col items-center gap-2">
              <FaUsers className="text-[#002853] text-2xl md:text-3xl" />
              <p className="text-xs md:text-sm font-semibold leading-tight text-center">
                Experienced <br /> Engineers
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <FaCog className="text-[#002853] text-2xl md:text-3xl" />
              <p className="text-xs md:text-sm font-semibold leading-tight text-center">
                Optimized <br /> Solutions
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <FaShieldAlt className="text-[#002853] text-2xl md:text-3xl" />
              <p className="text-xs md:text-sm font-semibold leading-tight text-center">
                Reliable <br /> Systems
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <FaHeadphones className="text-[#002853] text-2xl md:text-3xl" />
              <p className="text-xs md:text-sm font-semibold leading-tight text-center">
                Customer <br /> Focus
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
