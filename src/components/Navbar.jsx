import React, { useState } from "react";
import {
  FaChevronDown,
  FaRoute,
  FaLaptop,
  FaCode,
  FaNewspaper,
  FaUserTie,
  FaUserGraduate,
  FaUnlock,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Github } from "lucide-react";
import logo1 from "../assets/images/logo1.svg";
import logoArrows from "../assets/images/logoArrows.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isCompaniesOpen, setIsCompaniesOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 px-6 py-4 relative">
      <div className="w-full flex items-center justify-between px-4">
        {/* ==== Left Section: Hamburger + Logo ==== */}
        <div className="flex items-center space-x-5">
          {/* Hamburger Button */}
          <button
            className="text-gray-700 text-3xl lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className="text-gray-600 text-[34px]" />
            ) : (
              <FaBars className="text-gray-700 text-[30px]" />
            )}
          </button>

          {/* Logo responsive */}
          <div className="flex items-center">
            {/* Arrows-only logo (320px–1023px) */}
            <img
              src={logoArrows}
              alt="Logo Arrows"
              className="h-[28px] w-auto object-contain block lg:hidden"
            />
            {/* Full logo (1024px+) */}
            <img
              src={logo1}
              alt="Frontend Mentor Logo"
              className="h-[28px] w-auto object-contain hidden lg:block"
            />
          </div>
        </div>

        {/* ==== Desktop Menu ==== */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* Explore dropdown */}
          <div className="relative group">
            <div className="flex items-center space-x-1 cursor-pointer">
              <span className="text-gray-700 font-medium hover:text-gray-900 transition-colors">
                EXPLORE
              </span>
              <FaChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-700 transition-transform duration-300 group-hover:rotate-180" />
            </div>

            {/* Dropdown Menu */}
            <div className="absolute left-0 mt-6 w-52 bg-white border border-gray-300 shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 divide-y divide-gray-200">
              <a
                href="#"
                className="flex items-center px-4 py-3 text-base uppercase font-semibold text-black hover:bg-gray-100"
              >
                <FaRoute className="w-5 h-5 mr-2" /> Learning paths
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-3 text-base uppercase font-semibold text-black hover:bg-gray-100"
              >
                <FaLaptop className="w-5 h-5 mr-2" /> Challenges
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-3 text-base uppercase font-semibold text-black hover:bg-gray-100"
              >
                <FaCode className="w-5 h-5 mr-2" /> Solutions
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-3 text-base uppercase font-semibold text-black hover:bg-gray-100"
              >
                <FaNewspaper className="w-5 h-5 mr-2" /> Articles
              </a>
            </div>
          </div>

          {/* For Companies */}
          <div className="relative group">
            <div className="flex items-center space-x-1 cursor-pointer">
              <span className="text-gray-700 font-medium hover:text-gray-900 transition-colors">
                FOR COMPANIES
              </span>
              <FaChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-700 transition-transform duration-300 group-hover:rotate-180" />
            </div>

            {/* Dropdown Menu */}
            <div className="absolute left-0 mt-6 w-56 bg-white border border-gray-300 shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 divide-y divide-gray-200">
              <a
                href="#"
                className="flex items-center px-4 py-3 text-base uppercase font-semibold text-black hover:bg-gray-100"
              >
                <FaUserTie className="w-5 h-5 mr-2" /> Hire developers
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-3 text-base uppercase font-semibold text-black hover:bg-gray-100"
              >
                <FaUserGraduate className="w-5 h-5 mr-2" /> Train developers
              </a>
            </div>
          </div>

          {/* Unlock PRO */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <FaUnlock className="w-4 h-4 text-black" />
            <span className="text-gray-700 font-medium hover:text-gray-900 transition-colors">
              UNLOCK
            </span>
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
              PRO
            </span>
          </div>

          {/* Login with Github */}
          <button className="bg-gray-900 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition-colors">
            <span className="font-medium">LOG IN</span>
            <span className="font-bold text-gray-300">WITH GITHUB</span>
            <Github className="w-4 h-4" />
          </button>
        </div>

        {/* ==== Mobile Login Button (Right) ==== */}
        <div className="lg:hidden flex items-center ml-auto">
          <button className="bg-gray-900 text-white px-3 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition-colors text-sm">
            <span className="font-medium">LOG IN</span>
            <Github className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ==== Mobile Dropdown Menu ==== */}
      {isMenuOpen && (
        <div className="absolute left-4 mt-2 bg-white border border-gray-200 py-2 divide-y divide-gray-200 shadow-lg rounded-lg w-60 z-50">
          {/* Explore (Accordion) */}
          <div>
            <button
              className="w-full flex items-center justify-between px-4 py-3 text-base uppercase font-semibold text-black hover:bg-gray-100"
              onClick={() => setIsExploreOpen(!isExploreOpen)}
            >
              <span className="flex items-center">EXPLORE</span>
              <FaChevronDown
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  isExploreOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isExploreOpen && (
              <div className="pl-6">
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-sm uppercase font-medium text-black hover:bg-gray-100"
                >
                  <FaRoute className="w-5 h-5 mr-2" /> Learning paths
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-sm uppercase font-medium text-black hover:bg-gray-100"
                >
                  <FaLaptop className="w-5 h-5 mr-2" /> Challenges
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-sm uppercase font-medium text-black hover:bg-gray-100"
                >
                  <FaCode className="w-5 h-5 mr-2" /> Solutions
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-sm uppercase font-medium text-black hover:bg-gray-100"
                >
                  <FaNewspaper className="w-5 h-5 mr-2" /> Articles
                </a>
              </div>
            )}
          </div>

          {/* For Companies (Accordion) */}
          <div>
            <button
              className="w-full flex items-center justify-between px-4 py-3 text-base uppercase font-semibold text-black hover:bg-gray-100"
              onClick={() => setIsCompaniesOpen(!isCompaniesOpen)}
            >
              <span className="flex items-center">FOR COMPANIES</span>
              <FaChevronDown
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  isCompaniesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isCompaniesOpen && (
              <div className="pl-6">
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-sm uppercase font-medium text-black hover:bg-gray-100"
                >
                  <FaUserTie className="w-5 h-5 mr-2" /> Hire developers
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-sm uppercase font-medium text-black hover:bg-gray-100"
                >
                  <FaUserGraduate className="w-5 h-5 mr-2" /> Train developers
                </a>
              </div>
            )}
          </div>

          {/* Unlock PRO */}
          <div className="flex items-center px-4 py-3 text-base uppercase font-semibold text-black hover:bg-gray-100">
            <FaUnlock className="w-5 h-5 mr-2" /> Unlock Pro
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
