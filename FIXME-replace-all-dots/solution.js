// Original code
var replaceDots = function(str) {
  return str.replace(/./, '-');
}

// My Solution
var replaceDots = function(str) {
  return str.replace(/\./g, '-');
}