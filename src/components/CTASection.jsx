import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../assets/optimized/logo.jpg";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CTASection = ({ onContactClick }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#002853] text-white py-4">
      <div className="pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
            {/* Company */}
            <div className="md:border-r md:border-gray-700/50 md:pr-6">
              <div className="h-[28px] flex items-center mb-4">
                <img
                  src={logo}
                  alt="logo"
                  className="h-14 object-contain mb-4 "
                />
              </div>

              {/* Content */}
              <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                We provide reliable and optimized industrial automation
                solutions to help industries improve efficiency and
                productivity.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:border-r md:border-gray-700/50 md:px-6">
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="hover:text-orange-500 cursor-pointer">
                  <Link to="/" className="hover:text-orange-500">
                    Home
                  </Link>
                </li>
                <li className="hover:text-orange-500 cursor-pointer">
                  <Link to="/about" className="hover:text-orange-500">
                    About Us
                  </Link>
                </li>
                <li className="hover:text-orange-500 cursor-pointer">
                  <Link to="/services" className="hover:text-orange-500">
                    Services
                  </Link>
                </li>
                <li className="hover:text-orange-500 cursor-pointer">
                  <Link to="/industries" className="hover:text-orange-500">
                    Industries
                  </Link>
                </li>
                <li className="hover:text-orange-500 cursor-pointer">
                  <Link to="/contact" className="hover:text-orange-500">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="md:border-r md:border-gray-700/50 md:px-6">
              <h3 className="font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Instrumentation</li>
                <li>Automation Solutions</li>
                <li>Panel Instruments</li>
                <li>Control Systems</li>
                <li>Maintenance & Support</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="md:pl-6">
              <h3 className="font-semibold mb-4">Contact Info</h3>

              <div className="flex items-start gap-3 mb-3">
                <FaMapMarkerAlt className="text-orange-500 mt-1" />
                <p className="text-gray-300 text-sm">
                  Pune, Maharashtra, India
                </p>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <FaPhoneAlt className="text-orange-500" />
                <p className="text-gray-300 text-sm">+91 9850057582</p>
              </div>

              <div className="flex items-center gap-3">
                <MdEmail className="text-orange-500" />
                <p className="text-gray-300 text-sm">
                  abhay.deore@aditherm.com
                </p>
              </div>
              <p className="text-gray-300 ml-7 text-sm">sales@aditherm.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
