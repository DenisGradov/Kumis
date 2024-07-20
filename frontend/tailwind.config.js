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
        'main-text': '#151515',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #ABB3B7, #AEE2E5)',
      },
      screens: {
        '470px': '470px',
      },
    },
  },
  plugins: [],
}
