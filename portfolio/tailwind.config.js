/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: ["contact"],
  theme: {
    extend: {
      
    },
    screens: {
      'md-832':'832px',
      'max-md-832': {max: '831px'}
    }
  },
  plugins: [],
}