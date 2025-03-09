/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#f0c473',
        'danger': '#dc3545'
      }
    },
  },
  plugins: [],
}

