// import {
//   FaIndustry,
//   FaGasPump,
//   FaCar,
//   FaBolt,
//   FaTshirt,
//   FaFlask,
//   FaBuilding,
// } from "react-icons/fa";
// import { MdFastfood } from "react-icons/md";
// import { useNavigate } from "react-router-dom";

// const industries = [
//   { icon: <FaIndustry />, name: "Metal" },
//   { icon: <FaGasPump />, name: "Oil & Gas" },
//   { icon: <FaCar />, name: "Automobile" },
//   { icon: <FaBolt />, name: "Power" },
//   { icon: <FaBuilding />, name: "Infra" },
//   { icon: <FaTshirt />, name: "Textile" },
//   { icon: <FaFlask />, name: "Pharma" },
//   { icon: <MdFastfood />, name: "Food & Beverages" },
// ];

// const IndustriesSection = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-gray-100 py-12">
//       <div className="max-w-7xl mx-auto px-6 md:px-8">
//         {/* ORANGE CARD */}
//         <div className="bg-gradient-to-r from-[#FF5200] via-[#FF6A1A] to-[#E64A00] rounded-2xl shadow-md py-8 px-6">
//           {/* Heading */}
//           <div className="text-center">
//             <p className="text-white tracking-wide font-semibold text-xs sm:text-sm">
//               INDUSTRIES WE SERVE
//             </p>

//             <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mt-2">
//               Serving Diverse Industries
//             </h2>
//           </div>

//           {/* Industries Grid */}
//           <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-y-6 gap-x-4">
//             {industries.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center justify-center py-3 rounded-lg transition duration-300 hover:scale-105 hover:bg-white/10"
//               >
//                 {/* ICON */}
//                 <div className="bg-white/15 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full mb-2 backdrop-blur-sm">
//                   <div className="text-white text-lg sm:text-xl">
//                     {item.icon}
//                   </div>
//                 </div>

//                 {/* TEXT */}
//                 <p className="text-white text-xs sm:text-sm font-medium text-center">
//                   {item.name}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-10 flex justify-center">
//           <button
//             onClick={() => navigate("/industries")}
//             className="text-gray-700 font-medium text-sm hover:underline"
//           >
//             View All Industries →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IndustriesSection;

import {
  FaIndustry,
  FaGasPump,
  FaCar,
  FaBolt,
  FaTshirt,
  FaFlask,
  FaBuilding,
} from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const industries = [
  { icon: <FaIndustry />, name: "Metal" },
  { icon: <FaGasPump />, name: "Oil & Gas" },
  { icon: <FaCar />, name: "Automobile" },
  { icon: <FaBolt />, name: "Power" },
  { icon: <FaBuilding />, name: "Infra" },
  { icon: <FaTshirt />, name: "Textile" },
  { icon: <FaFlask />, name: "Pharma" },
  { icon: <MdFastfood />, name: "Food & Beverages" },
];

const IndustriesSection = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-gray-100 pt-10 pb-16 md:pt-12 md:pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* ORANGE CARD */}
        <div className="bg-gradient-to-r from-[#FF5200] via-[#FF6A1A] to-[#E64A00] rounded-2xl shadow-md py-10 px-6 md:px-8">
          {/* Heading */}
          <div className="text-center">
            <p className="text-white tracking-wide font-semibold text-xs sm:text-sm">
              INDUSTRIES WE SERVE
            </p>

            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mt-2">
              Serving Diverse Industries
            </h2>
          </div>

          {/* Industries Grid */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {industries.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center py-4 rounded-lg transition duration-300 hover:scale-105 hover:bg-white/10"
              >
                {/* ICON */}
                <div className="bg-white/15 w-12 h-12 flex items-center justify-center rounded-full mb-3 backdrop-blur-sm">
                  <div className="text-white text-xl">{item.icon}</div>
                </div>

                {/* TEXT */}
                <p className="text-white text-xs sm:text-sm font-medium text-center leading-tight">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => navigate("/industries")}
            className="text-gray-700 font-medium text-sm hover:underline"
          >
            View All Industries →
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;
