"use client";

import { Check } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  // Pricing data for different billing periods
  const pricingData = {
    monthly: {
      free: { price: 0, period: "per month" },
      premium: { price: 10, period: "per month" },
    },
    yearly: {
      free: { price: 0, period: "per year" },
      premium: {
        price: 96,
        period: "per year",
        originalPrice: 120,
        savings: "20%",
      },
    },
  };

  const currentPricing = isYearly ? pricingData.yearly : pricingData.monthly;

  return (
    <div id="pricing" className="bg-black text-white py-8 md:py-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-semibold md:font-bold mb-4 md:mb-8">
            Pricing
          </h2>

          {/* Toggle Buttons */}
          <div className="flex justify-center items-center w-fit mx-auto">
            {/* Outer Border */}
            <div className="relative rounded-xl p-1 border border-[#d63e3e7b] bg-transparent flex gap-1">
              {/* Background Slider */}
              <div
                className={`absolute top-1 bottom-1 rounded-lg bg-primaryColor transition-all duration-300 ease-in-out ${
                  isYearly ? "left-1/2 right-1" : "left-1 right-1/2"
                }`}
              />

              {/* Monthly Button */}
              <button
                onClick={() => setIsYearly(false)}
                className={`relative z-10 px-6 py-2 cursor-pointer rounded-lg text-sm font-medium transition-all duration-300 ${
                  !isYearly ? "text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                Billed monthly
              </button>

              {/* Yearly Button */}
              <button
                onClick={() => setIsYearly(true)}
                className={`relative z-10 px-6 py-2 cursor-pointer rounded-lg text-sm font-medium transition-all duration-300 ${
                  isYearly ? "text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                Billed yearly -20%
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 container mx-auto">
          {/* Free Plan */}
          <div className=" rounded-lg p-8 transition-all duration-300">
            <div className="mb-6 md:flex items-center  justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">Free plan</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Our most popular plan for small teams.
                </p>
              </div>
              <div className="flex items-baseline">
                <span className="text-5xl font-bold transition-all duration-300">
                  <span className="text-4xl">$</span>
                  {currentPricing.free.price}
                </span>
                <span className="text-gray-400 ml-1 md:ml-2 transition-all duration-300">
                  {currentPricing.free.period}
                </span>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-sm font-semibold text-gray-300 mb-1">
                FEATURES
              </h4>
              <p className="text-sm text-gray-400 mb-6">
                Everything in our <span className="text-white">free plan</span>{" "}
                plus...
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Left column */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                    <span>Access to basic features</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                    <span>Access to basic features</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                    <span>Access to basic features</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                    <span>Access to basic features</span>
                  </div>
                </div>

                {/* Right column */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                    <span>Attend events</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                    <span>Attend events</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                    <span>Attend events</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                    <span>Attend events</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full bg-primaryColor cursor-pointer hover:bg-red-600 text-white py-3 rounded-lg font-medium transition-colors duration-200">
              Get started
            </button>
          </div>

          {/* Premium Plan */}
          <div className=" rounded-lg p-8 transition-all duration-300">
            <div className="mb-6 md:flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">Premium plan</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Our most popular plan for small teams.
                </p>
              </div>
              <div className="flex items-baseline">
                <span className="text-5xl font-bold transition-all duration-300">
                  <span className="text-4xl">$</span>
                  {currentPricing.premium.price}
                </span>
                <span className="text-gray-400 ml-1 md:ml-2 transition-all duration-300">
                  {currentPricing.premium.period}
                </span>
                {isYearly && currentPricing.premium.originalPrice && (
                  <div className="ml-4 flex flex-col">
                    <span className="text-sm text-gray-500 line-through">
                      ${currentPricing.premium.originalPrice}/year
                    </span>
                    <span className="text-sm text-green-400 font-medium">
                      Save {currentPricing.premium.savings}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-sm font-semibold text-gray-300 mb-1">
                FEATURES
              </h4>
              <p className="text-sm text-gray-400 mb-6">
                Everything in our <span className="text-white">free plan</span>{" "}
                plus...
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Left column */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                    <span>Access to basic features</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                    <span>Access to basic features</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                    <span>Access to basic features</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                    <span>Access to basic features</span>
                  </div>
                </div>

                {/* Right column */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                    <span>Attend events</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                    <span>Attend events</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                    <span>Attend events</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                    <span>Attend events</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full bg-primaryColor cursor-pointer hover:bg-red-600 text-white py-3 rounded-lg font-medium transition-colors duration-200">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
