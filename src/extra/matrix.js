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

console.log(Matrix(3));

console.log(Matrix(5));

// node src/extra/matrix.js
