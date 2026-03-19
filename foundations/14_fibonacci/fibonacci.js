const fibonacci = function (num) {
  if (num === 0 || num === "0") return 0;
  if (num < 0) return "OOPS";
  let curr = 1;
  let prev = 0;
  for (let i = 1; i < num; i++) {
    let next = curr + prev;
    prev = curr;
    curr = next;
  }
  return curr;
};

// Do not edit below this line
module.exports = fibonacci;
