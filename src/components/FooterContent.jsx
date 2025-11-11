import React from "react";

const FooterContent = () => {
  return (
    <div className="w-full bg-white py-12 px-6 sm:px-10 lg:px-16 grid grid-cols-1 xl:grid-cols-5 gap-8 s-range:pl-4 s-range:pr-4">
      {/* === 1st Div (Subscribe) === */}
      <div>
        <h2 className="text-[1.62rem] font-semibold text-blue-700 mb-1">
          Stay up to date
        </h2>
        <p className="text-black">
          with new challenges, featured solutions, selected articles, and our
          latest news
        </p>

        {/* Input + Button */}
        <div
          className="
    mt-4 flex sm:flex-row sm:items-center gap-3 
    w-[71%] sm:w-auto
    xxs-320-570:flex-col xxs-320-570:items-start
  "
        >
          <input
            type="email"
            placeholder="email@example.com"
            className="w-full sm:w-[300px] px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-rose-600"
          />
          <button className="bg-rose-600 text-white italic uppercase font-bold px-8 py-3 rounded-full hover:bg-red-900 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* === 2nd → 5th Divs === */}
      <div
        className="
    xl:col-span-4 
    flex flex-wrap justify-start 
    xl:flex-nowrap xl:justify-end 
    gap-12 
    s-range:grid s-range:grid-cols-1 s-range:gap-y-8
  "
      >
        {/* === 2nd Div === */}
        <div>
          <h2 className="text-[1.62rem] font-semibold text-black xl:whitespace-nowrap">
            Frontend Mentor
          </h2>
          <p className="mt-2 text-black">Unlock Pro</p>
          <p className="mt-2 text-black">Contact us</p>
          <p className="mt-2 text-black">FAQs</p>
          <p className="mt-2 text-black">Become a partner</p>
          <p className="mt-2 text-black">Use cases</p>
        </div>

        {/* === 3rd Div === */}
        <div>
          <h2 className="text-[1.62rem] font-semibold text-black">Explore</h2>
          <p className="mt-2 text-black">Learning paths</p>
          <p className="mt-2 text-black">Challenges</p>
          <p className="mt-2 text-black">Solutions</p>
          <p className="mt-2 text-black">Articles</p>
        </div>

        {/* === 4th Div === */}
        <div>
          <h2 className="text-[1.62rem] font-semibold text-black">Community</h2>
          <p className="mt-2 text-black">Discord</p>
          <p className="mt-2 text-black">Guidelines</p>
        </div>

        {/* === 5th Div === */}
        <div>
          <h2 className="text-[1.62rem] font-semibold text-black">
            For companies
          </h2>
          <p className="mt-2 text-black">Hire developers</p>
          <p className="mt-2 text-black">Train developers</p>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
