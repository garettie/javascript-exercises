const palindromes = function (string) {
  let trim = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  let rev = trim.split("").reverse().join("");
  if (trim === rev) return true;
  else return false;
};

// Do not edit below this line
module.exports = palindromes;
