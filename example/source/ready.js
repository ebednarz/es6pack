'use strict';
module.exports = /^(?:interactive|complete)$/.test(document.readyState) ?
  Promise.resolve() :
  new Promise(resolve => document.addEventListener('DOMContentLoaded', resolve));
