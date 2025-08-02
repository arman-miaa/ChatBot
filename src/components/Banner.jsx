import { PiVideoFill } from "react-icons/pi";
import phoneImg from "../assets/Flat iPhone.png";
import unionImg from "../assets/Union.png"

const Banner = () => {
  return (
    <div
      id="home"
      className="bg-black overflow-hidden min-h-screen flex items-center justify-center py-16"
    >
      <div className="text-center text-white px-4">
        <span className="inline-block bg-red-300 text-primaryColor text-xs font-semibold px-3 py-1 rounded-full mb-4">
          #1 COMBAT SPORTS TICKETING PLATFORM
        </span>
        <h1 className="text-6xl font-bold leading-15 mb-6">
          Automate <span className="text-red-500">Customer</span>
          <br />
          <span className="text-red-500">Interactions</span> with Your AI
          <br />
          Chatbot
        </h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-secondaryColor">
          Pre-trained and customisable chatbots for smarter conversations.
          <br />
          CTA: 'Try for Free' and 'See Demo' buttons with accompanying visuals.
        </p>
        <div className="flex flex-col  relative  justify-center items-center gap-4">
          {/* img */}
          <img
            src={unionImg}
            alt=""
            className="absolute right-18 top-2 w-[130px] object-cover"
          />
          <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-12 cursor-pointer  rounded-lg flex items-center justify-center">
            Register for free <span className="ml-2 text-xl">&rarr;</span>
          </button>
          <button className="bg-white cursor-pointer hover:bg-gray-100 text-gray-800 font-semibold py-2 px-14 rounded-lg flex items-center justify-center">
            <span>
              {" "}
              <PiVideoFill className="text-primaryColor w-8 h-6" />
            </span>
            Watch Demo
          </button>
        </div>

        {/* Image added below buttons */}
        <div className="mt-20 flex justify-center">
          <div className="relative rounded-[60px]">
            {/* Shadow / glow effect */}
            <div
              className="
        absolute bottom-0 left-0 right-0
        h-3/4
        rounded-[100px] 
        bg-gradient-to-b from-red-900/70 via-red-800/60 to-red-700/40
        blur-[100px] opacity-70
        scale-x-[2.5] scale-y-[1.5]
      "
            ></div>

            {/* Phone image */}
            <img
              src={phoneImg}
              alt="Phone"
              className="relative w-[450px] h-[960px] object-contain rounded-[60px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
