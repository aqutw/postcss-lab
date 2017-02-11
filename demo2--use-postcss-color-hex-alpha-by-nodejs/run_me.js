// https://github.com/postcss/postcss-color-hex-alpha

// dependencies
var fs = require("fs")
var postcss = require("postcss")
var colorHexAlpha = require("postcss-color-hex-alpha")

// css to be processed
var css = fs.readFileSync("input.css", "utf8")

// process css
var output = postcss()
  .use(colorHexAlpha())
  .process(css)
  .css

console.log(output); // <-- Here we are