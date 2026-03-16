const sumAll = function (a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
    return "ERROR";
  }
  if (a > b) {
    let bigger = a;
    a = b;
    b = bigger;
  }
  let inBetween = [];
  for (let i = a; i <= b; i++) {
    inBetween.push(i);
  }
  let sum = inBetween.reduce((acc, curr) => acc + curr);
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
