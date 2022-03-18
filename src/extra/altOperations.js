const alternatingOperation = (arr) => {
  let result = 0;
  arr.forEach((number, index) => {
    if (index === 0) {
      result = number;
    } else if ((index % 2) === 0) {
      result -= number;
    } else {
      result += number;
    }
  });
  return result;
};

console.log(alternatingOperation([1, 2, 3]));
// => 0

console.log(alternatingOperation([3, 4, 5, 7, 8, 3, 2, 4, 5, 8]));
// => 9

// node src/extra/altOperations.js
