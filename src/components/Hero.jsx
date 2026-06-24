import heroImg from "../assets/optimized/cover.webp";
import { FaCheckCircle, FaCog } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#002853] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        {/* LEFT */}
        <div className="w-full md:w-[49%] px-6 md:px-16 pt-10 md:pt-12">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            <span className="whitespace-nowrap">Industrial Automation</span>

            <span className="text-orange-500 block mt-2 font-bold">
              Solutions
            </span>
          </h1>

          {/* Text */}
          <p className="mt-4 text-gray-300 text-sm sm:text-base">
            Reliable. Efficient. Optimized.
          </p>
          <p className="text-gray-300 text-sm sm:text-base">
            Empowering industries with smart automation.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              className="bg-orange-500 px-5 py-2 rounded-md hover:bg-orange-600 text-sm"
              onClick={() => navigate("/offerings")}
            >
              Solution Offerings →
            </button>

            {/* <button
              className="border border-white px-5 py-2 rounded-md hover:bg-white hover:text-black text-sm"
              onClick={() => navigate("/offerings")}
            >
              Solution Offerings →
            </button> */}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-[51%] relative mt-8 md:mt-0 flex justify-center md:justify-end">
          {/* MOBILE → NORMAL IMAGE */}
          <div className="w-full md:hidden">
            <img
              src={heroImg}
              alt="hero"
              className="w-full h-[250px] object-cover"
            />
          </div>

          {/* DESKTOP → CLIPPED IMAGE */}
          <div
            className="hidden md:block w-full"
            style={{
              clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 25% 77%, 0% 85%)",
            }}
          >
            <img
              src={heroImg}
              alt="hero"
              className="w-full h-[410px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="max-w-7xl mx-auto mt-8 md:-mt-4 px-6 md:px-16 pb-10 flex flex-col md:flex-row gap-6">
        <div className="flex items-start gap-3">
          <FaCheckCircle className="text-orange-500 text-2xl mt-1" />
          <div>
            <h3 className="font-semibold text-sm sm:text-base">Reliable</h3>
            <p className="text-gray-300 text-xs sm:text-sm">
              Solutions you can trust
            </p>
          </div>
        </div>

        <div className="hidden md:block w-px h-10 bg-gray-600 mx-4"></div>

        <div className="flex items-start gap-3">
          <FaCog className="text-orange-500 text-2xl mt-1" />
          <div>
            <h3 className="font-semibold text-sm sm:text-base">Efficient</h3>
            <p className="text-gray-300 text-xs sm:text-sm">
              Optimized for performance
            </p>
          </div>
        </div>

        <div className="hidden md:block w-px h-10 bg-gray-600 mx-4"></div>

        <div className="flex items-start gap-3">
          <FiTrendingUp className="text-orange-500 text-2xl mt-1" />
          <div>
            <h3 className="font-semibold text-sm sm:text-base">Optimized</h3>
            <p className="text-gray-300 text-xs sm:text-sm">
              Built for better results
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
