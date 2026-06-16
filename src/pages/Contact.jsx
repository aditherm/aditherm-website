import Navbar from "../components/Navbar";
import headImg from "../assets/optimized/head.webp";
import CTASection from "../components/CTASection";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Headphones,
  Settings,
  Zap,
  ShieldCheck,
  Users,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dztcmpc", // service ID
        "template_jb629hj", // template ID
        formRef.current,
        "s2q-3t7r3eZaWnWCQ", // public key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message.");
        },
      );
  };
  return (
    <div>
      {/* HERO SECTION */}
      <div className="bg-[#002853] pt-12 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-4 md:py-5 relative z-10">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold">
              Contact <span className="text-orange-500">Us</span>
            </h1>

            <p className="text-gray-200 mt-2 max-w-lg mx-auto text-xs md:text-sm">
              We’re here to help you with the right automation <br /> solutions
              for your business.
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              {/* Icon */}
              <div className="bg-orange-500/20 p-3 rounded-full">
                <Headphones className="text-orange-500 w-5 h-5" />
              </div>

              {/* Text */}
              <p className="text-gray-200 text-sm">
                Let’s connect and build something smarter together.
              </p>
            </div>
          </div>

          <div className="mb-1 mt-6 text-sm text-gray-200">
            Home <span className="text-orange-500">{">"}</span>{" "}
            <span className="text-orange-500">Contact</span>
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

      {/* Info cards */}
      <div className="bg-gray-100 py-10 -mt-13">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-xl shadow-md flex flex-col md:flex-row overflow-hidden relative z-20">
            {/* CARD ITEM */}
            <div className="flex-1 flex items-center gap-4 px-6 py-6 relative">
              {/* Icon */}
              <div className="bg-orange-100 p-3 rounded-full">
                <Phone className="text-orange-500 w-5 h-5" />
              </div>

              {/* Content */}
              <div>
                <p className="font-semibold text-gray-800 text-sm">Call Us</p>
                <p className="text-gray-600 text-sm">+91 9850057582</p>
              </div>

              {/* Divider */}
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-gray-200"></div>
            </div>

            {/* EMAIL */}
            <div className="flex-1 flex items-center gap-4 px-6 py-6 relative">
              <div className="bg-orange-100 p-3 rounded-full">
                <Mail className="text-orange-500 w-5 h-5" />
              </div>

              <div>
                <p className="font-semibold text-gray-800 text-sm">Email Us</p>
                <p className="text-gray-600 text-sm">
                  abhay.deore@aditherm.com
                </p>
                <p className="text-gray-600 text-sm">sales@aditherm.com</p>
              </div>

              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-gray-200"></div>
            </div>

            {/* LOCATION */}
            <div className="flex-1 flex items-center gap-4 px-6 py-6 relative">
              <div className="bg-orange-100 p-3 rounded-full">
                <MapPin className="text-orange-500 w-5 h-5" />
              </div>

              <div>
                <p className="font-semibold text-gray-800 text-sm">
                  Our Location
                </p>
                <p className="text-gray-600 text-sm">
                  Pune, Maharashtra, India
                </p>
                <p className="text-gray-400 text-xs mt-1">Serving PAN India</p>
              </div>

              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact-form" className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* LEFT - Contact Form */}
            <div className="h-full">
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 h-full flex flex-col">
                <p className="text-orange-500 text-sm font-semibold tracking-wide">
                  SEND US A MESSAGE
                </p>

                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-2">
                  We’d Love to Hear From{" "}
                  <span className="text-orange-500">You</span>
                </h2>

                <p className="text-gray-500 text-sm mt-2">
                  Fill out the form and our team will get back to you as soon as
                  possible.
                </p>

                <form
                  ref={formRef}
                  onSubmit={sendEmail}
                  className="mt-6 space-y-4"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Your Name *"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Your Email *"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <input
                    type="text"
                    name="user_phone"
                    placeholder="Phone Number"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />

                  <input
                    type="text"
                    name="user_company"
                    placeholder="Company Name"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />

                  <select
                    name="subject"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option>Select Subject</option>
                    <option>General Inquiry</option>
                    <option>Automation Solutions</option>
                    <option>Instrumentation</option>
                    <option>Support</option>
                  </select>

                  <textarea
                    rows="4"
                    name="message"
                    placeholder="Your Message *"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  ></textarea>

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md text-sm font-medium disabled:opacity-70"
                  >
                    {loading ? "Sending..." : "Send Message →"}
                  </button>

                  {/* Success / Error Message */}
                  {status && (
                    <p
                      className={`text-sm mt-2 ${
                        status.includes("successfully")
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {status}
                    </p>
                  )}

                  <p className="text-gray-400 text-xs mt-2">
                    🔒 Your information is safe with us. We never share your
                    details.
                  </p>
                </form>
              </div>
            </div>

            {/* RIGHT - Why Get in Touch */}
            <div className="h-full">
              <div className="bg-gradient-to-b from-[#002853] to-[#001f40] text-white rounded-xl shadow-md p-6 md:p-8 h-full flex flex-col">
                {/* Heading */}
                <h3 className="text-lg md:text-xl font-semibold">
                  Why <span className="text-orange-500">Get in Touch?</span>
                </h3>

                {/* Small underline */}
                <div className="w-10 h-[2px] bg-orange-500 mt-2 mb-4"></div>

                {/* Subtext */}
                <p className="text-gray-300 text-sm mb-6">
                  We are committed to providing the best automation solutions
                  tailored to your needs.
                </p>

                {/* ITEMS */}
                <div className="space-y-6">
                  {/* ITEM 1 */}
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500/20 p-3 rounded-full">
                      <Settings className="text-orange-500 w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Expert Support</p>
                      <p className="text-gray-300 text-xs mt-1">
                        Get guidance from our experienced automation experts.
                      </p>
                    </div>
                  </div>

                  {/* ITEM 2 */}
                  <div className="flex items-start gap-4 border-t border-white/10 pt-3">
                    <div className="bg-orange-500/20 p-3 rounded-full">
                      <Zap className="text-orange-500 w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Quick Response</p>
                      <p className="text-gray-300 text-xs mt-1">
                        We ensure fast and efficient responses to all inquiries.
                      </p>
                    </div>
                  </div>

                  {/* ITEM 3 */}
                  <div className="flex items-start gap-4 border-t border-white/10 pt-3">
                    <div className="bg-orange-500/20 p-3 rounded-full">
                      <ShieldCheck className="text-orange-500 w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">
                        Reliable Solutions
                      </p>
                      <p className="text-gray-300 text-xs mt-1">
                        Quality, reliability, and performance you can count on.
                      </p>
                    </div>
                  </div>

                  {/* ITEM 4 */}
                  <div className="flex items-start gap-4 border-t border-white/10 pt-3    ">
                    <div className="bg-orange-500/20 p-3 rounded-full">
                      <Users className="text-orange-500 w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Client Focused</p>
                      <p className="text-gray-300 text-xs mt-1">
                        Your success is our priority. We listen, understand, and
                        deliver.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CALL DIRECTLY */}
                <div className="mt-4 pt-7 border-t border-white/10">
                  <p className="text-sm font-semibold text-white">
                    Prefer to
                    <span className="text-orange-500"> talk</span> directly?
                  </p>

                  <p className="text-gray-300 text-sm mt-2">
                    Call us and speak with our team for quick assistance.
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <div className="bg-orange-500/20 p-3 rounded-full">
                      <Phone className="text-orange-500 w-5 h-5" />
                    </div>

                    <div>
                      <p className="text-white font-medium text-sm">
                        +91 9850057582
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTASection
        onContactClick={() => {
          const section = document.getElementById("contact-form");
          const yOffset = 10;

          const y =
            section.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
        }}
      />
    </div>
  );
};

export default Contact;
