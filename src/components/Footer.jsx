import { MessageCircle } from "lucide-react";
import logoImg from "../assets/footerLogo.png"
import footerIcon from "../assets/footerIcon.png";
import { PiLetterCircleP, PiLetterCirclePFill, PiLetterCirclePThin } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Call to Action Section */}
      <div className="container mx-auto px-4 text-center py-20">
        {/* Chat Bot Icon */}
        <div className="w-16 h-16 rounded-full  mx-auto mb-8 flex items-center justify-center">
          <img src={logoImg} alt="" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-8 max-w-xl mx-auto leading-tight">
          Get Started Today' or 'Try for Free' with an easy sign-up process
        </h2>

        <button className="bg-primaryColor hover:bg-red-600 cursor-pointer text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200">
          Sign Up
        </button>
      </div>

      {/* Main Footer Content */}
      <div className="bg-gray-900 relative">
        {/* Corner Background Shadows */}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32">
          {/* dasktop shadow*/}
          <div className="hidden sm:block absolute left-0 bottom-0  w-100 h-50 rounded-full bg-red-600/20 blur-2xl -translate-x-1/4 translate-y-1/4"></div>
          <div className="hidden sm:block absolute right-0 bottom-0 w-100 h-50 rounded-full bg-red-600/20 blur-2xl translate-x-1/4 translate-y-1/4"></div>
          {/* mobile shadow*/}
          <div className="sm:hidden mx-auto w-100 h-80 rounded-full bg-red-600/20 blur-2xl"></div>
        </div>

        <div className="container mx-auto px-20 py-16 pb-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Brand Info Section */}
            <div>
              <div className="flex items-center mb-4 gap-2">
                <img src={footerIcon} alt="" />
                <h3 className="text-xl font-bold">Polymer</h3>
              </div>

              <p className="text-[#727272] text-sm mb-6 leading-relaxed w-2/8">
                Building coordination tools for organizations of all shapes and
                sizes. Hiring is just the start.
              </p>

              {/* Product Hunt Badge */}
              <div className="mb-6">
                <div className="bg-[#352d2dbf] rounded-lg p-3 inline-flex items-center space-x-1 ">
                  <div className="  rounded flex items-center justify-center">
                    <PiLetterCirclePFill className=" text-[40px]  rounded-full" />
                  </div>
                  <div>
                    <div className="">
                      <h4 className="text-white text-[13px] capitalize">
                        {" "}
                        featured on
                      </h4>
                      <h3 className="text-white text-xl  font-medium -mt-1">
                        {" "}
                        Product Hunt
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center pl-4">
                    <span className="ml-1">▲</span>
                    <span className="-mt-1 mr-4">372</span>
                  </div>
                </div>
              </div>

              <p className="text-[#727272] ">
                © {new Date().getFullYear()} ChatBot IO
              </p>
            </div>

            {/* Right Side - Three Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 ">
              {/* Company Links */}
              <div>
                <h4 className="text-xl font-semibold mb-6">Company</h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-[#727272] hover:text-white  transition-colors duration-200"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#727272] hover:text-white  transition-colors duration-200"
                    >
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#727272] hover:text-white  transition-colors duration-200"
                    >
                      Terms of service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#727272] hover:text-white  transition-colors duration-200"
                    >
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#727272] hover:text-white  transition-colors duration-200"
                    >
                      Discord
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#727272] hover:text-white  transition-colors duration-200"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>

              {/* Links Column */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Links</h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-[#727272] hover:text-white  transition-colors duration-200"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#727272] hover:text-white  transition-colors duration-200"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#727272] hover:text-white  transition-colors duration-200"
                    >
                      API
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#727272] hover:text-white  transition-colors duration-200"
                    >
                      Sign up
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#727272] hover:text-white  transition-colors duration-200"
                    >
                      Log in
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Resources</h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-[#727272] hover:text-white  transition-colors duration-200"
                    >
                      Help docs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#727272] hover:text-white  transition-colors duration-200"
                    >
                      Quick start guide
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#727272] hover:text-white  transition-colors duration-200"
                    >
                      Changelog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#727272] hover:text-white  transition-colors duration-200"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
