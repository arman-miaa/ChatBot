import { PiVideoFill } from "react-icons/pi";
import phoneImg from "../assets/Flat iPhone.png";
import unionImg from "../assets/Union.png"
import { useState } from "react";
import VideoModal from "./VideoModel";
import { motion } from "framer-motion";

const Banner = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      id="home"
      className=" bg-black overflow-hidden min-h-screen flex items-center justify-center py-4 md:py-16"
    >
      <div className="text-center text-white px-4">
        <span className="inline-block bg-red-300 text-primaryColor text-[9px] md:text-xs md:font-semibold px-3 py-1 rounded-full mb-4">
          #1 COMBAT SPORTS TICKETING PLATFORM
        </span>
        <h1 className=" text-3xl md:text-6xl font-bold md:leading-15 mb-3 md:mb-6">
          Automate <span className="text-red-500">Customer</span>
          <br />
          <span className="text-red-500">Interactions</span> with Your{" "}
          <br className="hidden md:flex" />
          AI Chatbot
        </h1>
        <p className="hidden md:flex  justify-center text-sm md:text-lg mb-8 max-w-2xl mx-auto text-secondaryColor">
          Pre-trained and customisable chatbots for smarter conversations.
          <br />
          'Try for Free' and 'See Demo' buttons with accompanying visuals.
        </p>
        {/* for small device */}
        <p className=" md:hidden text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto text-secondaryColor">
          Pre-trained and customisable chatbots for smarter conversations. 'Try
          for Free' and 'See Demo'
        </p>
        <div className="flex flex-col  relative  justify-center items-center gap-3 md:gap-4">
          {/* img */}
          <img
            src={unionImg}
            alt=""
            className="absolute right-8 top-4 md:right-18 md:top-2 w-[49px] md:w-[130px] object-cover animate-leftRight"
          />

          <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-3 md:px-12 cursor-pointer  rounded-lg flex items-center justify-center">
            Register for free <span className="ml-2 text-xl">&rarr;</span>
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="bg-white cursor-pointer hover:bg-gray-100 text-gray-800 font-semibold py-[10px] px-5 md:px-14 rounded-lg flex items-center justify-center"
          >
            <span>
              {" "}
              <PiVideoFill className="text-primaryColor w-8 h-6" />
            </span>
            Watch Demo
          </button>
        </div>

        {/* Image added below buttons */}
        <div className="md:mt-20  flex justify-center">
          <div className="relative rounded-[60px]">
            {/* Shadow / glow effect */}
            <div
              className="
        absolute bottom-0 left-0 right-0
        h-3/4
        rounded-[100px] 
        bg-gradient-to-b from-red-900/70 via-red-800/60 to-red-700/40
        blur-[100px] opacity-70
        md:scale-x-[2.5] md:scale-y-[1.5]
      "
            ></div>

            {/* Phone image */}
            <motion.img
              src={phoneImg}
              alt="Phone"
              className="relative w-[290px] mt-6 md:mt-0 md:w-[450px] md:h-[960px] object-contain rounded-[60px]"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
      {showModal && <VideoModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Banner;
