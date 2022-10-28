/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "split-purple-black":
          "linear-gradient(to bottom, #8257E6 50% ,  #202024 50%);",
      },
    },
  },
  plugins: [],
};
