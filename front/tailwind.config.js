/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      imp: "#f9a8d4",
      primary: "#fce7f3",
      secondary: "#fdf4ff",
      text: "#9d174d",
    },
    extend: {
      fontFamily:{
        'nunito':["Nunito", 'sans-serif']
      }
    },
  },
  plugins: [],
};
