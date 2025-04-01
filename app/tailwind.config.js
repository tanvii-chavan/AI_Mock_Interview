module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"], // Ensure paths are correct
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")], // Make sure this line exists
};
