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
    <div id="pricing" className="bg-black text-white py-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-8">Pricing</h2>

          {/* Toggle Buttons */}
          <div className="flex justify-center items-center   w-fit mx-auto ">
            <div className="relative bg-gray-800 rounded-full p-1 flex">
              {/* Background slider */}
              <div
                className={`absolute top-1 bottom-1 bg-primaryColor rounded-lg transition-all duration-300 ease-in-out ${
                  isYearly ? "left-1/2 right-1" : "left-1 right-1/2 "
                }`}
              />

              {/* Monthly Button */}
              <button
                onClick={() => setIsYearly(false)}
                className={`relative z-10 px-6 py-2 rounded-lg cursor-pointer text-sm font-medium transition-colors duration-300 ${
                  !isYearly
                    ? "text-white"
                    : "text-gray-300 border border-primaryColor px-10 transition-all duration-500 ease-in-out hover:text-white"
                }`}
              >
                Billed monthly
              </button>

              {/* Yearly Button */}
              <button
                onClick={() => setIsYearly(true)}
                className={`relative z-10 px-6 py-2 cursor-pointer rounded-lg text-sm font-medium transition-colors duration-300 ${
                  isYearly
                    ? "text-white"
                    : "text-gray-300 border border-primaryColor transition-all duration-500 ease-in-out hover:text-white"
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
          <div className="bg-gray-900 rounded-lg p-8 transition-all duration-300">
            <div className="mb-6 flex items-center  justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">Free plan</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Our most popular plan for small teams.
                </p>
              </div>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold transition-all duration-300">
                  ${currentPricing.free.price}
                </span>
                <span className="text-gray-400 ml-2 transition-all duration-300">
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
          <div className="bg-gray-900 rounded-lg p-8 transition-all duration-300">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">Premium plan</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Our most popular plan for small teams.
                </p>
              </div>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold transition-all duration-300">
                  ${currentPricing.premium.price}
                </span>
                <span className="text-gray-400 ml-2 transition-all duration-300">
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
