import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const TopCTA = ({ onContactClick }) => {
  return (
    <div className="bg-[#002853] text-white py-4">
      <div className="border-b border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Text */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold">
              Let’s Build Smarter <br /> Automation{" "}
              <span className="text-orange-500">Together</span>
            </h2>
          </div>

          {/* Right Content */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Call */}
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#FF5400] text-xl" />
              <div>
                <p className="text-sm text-gray-300">Call Us</p>
                <p className="font-medium">+91 9850057582</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <MdEmail className="text-[#FF5400] text-xl" />
              <div>
                <p className="text-sm text-gray-300">Email Us</p>
                <p className="font-medium">abhay.deore@aditherm.com</p>
                <p className="font-medium">sales@aditherm.com</p>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={onContactClick}
              className="bg-[#FF5400] hover:bg-orange-700 px-3 py-1 font-bold rounded-md shadow-md hover:shadow-lg transition"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCTA;
