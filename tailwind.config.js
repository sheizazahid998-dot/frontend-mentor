// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "xxs-200-384": { min: "200px", max: "384px" },
        "xxs-range": { min: "300px", max: "500px" },
        "xxs-400-500": { min: "400px", max: "500px" },
        "logo-stack": { min: "400px", max: "799px" },
        "xs-range": { min: "501px", max: "700px" },
        "s-range": { min: "500px", max: "767px" },
        "custom-md": { min: "701px", max: "1023px" },
        "md-lg-range": { min: "1024px", max: "1199px" },
        "lg-range": { min: "1200px", max: "1279px" },
        "logo-range": { min: "1280px", max: "1399px" },
        "xl-range": { min: "1400px", max: "1535px" },
        "2xl-range": { min: "1536px", max: "1560px" },
        "xxs-300-499": { min: "300px", max: "499px" },
        "xxs-320-450": { min: "320px", max: "450px" },
        "font-25": { min: "768px", max: "1027px" },
        "logo-icons-stack": { min: "320px", max: "570px" },
        "xxs-320-570": { min: "320px", max: "570px" },
        "sm-range": { min: "320px", max: "767px" }, 
        
      },
      height: {
        170: "170px",
      },
      maxWidth: {
        "54rem": "54rem",
        "50rem": "50rem",
      },
      colors: {
        customBlue: "rgb(62 84 163 / <alpha-value>)",
      },
      fontSize: {
        "25px": "25px",
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".logo-range-w": {
          "@screen logo-range": {
            width: "355px",
          },
        },
        ".img-2xl-range": {
          "@screen 2xl-range": {
            maxWidth: theme("maxWidth.50rem"),
          },
        },
      });
    },
  ],
};
