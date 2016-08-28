'use strict';
var fs = require('fs');
var jsStringEscape = require('js-string-escape');
var uglifyJs = require("uglify-js");

var PACKAGE_FILE = './distribution/es6pack.js';
var minified = uglifyJs.minify('./source/es6pack.js');

console.info(Buffer.byteLength(minified.code, 'utf8') + ' bytes');

var distributionString = jsStringEscape(minified.code);
var packageScript = 'module.exports = "' + distributionString + '";\n';

fs.writeFileSync(PACKAGE_FILE, packageScript);
