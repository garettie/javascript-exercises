const repeatString = function (word, num) {
  if (num < 0) {
    return "ERROR";
  }
  let str = "";
  for (let i = 0; i < num; i++) {
    str += word;
  }
  return str;
};

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
