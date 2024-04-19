/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "ubuntu-default": "url('/src/assets/images/ubuntu-default.png')",
      },
      colors: {
        "header-grey": "#131313",
        "selection-grey": "#4a4a4a",
      },
    },

    fontFamily: {
      sans: ["Ubuntu", "sans-serif"],
    },
  },
  plugins: [],
};
