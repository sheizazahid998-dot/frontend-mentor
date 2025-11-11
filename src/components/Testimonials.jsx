import React from "react";
import kevinImage from "../assets/images/kevin.png";
import jessicaImage from "../assets/images/jessica.png";
import tricksImage from "../assets/images/tricks.png";
import huntImage from "../assets/images/hunt.png";
import stackImage from "../assets/images/stack.png";

const Testimonials = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Testimonials Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Kevin Powell */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200">
            <blockquote className="text-gray-800 text-lg leading-relaxed mb-6">
              "I highly recommend Frontend Mentor. Skip the search for project
              ideas and dive into ready-made challenges that help you level up
              as a developer."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={kevinImage}
                  alt="Kevin Powell"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-blue-600 text-lg">
                  Kevin Powell
                </h3>
                <p className="text-gray-600 text-sm">
                  Web Developer & YouTuber
                </p>
              </div>
            </div>
          </div>

          {/* Jessica Chan */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200">
            <blockquote className="text-gray-800 text-lg leading-relaxed mb-6">
              "Frontend Mentor is a win-win. You can sharpen your skills
              building websites and add finished projects to your portfolio to
              help land a job!"
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={jessicaImage}
                  alt="Jessica Chan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-blue-600 text-lg">
                  Jessica Chan
                </h3>
                <p className="text-gray-600 text-sm">
                  Web Developer & YouTuber
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Section */}

        <div className="text-center">
          <h2 className="text-gray-800 font-bold text-xl tracking-wider mb-12">
            AS FEATURED ON...
          </h2>

          <div
            className="
    flex flex-col 
    lg:flex-row 
    custom-md:flex-row       /* 768–1023px → row */
    logo-stack:flex-col      /* 500–799px → column 👈 */
    items-center lg:items-stretch
    gap-6 lg:gap-10 justify-center
  "
          >
            {/* CSS-Tricks Logo */}
            <div
              className="
      bg-white px-10 py-8 rounded-xl shadow-sm border border-gray-100 
      w-full md:w-[366px] custom-range:w-[355px] 
      custom-md:flex-1 
      logo-stack:w-4/5        /* 500–799px → 80% width 👈 */
      s-range:w-1/2           /* 640–759px → 50% width */
      md:h-[100px] lg:h-[120px] flex items-center justify-center
    "
            >
              <img
                src={tricksImage}
                alt="CSS-Tricks"
                className="h-10 object-contain"
              />
            </div>

            {/* Stack Overflow Logo */}
            <div
              className="
      bg-white px-10 py-8 rounded-xl shadow-sm border border-gray-100 
      w-full md:w-[366px] custom-range:w-[355px] 
      custom-md:flex-1 
      logo-stack:w-4/5 
      s-range:w-1/2 
      md:h-[100px] lg:h-[120px] flex items-center justify-center
    "
            >
              <img
                src={stackImage}
                alt="Stack Overflow"
                className="h-10 object-contain"
              />
            </div>

            {/* Product Hunt Logo */}
            <div
              className="
      bg-white px-10 py-8 rounded-xl shadow-sm border border-gray-100 
      w-full md:w-[366px] custom-range:w-[355px] 
      custom-md:flex-1 
      logo-stack:w-4/5 
      s-range:w-1/2 
      md:h-[100px] lg:h-[120px] flex items-center justify-center
    "
            >
              <img
                src={huntImage}
                alt="Product Hunt"
                className="h-10 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
