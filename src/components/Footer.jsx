import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16">
      {/* Call to Action Section */}
      <div className="container mx-auto px-4 text-center pb-24">
        {/* Placeholder for the circle icon */}
        <div className="w-16 h-16 rounded-full bg-gray-900 mx-auto mb-8 flex items-center justify-center relative">
          {/* Inner ring effect - you might use an actual SVG or icon here */}
          <div className="w-8 h-8 rounded-full border border-gray-700"></div>
          {/* If you have an actual icon, replace the div above with it. Example: */}
          {/* <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg> */}
        </div>
        <h2 className="text-4xl font-bold mb-8 max-w-2xl mx-auto">
          Get Started Today' or 'Try for Free' with an easy sign-up process
        </h2>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
          Sign Up
        </button>
      </div>

      {/* Main Footer Content */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Polymer</h3>
            <p className="text-gray-400 text-sm mb-6">
              Building coordination tools for organizations of all shapes and
              sizes. Hiring is just the start.
            </p>
            {/* Product Hunt Badge Placeholder */}
            <div className="mb-6">
              <a
                href="https://www.producthunt.com/posts/your-product-name"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://api.producthunt.com/widgets/v1/badges/your-badge-id.svg?theme=dark" // Replace with your actual Product Hunt badge URL
                  alt="Product Hunt Badge"
                  className="h-10" // Adjust height as needed
                />
              </a>
            </div>
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} Inflow Hiring, Inc.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Terms of service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column (Features, Pricing etc.) */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  API
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Sign up
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Log in
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Help docs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Quick start guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Changelog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
