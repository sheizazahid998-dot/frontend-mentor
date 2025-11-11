import React from "react";
import illustrationImage from "../assets/images/illustration.png";

const HowItWorks = () => {
  return (
    <div className="bg-gray-100 rounded-xl pt-[88px] pb-[73px] px-12 sm:px-20">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        <div className="block md:block lg:hidden order-1">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 relative z-10 text-left">
            How it works
          </h2>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-1/2 flex justify-center items-start order-2 md:order-2 lg:order-2">
          <img
            src={illustrationImage}
            alt="How it works illustration"
            className="h-auto max-h-[469px] rounded-lg shadow-lg lg:mt-[72px] custom-md:max-w-[54rem]"
          />
        </div>

        {/* Left Section - Steps */}
        <div className="lg:w-1/2 relative order-3 md:order-3 lg:order-1">
          {/* 🔵 Stronger Background Box */}
          <div className="absolute -top-6 -left-6 w-[105%] h-[105%] bg-[#5A85D6] rounded-3xl shadow-lg -z-10"></div>

          <h2 className="hidden lg:block text-3xl font-bold text-gray-900 mb-10 relative z-10 text-left">
            How it works
          </h2>

          {/* Steps Wrapper */}
          <div id="steps-wrapper" className="relative z-10">
            {/* Step 1 */}
            <div className="w-full  bg-[rgb(62,84,163)] text-white px-10 py-6 rounded-lg shadow-md mb-4">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-white text-blue-700 font-bold flex items-center justify-center mr-4">
                  1
                </div>
                <h3 className="text-lg font-semibold">Choose your challenge</h3>
              </div>
              <p className="text-base mt-4">
                Pick from 100+ professionally designed projects across five
                skill levels—from HTML/CSS basics to full-stack applications.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white text-black p-6 rounded-lg shadow-md mb-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-700 text-white font-bold flex items-center justify-center">
                  2
                </div>
                <h3 className="text-lg font-semibold">Code the design</h3>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white text-black p-6 rounded-lg shadow-md mb-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-700 text-white font-bold flex items-center justify-center">
                  3
                </div>
                <h3 className="text-lg font-semibold">Submit and improve</h3>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white text-black p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-700 text-white font-bold flex items-center justify-center">
                  4
                </div>
                <h3 className="text-lg font-semibold">Help others grow</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
