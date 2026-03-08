/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8b5cf6", // Modern Violet
          light: "#a78bfa",
          dark: "#7c3aed",
        },
        secondary: {
          DEFAULT: "#10b981", // Emerald
          light: "#34d399",
          dark: "#059669",
        },
        dark: "#0f172a", // Navy Dark
        darker: "#020617", // Rich Black
        light: "#f8fafc",
        accent: "#f59e0b",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 