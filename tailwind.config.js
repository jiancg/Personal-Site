/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
    colors: {
      cugray: "#858585",
      highgray: "#ADADAD"
    },
    screens: {
      xss: "320px",
      sm: "344px",
      // => @media (min-width: 640px) { ... }
      sm2: "420px", // iPhone XR

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
