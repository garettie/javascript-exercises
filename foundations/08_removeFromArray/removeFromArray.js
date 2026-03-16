const removeFromArray = function (array, ...rem) {
  return array.filter((val) => !rem.includes(val));
};

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
