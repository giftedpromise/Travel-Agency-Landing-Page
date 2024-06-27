/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        "google-sans": ['"Google Sans"', "sans-serif"],
      },
      fontSize: {
        "17px": "17px",
      },
      letterSpacing: {
        tighter: "-0.04em", // -4%
      },
      borderRadius: {
        extraLarge: "1.5rem", // You can adjust this value as needed
      },
      colors: {
        primary: "#DF6951",
        secondary: "#F1A501",
        lightBlue: "#181E4B",
        lightGray: "#5E6282",
        lightGrayAlt: "#686D77",
        lightGrayAlt2: "#84829A",
        white: "#fff",
        title: "#14183E",
        subtitle: "#1E1D4C",
        lightBlack: "#080809",
        lightPink: "#8A79DF",
        navText: "#212832",
        subBg: "#DFD7F9",
      },
    },
  },
  plugins: [],
};
