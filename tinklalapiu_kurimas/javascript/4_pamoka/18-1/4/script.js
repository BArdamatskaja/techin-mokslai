"use strict";

function sumNumbers(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumNumbers([1, 4, 8]));
