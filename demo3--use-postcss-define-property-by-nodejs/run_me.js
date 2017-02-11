// https://github.com/daleeidd/postcss-define-property

// dependencies
var fs = require("fs")
var postcss = require("postcss")
var defprop = require("postcss-define-property")

// css to be processed
var css = fs.readFileSync("input.css", "utf8")

// process css
var output = postcss()
  .use(defprop())
  .process(css)
  .css

console.log(output); // <-- Here we are