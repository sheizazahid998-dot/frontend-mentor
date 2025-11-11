import React from "react";
import { FaCheck, FaBriefcase, FaCommentDots, FaCode } from "react-icons/fa";
import Visa from "../assets/images/visa.png";
import MasterCard from "../assets/images/mastercard.png";
import Amex from "../assets/images/amex.png";
import Maestro from "../assets/images/maestro.png";
import PayPal from "../assets/images/paypal.png";
import GooglePay from "../assets/images/GooglePay.png";

const logos = [
  { src: Visa, alt: "Visa" },
  { src: MasterCard, alt: "MasterCard" },
  { src: Amex, alt: "American Express" },
  { src: Maestro, alt: "Maestro" },
  { src: PayPal, alt: "PayPal" },
  { src: GooglePay, alt: "Google Pay" },
];

const Pricing = () => {
  const features = [
    {
      icon: <FaBriefcase />,
      title: "Build portfolio projects that get you hired",
      description:
        "Create multi-page websites, interactive dashboards, and full-stack applications that make your portfolio stand out to employers.",
    },
    {
      icon: <FaCommentDots />,
      title: "Get instant feedback on every submission",
      description:
        "Our AI-enhanced reports spot up to 3x more improvement opportunities than our standard reports, accelerating your growth without waiting.",
    },
    {
      icon: <FaCode />,
      title: "Master the design-to-code workflow pros use",
      description:
        "Work with exact specs from Figma files – colors, spacing, fonts, and components – just like professional developers.",
    },
  ];

  const monthlyFeatures = [
    { text: "Free challenges", included: true },
    { text: "5 Figma design files/month", included: true },
    { text: "2 premium challenges/month", included: true },
    { text: "AI-enhanced solution reports", included: true },
    { text: "Unlimited solution screenshots", included: true },
    { text: "Private solutions", included: true },
    { text: "Custom solution domains", included: true },
    { text: "View challenges solutions early", included: true },
  ];

  const yearlyFeatures = [
    { text: "Free challenges", included: true },
    { text: "Unlimited Figma design files", included: true },
    { text: "Unlimited premium challenges", included: true },
    { text: "AI-enhanced solution reports", included: true },
    { text: "Unlimited solution screenshots", included: true },
    { text: "Private solutions", included: true },
    { text: "Custom solution domains", included: true },
    { text: "View challenges solutions early", included: true },
  ];

  const Card = ({
    title,
    price,
    oldPrice,
    billingText,
    discount,
    features,
    isPopular,
  }) => (
    <div
      className={`
      relative bg-white border shadow-sm 
      w-full max-w-sm flex flex-col
      ${
        isPopular
          ? "border-blue-600 border-2 rounded-none"
          : "border-gray-300 rounded-3xl"
      }
       
    `}
    >
      {isPopular && (
       <div
  className="
    absolute left-1/2 -translate-x-1/2
    w-[calc(100%+4px)] 
    bg-[#3E54A3] 
    rounded-t-xl 
    flex items-center justify-center
    py-2
    -top-10
    sm-range:-top-6
  "
>
  <span
    className="
      italic uppercase tracking-wider font-bold 
      text-white text-sm md:text-base
    "
  >
    BEST VALUE
  </span>
</div>

      )}

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-semibold text-center mb-5 mt-4">
        {/* 👆 mt-4 = title ke upar space */}
        {title}
      </h3>

      {/* Old Price */}
      <p className="text-center text-gray-400 line-through mb-2">{oldPrice}</p>

      {/* New Price */}
      <p className="text-center text-3xl font-bold mb-4">{price}</p>

      {/* Discount */}
      <div className="flex justify-center mt-2">
        <span className="bg-blue-600 text-white text-base font-extrabold px-3 py-1 rounded-full">
          {discount}
        </span>
      </div>

      {/* Billing Text */}
      <p className="text-center text-sm text-gray-500 mt-4">{billingText}</p>

      {/* Learn More + Features together */}
      <div className="mt-4 flex flex-col items-center flex-1">
        {/* Button */}
        <button
          className="
    bg-[rgb(225_29_72_/_var(--tw-bg-opacity))] 
    text-white 
    italic 
    font-bold 
    border border-gray-300
    rounded-full 
    hover:bg-red-700 
    transition 
    flex items-center justify-center
    px-24 py-3             
    xxs-200-384:px-14      
    xxs-200-384:py-3.5     
    xxs-200-384:text-sm
    xxs-200-384:w-auto
  "
        >
          LEARN MORE
        </button>

        {/* Features List */}
        <ul
          className="
    mt-6 space-y-4 w-full max-w-xs
    xxs-200-384:px-4  
  "
        >
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full">
                <FaCheck className="w-3 h-3" />
              </span>
              <span
                className={`text-base md:text-lg leading-relaxed ${
                  feature.text.includes("Unlimited") ||
                  feature.text.includes("Figma") ||
                  feature.text.includes("premium")
                    ? "font-semibold"
                    : ""
                }`}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom spacing */}
      <div className="mt-6"></div>
      
    </div>
  );

  return (
    <section className="min-h-screen bg-background py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* 🚀 Hero Text */}
        <div className="text-center mb-16">
          <h1
            className="
    text-3xl md:text-5xl font-semibold text-foreground mb-6
    max-w-[38rem] mx-auto text-center leading-[1.375]
  "
          >
            Fast-track your developer career with{" "}
            <span
              className="
      inline-flex items-center justify-center
      px-6 py-2 text-2xl font-bold text-white 
      bg-customBlue rounded-md
      align-middle
    "
            >
              PRO
            </span>
          </h1>

          <p
            className="
    text-[22px] text-neutral-500 max-w-[65ch] mx-auto text-center
  "
          >
            Get AI-powered feedback on every solution, build portfolio-worthy
            projects, and master professional workflows with complete Figma
            files—everything you need to level up faster.
          </p>
        </div>

        {/* 🚀 Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card rounded-xl p-8 text-left"
            >
              {/* 🔹 Icon with 4.5rem box */}
              <div className="flex items-center justify-center w-[4.5rem] h-[4.5rem] rounded-md bg-[#E3E9FB] text-customBlue mb-4">
                {React.cloneElement(feature.icon, { className: "w-8 h-8" })}
              </div>

              {/* 🔹 Heading */}
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {feature.title}
              </h3>

              {/* 🔹 Description */}
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="relative max-w-[50rem] mx-auto mt-16 bg-[#3E54A3] rounded-xl p-10 text-center">
          {/* 🔵 Circle Badge */}
          <div
            className="
      absolute -top-6 left-1/2 -translate-x-1/2
      w-16 h-16 
      rounded-full 
      bg-[#334489] 
      flex items-center justify-center
    "
          >
            <span className="text-white font-bold text-2xl">PK</span>
          </div>

          {/* Heading */}
          <h2
            className="
      font-bold 
      uppercase 
      text-white 
      text-2xl 
      tracking-wide 
      [font-family:var(--font-heebo)]
      mt-8
    "
          >
            Hey! It looks like you’re based in Pakistan
          </h2>

          {/* Paragraph */}
          <p
            className="
      text-white 
      [font-family:var(--font-heebo)] 
      text-[20px] 
      mt-4 
      leading-relaxed
    "
          >
            We support Purchasing Power Parity, so a{" "}
            <span className="font-bold">60% discount</span> will be applied
            automatically at checkout 🙂
          </p>
        </div>

        {/* 🔹 Buttons Section */}
        <div className="max-w-[50rem] mx-auto mt-10 flex justify-center">
          {/* Outer For Teams Button */}
          <div
            className="
      border border-gray-300 
      bg-white
      rounded-full 
      px-1.5 py-1.5   /* 👈 spacing kam kar di */
      flex items-center 
      gap-2
      hover:bg-gray-100 
      transition-colors
    "
          >
            {/* Inner For Individuals Button */}
            <button
              className="
        bg-[#3E54A3] 
        text-white 
        font-medium 
        italic 
        uppercase 
        text-sm md:text-lg
        px-8 py-3
        rounded-full 
        hover:bg-[#334489] 
        transition-colors
      "
            >
              For individuals
            </button>

            {/* For Teams Label */}
            <span
              className="
        text-black 
        font-bold 
        italic 
        uppercase 
        text-sm md:text-lg
        ml-2
        pr-5
      "
            >
              For teams
            </span>
          </div>
        </div>

        {/* 🚀 Pricing Cards */}
        <div
          className="
    flex flex-col md:flex-row 
    justify-center gap-16 mt-16
    s-range:flex-col s-range:items-center
    xxs-range:flex-col xxs-range:items-center xxs-range:gap-16
    xxs-400-500:flex-col xxs-400-500:items-center xxs-400-500:gap-16
  "
        >
          <Card
            title="Monthly"
            oldPrice="$12/month"
            price="$4.80/mo"
            discount="60% OFF"
            billingText="Billed monthly"
            features={monthlyFeatures}
          />

          <Card
            title="Yearly"
            oldPrice="$8/month"
            price="$3.20/mo"
            discount="60% OFF"
            billingText="$38.40 billed yearly (save 33% vs monthly)"
            features={yearlyFeatures}
            isPopular={true}
          />
        </div>

        <div
          className="
    w-full max-w-2xl mx-auto bg-gray-100 border rounded-2xl shadow 
    p-4 md:p-6 mt-12 
    xxs-320-450:max-w-sm
  "
        >
          <div
            className="
      grid gap-3 
      grid-cols-[repeat(auto-fit,minmax(80px,1fr))] 
      justify-items-center
    "
          >
            {logos.map((logo) => (
              <div key={logo.alt} className="flex justify-center items-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain"
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
