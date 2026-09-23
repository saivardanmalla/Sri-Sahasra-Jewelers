/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF7F2",
        champagne: "#E9DDC9",
        beige: "#F1EAE0",
        charcoal: "#1C1A17",
        coal: "#262320",
        gold: {
          DEFAULT: "#C6A15B",
          light: "#E3C888",
          deep: "#A8802E",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.22em",
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(28,26,23,0.18)",
        gold: "0 8px 30px -8px rgba(198,161,91,0.45)",
      },
      animation: {
        "fade-slow": "fadeSlow 12s ease-in-out infinite",
      },
      keyframes: {
        fadeSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.75" },
        },
      },
    },
  },
  plugins: [],
};
