import React from "react";

const Pricing = () => {
  return (
    <div className="bg-black py-16 text-white min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-10">Pricing</h2>

      {/* Billing Toggle */}
      <div className="flex bg-gray-900 rounded-full p-1 mb-16">
        <button className="px-6 py-2 rounded-full text-sm font-medium bg-red-700 text-white">
          Billed yearly -20%
        </button>
        <button className="px-6 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white">
          Billed monthly
        </button>
      </div>

      {/* Pricing Cards Container */}
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-8 px-4 w-full max-w-6xl">
        {/* Left Card */}
        <div className="flex-1 w-full max-w-sm h-[400px] bg-gray-900 rounded-xl">
          {/* Content will go here for the actual pricing plan */}
        </div>

        {/* Middle Card (with red border) */}
        <div className="flex-1 w-full max-w-sm h-[450px] bg-gray-900 rounded-xl border-2 border-red-600 transform scale-105 shadow-2xl transition-all duration-300">
          {/* Content will go here for the actual pricing plan */}
        </div>

        {/* Right Card */}
        <div className="flex-1 w-full max-w-sm h-[400px] bg-gray-900 rounded-xl">
          {/* Content will go here for the actual pricing plan */}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
