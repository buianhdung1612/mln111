const config = {
  content: [
    "./src/components/**/*.{ts,tsx}",
    "./src/layouts/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#322923",
        secondary: "#ff482a",
        third: "#b7a367"
      },
      fontFamily: {
        secondary: ["Northwell Alt", "sans-serif"],
      },
      screens: {
        "2xl": { max: "1540px" },
        xl: { max: "1280px" },
        lg: { max: "1024px" },
        md: { max: "767px" },
        sm: { max: "479px" },
      },
    },
  },
};

export default config;
