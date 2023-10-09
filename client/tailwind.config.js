/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "3rem",
        lg: "5rem",
        xl: "6rem",
        "2xl": "8rem",
      },
    },
    extend: {
      colors:{
        shadeColor: "#F1F0FF",
        titleColor: "#151875",
        designColor: "#FB2E86",
        textColor: "#ACABC3",
        footerColor: "#8A8FB9",
      },
      boxShadow:{
        detailShadow: "0px 0px 25px 10px #F6F4FD"
      }
    },
  },
  plugins: [],
};
