import {
  FaThermometerHalf,
  FaMicrochip,
  FaThLarge,
  FaFire,
  FaTools,
  FaExclamationTriangle,
} from "react-icons/fa";
import { FileText } from "lucide-react";
import headImg from "../assets/optimized/head.webp";
import instrumentationIMG from "../assets/optimized/instrumentation.webp";
import automationIMG from "../assets/optimized/automationSolutions.webp";
import panelIMG from "../assets/optimized/panelInstruments.webp";
import heatIMG from "../assets/optimized/heat.webp";
import gasImg from "../assets/optimized/gas.webp";
import weldingImg from "../assets/optimized/welding.webp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import temperaturePDF from "../pdfs/SmartLine-Temperature-Transmitter-Brochure-2021.pdf";
import pressurePDF from "../pdfs/SmartLine Pressure Transmitter Brochure_R6.pdf";
import heatTreatmentPDF from "../pdfs/Heat Treatment Product overview.pdf";
import analyticalMeasurementPDF from "../pdfs/Gas Chromatograph.pdf";
import valvesPDF from "../pdfs/Valves-General-Catalog.pdf";
import flowPDF from "../pdfs/Gas Flow RPD Meters.pdf";
import CTASection from "../components/CTASection";

const Services = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.sectionId) {
      const section = document.getElementById(location.state.sectionId);

      if (section) {
        const yOffset = -80; // adjust for navbar
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);
  const services = [
    {
      title: "Instrumentation",
      id: "instrumentation",
      description:
        "High-precision instrumentation solutions designed for accurate measurement, reliable monitoring, and improved process efficiency across industrial applications.",
      pdf: null,
      items: [
        { name: "Temperature Measurement", pdf: temperaturePDF },
        { name: "Pressure Measurement", pdf: pressurePDF },
        { name: "Flow Measurement", pdf: flowPDF },
        { name: "Level Measurement" },
        { name: "SMART Handheld Calibrator" },
        { name: "Valves – Manual, Actuated", pdf: valvesPDF },
        { name: "Valves- On Off, Control", pdf: valvesPDF },
        { name: "Valve Actuators", pdf: valvesPDF },
        { name: "Pressure Regulators", pdf: pressurePDF },
        { name: "Analytical Instruments", pdf: analyticalMeasurementPDF },
      ],
      image: instrumentationIMG,
      icon: <FaThermometerHalf className="text-orange-500 text-xl" />,
      bg: "bg-white",
      isDark: false,
      textColor: "text-gray-900",
      reverse: false,
    },

    {
      title: "Panel Instruments",
      id: "panel-instruments",
      description:
        "Comprehensive range of panel instruments for effective monitoring, control, and data recording in industrial processes.",
      pdf: null,
      items: [
        { name: "Panel Indicators" },
        { name: "On Off & PID Controllers" },
        { name: "Signal Conditioners" },
        { name: "Convertors" },
        { name: "Calibrators" },
        { name: "Power Supplies (SMPS)" },
        { name: "Data Recorders" },
        { name: "Data Loggers" },
      ],
      image: panelIMG,
      icon: <FaThLarge className="text-white text-xl" />,
      bg: "bg-orange-500",
      isDark: true,
      textColor: "text-white",
      reverse: true,
    },

    {
      title: "Heat Treatment & Combustion",
      id: "heat-treatment-combustion",
      description:
        "Efficient combustion and heat treatment solutions ensuring optimal performance, energy efficiency, and operational safety.",
      pdf: heatTreatmentPDF,
      items: [
        { name: "Industrial Burners" },
        { name: "Burner Controls" },
        { name: "Flame Sensors" },
        { name: "Gas Filters" },
        { name: "Pressure Regulators" },
        { name: "Solenoid Valves" },
        { name: "Flow Meters" },
        { name: "Gas Valve Trains" },
        { name: "Flame Scanners" },
        { name: "Burner Control Systems" },
      ],
      image: heatIMG,
      icon: <FaFire className="text-orange-500 text-xl" />,
      bg: "bg-white",
      isDark: false,
      textColor: "text-gray-900",
      reverse: false,
    },

    {
      title: "Turnkey Automation Solutions",
      id: "turnkey-automation-solutions",
      description:
        "End-to-end automation solutions tailored to enhance productivity, control, and efficiency through advanced industrial systems.",
      pdf: null,
      items: [
        { name: "Modular Controls – PLC" },
        { name: "DCS Solution" },
        { name: "HMI" },
        { name: "SCADA" },
      ],
      image: automationIMG,
      icon: <FaMicrochip className="text-white text-xl" />,
      bg: "bg-orange-500",
      isDark: true,
      textColor: "text-white",
      reverse: true,
    },

    {
      title: "Gas Leak & Flame Detection",
      id: "gas-leak-flame-detection",
      description:
        "Advanced gas and flame detection systems ensuring safety, compliance, and real-time monitoring in critical environments.",
      pdf: null,
      items: [
        { name: "Portable Gas Detectors" },
        { name: "Online/ Fixed Gas Detector" },
        { name: "Flame Detectors" },
        { name: "Calibration gases" },
        { name: "Leak detection for High Tech & Semiconductor" },
      ],
      image: gasImg,
      icon: <FaExclamationTriangle className="text-orange-500 text-xl" />,
      bg: "bg-white",
      isDark: false,
      textColor: "text-gray-900",
      reverse: false,
    },

    {
      title: "Welding Equipment",
      id: "welding-equipment",
      description:
        "Reliable and high-performance welding solutions for industrial fabrication, maintenance, and precision operations.",
      pdf: null,
      items: [
        { name: "Arc Welding Machines" },
        { name: "Tig Welding machines" },
        { name: "Submerged Arc Welding" },
        { name: "Plasma Welding" },
        { name: "Gas Cutting Products" },
      ],
      image: weldingImg,
      icon: <FaTools className="text-white text-xl" />,
      bg: "bg-orange-500",
      isDark: true,
      textColor: "text-white",
      reverse: true,
    },
  ];
  return (
    <div>
      {/* HERO SECTION */}
      <div className="bg-[#002853] pt-12 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-4 md:py-5 relative z-10">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold">
              Solution <span className="text-orange-500">Offerings</span>
            </h1>

            <p className="text-gray-200 mt-2 max-w-lg mx-auto text-xs md:text-sm">
              Comprehensive automation solutions designed <br />
              to optimize your operations.
            </p>
          </div>

          <div className="mt-6 text-sm text-gray-200">
            Home <span className="text-orange-500">{">"}</span>{" "}
            <span className="text-orange-500">Offerings</span>
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#002853] via-[#002853] to-transparent"></div>
      </div>

      {/* SERVICES SECTION */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-6">
          {services.map((service, index) => (
            <div
              key={index}
              id={`${service.id}`}
              className={`${service.bg} rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row mt-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] active:shadow-lg`}
            >
              {/* LEFT IMAGE */}
              {!service.reverse && (
                <div className="md:w-[40%] p-4">
                  <div className="h-[200px] md:h-[260px] overflow-hidden rounded-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              {/* CONTENT */}
              <div
                className={`md:w-[60%] p-6 md:p-8 flex flex-col justify-center ${service.textColor}`}
              >
                {/* Title */}
                <div className="flex items-center justify-between mb-4">
                  {service.pdf ? (
                    <a
                      href={service.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between mb-4 cursor-pointer hover:text-orange-600 transition"
                    >
                      <div className="flex items-center gap-3">
                        {service.icon}
                        <h2 className="text-lg md:text-xl font-semibold">
                          {service.title}
                        </h2>
                      </div>

                      <FileText className="w-5 h-5 text-orange-500 ml-5" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 mb-4">
                      {service.icon}
                      <h2 className="text-lg md:text-xl font-semibold">
                        {service.title}
                      </h2>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm mb-4">{service.description}</p>

                {/* List */}
                <ul className="text-sm grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6">
                  {service.items.map((item, i) => {
                    const pdfLink = item.pdf;

                    return (
                      <li
                        key={i}
                        className={`flex items-center gap-2 ${
                          pdfLink ? "group cursor-pointer" : ""
                        }`}
                      >
                        <span
                          className={`transition ${
                            pdfLink
                              ? service.isDark
                                ? "group-hover:text-gray-300"
                                : "group-hover:text-orange-500"
                              : ""
                          }`}
                        >
                          • {item.name}
                        </span>

                        {pdfLink && (
                          <a
                            href={pdfLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="View PDF"
                          >
                            <FileText
                              className={`w-4 h-4 transition transform group-hover:scale-110 group-hover:translate-x-1 ${
                                service.isDark
                                  ? "text-white"
                                  : "text-orange-500"
                              }`}
                            />
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* RIGHT IMAGE (reverse layout) */}
              {service.reverse && (
                <div className="md:w-[40%] p-4">
                  <div className="h-[200px] md:h-[260px] overflow-hidden rounded-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
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

export default Services;
