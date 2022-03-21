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


// Minor Suggest:
// const alternatingOperation = arr => {
//  let result = 0
//  arr.forEach((number, index) => {
//   if (!index) {
//    result = number
//   } else if (!(index % 2)) {
//    result -= number
//   } else {
//    result += number
//   }
//  })
//  return result
// }

// then, it could improve to:
// const alternatingOperation = arr => {
//  let result = 0
//  arr.forEach((number, index) => {
//   if (index && !(index % 2)) {
//    result -= number
//   } else {
//    result += number
//   }
//  })
//  return result
// }

// then, it could improve to:
// const alternatingOperation = arr => {
//  let result = 0
//  arr.forEach(
//   (number, index) => (result += index && !(index % 2) ? -number : number)
//  )

//  return result
// }

// Anyway all of this could be merge into a single return usign functional programming:

// const alternatingOperation = arr =>
//  arr.reduce((acc, curr, i) => (!(i % 2) ? acc - curr : acc + curr))

console.log(alternatingOperation([1, 2, 3]))
// => 0

console.log(alternatingOperation([3, 4, 5, 7, 8, 3, 2, 4, 5, 8]))
// => 9

// node src/extra/altOperations.js

// node src/extra/altOperations.js
