module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gradient-start': '#ABB3B7',
        'gradient-end': '#AEE2E5',
        'main-text-light': '#151515',
        'main-text-dark': '#E0E0E0',
        'header-light': '#FFFFFF',
        'header-dark': '#333333',
        'main-light': '#E0E0E0',
        'main-dark': '#1A1A1A',
        'custom-gradient-dark-start': '#333333',
        'custom-gradient-dark-end': '#444444'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #ABB3B7, #AEE2E5)',
        'custom-gradient-dark': 'linear-gradient(to right, #333333, #444444)',
      },
      screens: {
        '470px': '470px',
      },
    },
  },
  plugins: [],
}
