const scss = require('rollup-plugin-scss')
const sass = require('sass')

export default {
  input: 'index.js',
  output: {
    file: 'build/bundle.js',
    format: 'cjs'
  },
  plugins: [
    scss({
      output: 'build/bundle.css',
      sass: sass
    })
  ]
}