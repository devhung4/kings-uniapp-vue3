// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }

const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    tailwindcss({
      config: './tailwind.config.js',
    }),
    autoprefixer({
      remove: false,
    }),
  ],
}