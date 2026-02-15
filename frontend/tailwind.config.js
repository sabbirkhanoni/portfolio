/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
  // Add this to enable smooth scroll globally
  corePlugins: {
    scrollBehavior: true,
  }
}