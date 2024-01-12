/** @type {import('tailwindcss').Config} */
export default {
  content: [    
    "./*.html",
    "./*.js",
],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/homepage/hero-bg-mobile.jpg')",
      },
      fontFamily: {
        'custom': ['League Spartan',],
      },
    },
  },
  plugins: [],
}

