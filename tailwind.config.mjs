/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rethink: ["var(--font-rethink-sans)", "sans-serif"],
        passionsConflict: ["var(--font-passions-conflict)", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primarytext: "#e5e5e5",
        secondarytext: "#a3a3a3",
        borderColorTransparent: "rgba(107, 114, 128, 0.1)",
      },
      textStrokeWidth: {
        thin: "1px",
        medium: "2px",
        thick: "3px",
      },
      textStrokeColor: {
        black: "#000",
        white: "#fff",
        custom: "#6c8de9", // Add custom colors
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-outline": {
          color: "transparent",
          "-webkit-text-stroke": "1px #000", // Default stroke
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
