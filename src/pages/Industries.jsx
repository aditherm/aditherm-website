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

const Industries = () => {
  const navigate = useNavigate();
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

          <div className="mt-2 text-sm text-gray-200">
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
          <div
            className="bg-gradient-to-b 
from-[#002853] 
via-[#0b1f4a] 
to-[#0b0f3f] py-12 md:py-16 px-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
              {/* CARD 1 */}
              <div className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer">
                {/* IMAGE */}
                <img
                  src={metalImg}
                  alt="Metal"
                  className="w-full h-[220px] object-cover"
                  loading="lazy"
                />

                {/* DARK OVERLAY (default) */}
                <div className="absolute inset-0 bg-black/10"></div>

                {/* TITLE */}
                <div
                  className="absolute bottom-4 left-4 text-white z-10 
                transition-all duration-300 
                group-hover:opacity-0 group-hover:translate-y-2"
                >
                  <h3 className="text-lg font-semibold">Metal Industry</h3>
                </div>

                {/* HOVER FLAP */}
                <div
                  className="absolute inset-0 bg-gradient-to-t 
bg-gradient-to-t from-[#ff5400]/95 to-[#ff5400]/70
                        opacity-0 group-hover:opacity-100 
                        translate-y-full group-hover:translate-y-0
                        transition-all duration-500 ease-in-out
                        flex flex-col justify-center p-5 text-white"
                >
                  <h3 className="text-white text-lg font-semibold mb-6">
                    Metal Industry
                  </h3>

                  <ul className="text-white/90 text-sm space-y-1">
                    <li>• Heat treatment systems</li>
                    <li>• Industrial burners</li>
                    <li>• Temperature control</li>
                    <li>• Welding solutions</li>
                  </ul>
                </div>
              </div>

              {/* CARD 2 - OIL & GAS */}
              <div className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer">
                {/* IMAGE */}
                <img
                  src={oilGasImg}
                  alt="Oil & Gas"
                  className="w-full h-[220px] object-cover"
                  loading="lazy"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/10"></div>

                {/* BOTTOM TITLE */}
                <div
                  className="absolute bottom-4 left-4 text-white z-10 
                  transition-all duration-300 
                  group-hover:opacity-0 group-hover:translate-y-2"
                >
                  <h3 className="text-lg font-semibold">Oil & Gas</h3>
                </div>

                {/* HOVER FLAP */}
                <div
                  className="absolute inset-0 
                  bg-gradient-to-t from-[#ff5400]/95 to-[#ff5400]/70 
                  opacity-0 
                  translate-y-full 
                  group-hover:translate-y-0 group-hover:opacity-100
                  transition-all duration-500 ease-in-out
                  flex flex-col justify-center p-5 text-white"
                >
                  <h3 className="text-lg font-semibold mb-6">Oil & Gas</h3>

                  <ul className="text-sm space-y-1">
                    <li>• Gas leak detection systems</li>
                    <li>• Flame detection & safety</li>
                    <li>• Pressure & flow monitoring</li>
                    <li>• Valve automation & regulators</li>
                  </ul>
                </div>
              </div>

              {/* CARD 3 - AUTOMOBILE */}
              <div className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer">
                {/* IMAGE */}
                <img
                  src={automobileImg}
                  alt="Automobile"
                  className="w-full h-[220px] object-cover"
                  loading="lazy"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/10"></div>

                {/* BOTTOM TITLE */}
                <div
                  className="absolute bottom-4 left-4 text-white z-10 
                  transition-all duration-300 
                  group-hover:opacity-0 group-hover:translate-y-2"
                >
                  <h3 className="text-lg font-semibold">Automobile</h3>
                </div>

                {/* HOVER FLAP */}
                <div
                  className="absolute inset-0 
                  bg-gradient-to-t from-[#ff5400]/95 to-[#ff5400]/70 
                  opacity-0 
                  translate-y-full 
                  group-hover:translate-y-0 group-hover:opacity-100
                  transition-all duration-500 ease-in-out
                  flex flex-col justify-center p-5 text-white"
                >
                  <h3 className="text-lg font-semibold mb-6">Automobile</h3>

                  <ul className="text-sm space-y-1">
                    <li>• PLC-based automation systems</li>
                    <li>• Assembly line control</li>
                    <li>• Panel instruments & controllers</li>
                    <li>• Welding & fabrication solutions</li>
                  </ul>
                </div>
              </div>

              {/* CARD 4 - POWER */}
              <div className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer">
                {/* IMAGE */}
                <img
                  src={powerImg}
                  alt="Power"
                  className="w-full h-[220px] object-cover"
                  loading="lazy"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/10"></div>

                {/* BOTTOM TITLE */}
                <div
                  className="absolute bottom-4 left-4 text-white z-10 
                  transition-all duration-300 
                  group-hover:opacity-0 group-hover:translate-y-2"
                >
                  <h3 className="text-lg font-semibold">Power</h3>
                </div>

                {/* HOVER FLAP */}
                <div
                  className="absolute inset-0 
                  bg-gradient-to-t from-[#ff5400]/95 to-[#ff5400]/70 
                  opacity-0 
                  translate-y-full 
                  group-hover:translate-y-0 group-hover:opacity-100
                  transition-all duration-500 ease-in-out
                  flex flex-col justify-center p-5 text-white"
                >
                  <h3 className="text-lg font-semibold mb-6">Power</h3>

                  <ul className="text-sm space-y-1">
                    <li>• SCADA & DCS systems</li>
                    <li>• Panel instruments & controllers</li>
                    <li>• Power monitoring solutions</li>
                    <li>• Data logging & process control</li>
                  </ul>
                </div>
              </div>

              {/* CARD 5 - INFRASTRUCTURE */}
              <div className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer">
                {/* IMAGE */}
                <img
                  src={infraImg}
                  alt="Infrastructure"
                  className="w-full h-[220px] object-cover"
                  loading="lazy"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/10"></div>

                {/* BOTTOM TITLE */}
                <div
                  className="absolute bottom-4 left-4 text-white z-10 
                  transition-all duration-300 
                  group-hover:opacity-0 group-hover:translate-y-2"
                >
                  <h3 className="text-lg font-semibold">Infrastructure</h3>
                </div>

                {/* HOVER FLAP */}
                <div
                  className="absolute inset-0 
                  bg-gradient-to-t from-[#ff5400]/95 to-[#ff5400]/70 
                  opacity-0 
                  translate-y-full 
                  group-hover:translate-y-0 group-hover:opacity-100
                  transition-all duration-500 ease-in-out
                  flex flex-col justify-center p-5 text-white"
                >
                  <h3 className="text-lg font-semibold mb-6">Infrastructure</h3>

                  <ul className="text-sm space-y-1">
                    <li>• Electrical & control panels</li>
                    <li>• SCADA monitoring systems</li>
                    <li>• Power distribution solutions</li>
                    <li>• Safety & automation systems</li>
                  </ul>
                </div>
              </div>

              {/* CARD 6 - TEXTILE */}
              <div className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer">
                {/* IMAGE */}
                <img
                  src={textileImg}
                  alt="Textile"
                  className="w-full h-[220px] object-cover"
                  loading="lazy"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/10"></div>

                {/* BOTTOM TITLE */}
                <div
                  className="absolute bottom-4 left-4 text-white z-10 
                  transition-all duration-300 
                  group-hover:opacity-0 group-hover:translate-y-2"
                >
                  <h3 className="text-lg font-semibold">Textile</h3>
                </div>

                {/* HOVER FLAP */}
                <div
                  className="absolute inset-0 
                  bg-gradient-to-t from-[#ff5400]/95 to-[#ff5400]/70 
                  opacity-0 
                  translate-y-full 
                  group-hover:translate-y-0 group-hover:opacity-100
                  transition-all duration-500 ease-in-out
                  flex flex-col justify-center p-5 text-white"
                >
                  <h3 className="text-lg font-semibold mb-6">Textile</h3>

                  <ul className="text-sm space-y-1">
                    <li>• Temperature & humidity control</li>
                    <li>• Process instrumentation systems</li>
                    <li>• Panel-based control solutions</li>
                    <li>• Energy-efficient automation</li>
                  </ul>
                </div>
              </div>

              {/* CARD 7 - PHARMACHEM */}
              <div className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer">
                {/* IMAGE */}
                <img
                  src={pharmaImg}
                  alt="Pharma & Chemical"
                  className="w-full h-[220px] object-cover"
                  loading="lazy"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/10"></div>

                {/* BOTTOM TITLE */}
                <div
                  className="absolute bottom-4 left-4 text-white z-10 
                  transition-all duration-300 
                  group-hover:opacity-0 group-hover:translate-y-2"
                >
                  <h3 className="text-lg font-semibold">Pharma & Chemical</h3>
                </div>

                {/* HOVER FLAP */}
                <div
                  className="absolute inset-0 
                  bg-gradient-to-t from-[#ff5400]/95 to-[#ff5400]/70 
                  opacity-0 
                  translate-y-full 
                  group-hover:translate-y-0 group-hover:opacity-100
                  transition-all duration-500 ease-in-out
                  flex flex-col justify-center p-5 text-white"
                >
                  <h3 className="text-lg font-semibold mb-6">
                    Pharma & Chemical
                  </h3>

                  <ul className="text-sm space-y-1">
                    <li>• Analytical & process instruments</li>
                    <li>• Pressure & flow monitoring</li>
                    <li>• Data logging & control systems</li>
                    <li>• Leak detection & safety systems</li>
                  </ul>
                </div>
              </div>

              {/* CARD 8 - FOOD & BEVERAGE */}
              <div className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer">
                {/* IMAGE */}
                <img
                  src={foodBeveragesImg}
                  alt="Food & Beverage"
                  className="w-full h-[220px] object-cover"
                  loading="lazy"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/10"></div>

                {/* BOTTOM TITLE */}
                <div
                  className="absolute bottom-4 left-4 text-white z-10 
                  transition-all duration-300 
                  group-hover:opacity-0 group-hover:translate-y-2"
                >
                  <h3 className="text-lg font-semibold">Food & Beverage</h3>
                </div>

                {/* HOVER FLAP */}
                <div
                  className="absolute inset-0 
                  bg-gradient-to-t from-[#ff5400]/95 to-[#ff5400]/70 
                  opacity-0 
                  translate-y-full 
                  group-hover:translate-y-0 group-hover:opacity-100
                  transition-all duration-500 ease-in-out
                  flex flex-col justify-center p-5 text-white"
                >
                  <h3 className="text-lg font-semibold mb-6">
                    Food & Beverage
                  </h3>

                  <ul className="text-sm space-y-1">
                    <li>• Flow & temperature instrumentation</li>
                    <li>• Process automation systems</li>
                    <li>• Control valves & regulators</li>
                    <li>• Safety & monitoring solutions</li>
                  </ul>
                </div>
              </div>
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
