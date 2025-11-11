import React from "react";
import { FaGithub } from "react-icons/fa";
import homeImage from "../assets/images/hero.png";

const HeroSection = () => {
  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16 py-10 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-x-14 items-stretch">
          {/* Left Content */}
          <div className="flex flex-col justify-between h-full pl-0 2xl:items-start 2xl:text-left 2xl:pb-10">
            {/* Text Content */}
            <div className="space-y-4">
              <div className="inline-block">
                <span
                  className="text-lg lg:text-xl font-bold italic tracking-wider uppercase"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  FOR LEARNERS
                </span>
              </div>

              <h1
                className="
    font-secondary
    text-[3.875rem] 
    s-range:text-[2.875rem]       /* 640–759px 👈 */
    custom-md:text-[1.875rem]     /* 760–1023px */
    md-lg-range:text-[1.875rem]   /* 1024–1199px */
    lg-range:text-[2.875rem]      /* 1200–1279px */
    logo-range:text-[2.875rem]    /* 1280–1399px */
    xl-range:text-[2.25rem]       /* 1400–1535px */
    xxs-range:text-[1.875rem]     /* 320–399px */
    font-semibold 
    leading-tight 
    text-customBlue
    mt-4 md:mt-6
  "
              >
                Front-end and full-stack coding challenges that build real
                skills and help get you hired
              </h1>
              <p
                className="
    text-[28px] 
    s-range:text-[24px]           /* 640–759px 👈 */
    custom-md:text-[24px]         /* 760–1023px */
    md-lg-range:text-[21px]       /* 1024–1199px */
    lg-range:text-[23px]          /* 1200–1279px */
    logo-range:text-[24px]        /* 1280–1399px */
    xl-range:text-[26px]          /* 1400–1535px */
    2xl-range:text-[28px]         /* 1536–1560px */
    xxs-range:text-[21px]         /* 320–399px */
    leading-relaxed 
    text-gray-600
  "
              >
                Frontend Mentor provides professional design-to-code challenges
                that mirror real-world development work. Join{" "}
                <span className="font-bold text-blue-600">1,080,261</span>{" "}
                developers building portfolio projects that impress employers.
              </p>
            </div>

            <div
              className="
    mt-6 
    flex flex-col sm:flex-row gap-4 
    2xl:justify-start 
    custom-md:pb-[43px]   // 768–1023px
    s-range:pb-[47px]     // 640–767px
    xs-range:pb-[55px]    // 400–639px
    xxs-range:pb-[55px]   // 👈 320–399px
  "
            >
              <button
                className="
      flex items-center justify-center whitespace-nowrap 
      bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 
      min-w-[240px] text-base font-bold italic rounded-full gap-3 
      xs-range:w-[20%] 
      xxs-range:w-[20%]   // 👈 320–399px
    "
              >
                START BUILDING FREE
                <FaGithub className="w-5 h-5" />
              </button>

              <button
                className="
      flex items-center justify-center whitespace-nowrap 
      border-2 border-gray-300 text-gray-700 hover:bg-gray-50 
      px-6 py-3 min-w-[240px] text-base font-bold italic rounded-full bg-transparent 
      xs-range:w-[20%] 
      xxs-range:w-[20%]   // 👈 320–399px
    "
              >
                BROWSE CHALLENGES
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex h-full items-stretch">
            <img
              src={homeImage}
              alt="Home"
              className="w-auto h-full object-contain"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
