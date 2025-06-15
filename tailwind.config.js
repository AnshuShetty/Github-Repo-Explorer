/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-blue': '#090C0E', // example dark navy blue
      },
      boxShadow: {
        'blue-glow': '0 4px 20px rgba(59, 130, 246, 0.5)', // Tailwind blue-500
      }
    },
  },
  plugins: [],
}

