const reverseString = function (string) {
  let letters = string.split("");
  letters.reverse();
  return letters.join("");
};

reverseString("123! abc! Hello, Odinite.");

// Do not edit below this line
module.exports = reverseString;
