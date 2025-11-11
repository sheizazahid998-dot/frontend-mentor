import React from "react";
import TeamImage from "../assets/images/TeamImage.png";
import StaffImage from "../assets/images/Staff.png";

const CompaniesInfo = () => {
  return (
    <div>
      <section className="py-20 px-6 bg-white">
        {/* Top Heading Center */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          For companies
        </h2>

        <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl italic text-blue-600 uppercase font-bold">
              Engineering teams
            </h3>

            <h1 className="font-secondary text-2xl tablet:text-4xl font-extrabold text-gray-900 leading-tight">
              Train junior developers with real projects
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed">
              Skip theoretical tutorials. Give your junior developers{" "}
              <span className="font-semibold">100+ real-world challenges</span>{" "}
              that build practical skills faster than traditional training
              programs.
            </p>

            <button className="bg-rose-600 hover:bg-rose-700 text-white italic px-12 py-4 rounded-full font-semibold uppercase transition">
              Explore teams
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={TeamImage}
              alt="Team Training"
              className="w-full max-w-lg md:max-w-xl rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={StaffImage}
              alt="Hiring Staff"
              className="w-full max-w-lg md:max-w-xl rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Side - Text */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl italic text-blue-600 uppercase font-bold">
              Hiring teams
            </h3>

           <h1 className="font-secondary text-2xl tablet:text-4xl font-extrabold text-gray-900 leading-tight">
  Discover junior talent through skills, not resumes
</h1>

            <p className="text-gray-600 text-lg leading-relaxed">
              See real code and live projects upfront, then connect directly
              with developers who've demonstrated the skills and passion you
              need.
            </p>

            <button className="bg-rose-600 hover:bg-rose-700 text-white italic px-12 py-4 rounded-full font-semibold uppercase transition">
              Explore Hiring
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompaniesInfo;
