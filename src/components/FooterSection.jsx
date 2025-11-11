import React from "react";
import { FaDiscord, FaXTwitter, FaLinkedin, FaFacebook } from "react-icons/fa6";
import logo1 from "../assets/images/logo1.svg";

const FooterSection = () => {
  return (
    <footer
      className="
    w-full bg-white py-6 pl-20 pr-20 
    s-range:pl-4 s-range:pr-4 
    flex items-center justify-between mt-7
    logo-icons-stack:flex-col logo-icons-stack:items-start logo-icons-stack:gap-8
  "
    >
      {/* Left: Logo */}
      <div className="flex items-center logo-icons-stack:pl-0">
        <img src={logo1} alt="Logo" className="h-8 w-auto" />
      </div>

      {/* Right: Icons */}
      <div
        className="
      flex items-center gap-6 
      s-range:pr-4 
      logo-icons-stack:mt-2 logo-icons-stack:pl-0
    "
      >
        <a href="#" className="text-sky-400 text-3xl hover:opacity-80">
          <FaDiscord />
        </a>
        <a href="#" className="text-sky-400 text-3xl hover:opacity-80">
          <FaXTwitter />
        </a>
        <a href="#" className="text-sky-400 text-3xl hover:opacity-80">
          <FaLinkedin />
        </a>
        <a href="#" className="text-sky-400 text-3xl hover:opacity-80">
          <FaFacebook />
        </a>
      </div>
    </footer>
  );
};

export default FooterSection;
