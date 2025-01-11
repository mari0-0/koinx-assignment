/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0052FE",
        secondary: { 100: "#44475B", 200: "#0082FF", 300: "#FAA002", 400: "#E8F4FD"},
        background: "#EFF2F5",
        bear: {100: "#EE68551A", 200: "#E96975"},
        bull: {100: "#EBF9F4", 200: "#14B079"}
      },
      fontFamily: {
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
