const Matrix = (n) => {
  const myMatrix = [[]];
  const listOfStoredValues = new Array(10);
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (j === 0) myMatrix[i] = [];
      const randomNumber = Math.floor((Math.random() * 10));
      myMatrix[i].push(randomNumber);
      if (listOfStoredValues[randomNumber] >= 0 && listOfStoredValues[randomNumber] < 10) {
        myMatrix[i][j] = undefined;
      } else {
        listOfStoredValues[randomNumber] = randomNumber;
      }
    }
  }
  return myMatrix;
};

// there is some minor improvement in the performance of the code:

// No inital definition for matrix are rquired for vectors in JS
// use a value for a random value as a position to know if the value is already in the matrix
// could be areally confusing to read
// Exisiting methods for arrays could be used to improve this functionality

// const Matrix = (n) => {
// let myMatrix = [];
//   for (let i = 0; i < n; i += 1) {
//     for (let j = 0; j < n; j += 1) {
//       const randomNumber = Math.floor((Math.random() * 10));
//       if(j === 0) myMatrix[i] = [];
//       myMatrix[i][j] = myMatrix.flat().includes(randomNumber) ? undefined : randomNumber;

//     }
//   }
//   return myMatrix;
// };

// functional programming could improve this function:

// const Matrix = n => {
//  let registeredValues = []

//  const myMatrix = [...new Array(n)].map(() =>
//   [...new Array(n)].map(() => Math.floor(Math.random() * 10))
//  )

//  return myMatrix.map(row =>
//   row.map(value =>
//    registeredValues.includes(value)
//     ? undefined
//     : registeredValues.push(value) && value
//   )
//  )
// }

// All of this can be merge into a single return:
// everything could imporve "prettifing" the code
// const Matrix = n => {
//  let registeredValues = []

//  return [...new Array(n)]
//   .map(() => [...new Array(n)].map(() => Math.floor(Math.random() * 10)))
//   .map(row =>
//    row.map(cell =>
//     registeredValues.includes(cell)
//      ? undefined
//      : registeredValues.push(cell) && cell
//    )
//   )
// }

console.log(Matrix(3))
console.log(Matrix(5))

// node src/extra/matrix.js

// node src/extra/matrix.js
