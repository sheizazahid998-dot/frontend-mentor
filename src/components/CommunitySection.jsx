import React from "react";
import { Github } from "lucide-react";

const CommunitySection = () => {
  return (
    <div className="bg-gray-50 py-12">
      <section className="relative bg-gray-100 py-12 px-8 max-w-[69rem] mx-auto rounded-2xl shadow-lg mt-16 overflow-hidden">
        <div className="relative">
          {/* Heading with L-shape */}
          <div className="relative inline-block mt-8 w-full">
            <h2
              className="
    text-3xl md:text-4xl font-bold text-gray-900 leading-snug text-center relative 
    font-25:text-25px
  "
            >
              Join 1,077,925 people building{" "}
              <span className="hidden md:inline relative">
                portfolio-worthy{" "}
                <span className="relative inline-block">
                  projects
                  {/* Pink L shape above "projects" */}
                  <div className="absolute -top-20 left-1/2 -translate-x-1/2 flex flex-col items-start">
                    <div className="w-2 h-16 bg-pink-500"></div>
                    <div className="w-12 h-2 bg-pink-500"></div>
                  </div>
                </span>
              </span>
              <span className="inline md:hidden relative">
                <br /> portfolio-worthy projects
              </span>
            </h2>
          </div>

          {/* Paragraph */}
          <div className="mt-8 relative flex flex-col items-center text-center max-w-2xl mx-auto">
            <div className="text-gray-600 text-lg leading-snug">
              <p>
                Our highly supportive, positive community is here to help you
                improve your skills.
              </p>
              <p className="mt-1 relative">
                <svg
                  width="150"
                  height="20"
                  viewBox="0 0 150 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-pink-500 absolute -left-56 top-2"
                >
                  <path
                    d="M0 20 L15 0 L30 20 L45 0 L60 20 L75 0 L90 20 L105 0 L120 20 L135 0 L150 20"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
                We all try to help each other out wherever possible. We’d love
                to welcome you to
              </p>
              <p className="mt-1">our community!</p>
            </div>

            <div className="flex justify-center">
              <button
                className="
      mt-6 bg-rose-600 text-white italic font-semibold 
      px-6 py-3 rounded-full flex items-center space-x-3 
      hover:bg-rose-700 transition-colors
      xxs-320-450:px-4 xxs-320-450:py-2 xxs-320-450:text-sm xxs-320-450:space-x-2
    "
              >
                <span>LOG IN</span>
                <span>WITH GITHUB</span>
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <Github className="w-5 h-5 text-black" />
                </span>
              </button>
            </div>
          </div>

          {/* Right bottom side circles */}
          <div className="absolute bottom-0 right-0 flex gap-1.5 -mr-10 -mb-14">
            {[...Array(3)].map((_, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-1 items-center">
                {[...Array(6)].map((_, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="w-3 h-3 rounded-full bg-sky-400"
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunitySection;
