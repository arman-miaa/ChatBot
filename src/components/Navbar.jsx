import logo from "../assets/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const links = (
    <>
      <li>
        <a href="#home" onClick={handleClose}>
          Home
        </a>
      </li>
      <li>
        <a href="#howto" onClick={handleClose}>
          How To Work
        </a>
      </li>
      <li>
        <a href="#features" onClick={handleClose}>
          Features
        </a>
      </li>
      <li>
        <a href="#faq" onClick={handleClose}>
          FAQ
        </a>
      </li>
      <li>
        <a href="#pricing" onClick={handleClose}>
          Pricing
        </a>
      </li>
      <li>
        <a href="#testimonials" onClick={handleClose}>
          Testimonials
        </a>
      </li>
    </>
  );

  return (
    <div className="bg-black text-white sticky top-0 right-0 z-50">
      <div className="container mx-auto">
        {/* ✅ Small device navbar */}
        <div className="flex lg:hidden items-center justify-between mx-4 py-3">
          <div className="bg-gray-600 rounded-full px-4 py-2 flex items-center justify-between w-full">
            {/* Logo */}
            <img src={logo} alt="Logo" className="object-cover w-8 h-8" />

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ✅ Mobile dropdown as overlay */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-black px-4 py-4 shadow-md z-40">
            <ul className="flex flex-col space-y-3">{links}</ul>
            <button
              onClick={handleClose}
              className="bg-primaryColor w-full mt-4 px-4 py-2 rounded-lg"
            >
              Sign Up
            </button>
          </div>
        )}

        {/* ✅ Desktop navbar (unchanged) */}
        <div className="hidden lg:flex navbar container mx-auto shadow-sm">
          <div className="navbar-start">
            <img src={logo} alt="" className="object-cover w-8 h-8" />
          </div>
          <div className="navbar-center">
            <ul className="menu menu-horizontal px-1 text-[#D9D9D9]">
              {links}
            </ul>
          </div>
          <div className="navbar-end">
            <button className="bg-primaryColor cursor-pointer text-white px-4 py-2 rounded-lg">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
