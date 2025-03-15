/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dosis)"],
        dosis: ["var(--font-dosis)"],
        caveat: ["var(--font-caveat)"],
        knewave: ["var(--font-knewave)"],
        montserrat: ["var(--font-montserrat)"],
      },
      colors: {
        // primary: "#f9efe7",
        // secondary: "#555555",
        // accent: "#fb923c",
        // highlight: "#fb923c",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
