/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        aliceblue: '#F0F8FF',
      }
    },
  },
  plugins: [],
}

