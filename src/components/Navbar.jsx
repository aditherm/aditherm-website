import logo from "../assets/optimized/logo.jpg";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-white"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex justify-between items-center px-4 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className={`cursor-pointer transition-all duration-300 ${
              scrolled ? "h-12" : "h-16"
            }`}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 text-base font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "hover:text-orange-500"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "hover:text-orange-500"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "hover:text-orange-500"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/industries"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "hover:text-orange-500"
            }
          >
            Industries
          </NavLink>

          <NavLink to="/contact">
            <button className="bg-orange-500 text-white px-3 py-1 rounded-md hover:bg-orange-600 transition">
              Contact
            </button>
          </NavLink>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer">
          {menuOpen ? (
            <FiX onClick={() => setMenuOpen(false)} />
          ) : (
            <FiMenu onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-700 font-medium">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block py-2 border-b"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block py-2 border-b"
          >
            About Us
          </NavLink>

          <NavLink
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="block py-2 border-b"
          >
            Services
          </NavLink>

          <NavLink
            to="/industries"
            onClick={() => setMenuOpen(false)}
            className="block py-2 border-b"
          >
            Industries
          </NavLink>

          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            <button className="w-full bg-orange-500 text-white px-4 py-2 rounded-md mt-2">
              Contact
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
