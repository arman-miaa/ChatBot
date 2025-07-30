import phoneImg from "../assets/phone.png";

const Banner = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center py-16">
      <div className="text-center text-white px-4">
        <span className="inline-block bg-red-700 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
          #1 COMBAT SPORTS TICKETING PLATFORM
        </span>
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Automate <span className="text-red-500">Customer</span>
          <br />
          <span className="text-red-500">Interactions</span> with Your AI
          <br />
          Chatbot
        </h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Pre-trained and customisable chatbots for smarter conversations.
          <br />
          CTA: 'Try for Free' and 'See Demo' buttons with accompanying visuals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center">
            Register for free <span className="ml-2 text-xl">&rarr;</span>
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-lg flex items-center justify-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              ></path>
            </svg>
            Watch Demo
          </button>
        </div>

        {/* Image added below buttons */}
        <div className="mt-12 flex justify-center">
          <img
            src={phoneImg}
            alt="Phone"
            className="w-[440px] h-[737px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
