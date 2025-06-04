"use strict";
/// 1 uzduotis

function celsiusToFahrenheit(temp) {
  const fahrenheit = temp * 1.8 + 32;
  return fahrenheit;
}
const myTemp = celsiusToFahrenheit(22);
console.log(myTemp);

/// 2 uzduotis

function compareBMI(Mweight, Mheight, Jweight, Jheight) {
  const BMI = Mweight / (Mheight * 2) > Jweight / (Jheight * 2);
  return BMI;
}
const compare = compareBMI(70, 1.85, 68, 1.87);
console.log(compare);

/// 3 uzduotis

function calcRectangleArea(a, b) {
  const rectangle = a * b;
  return rectangle;
}
const rectangleArea = calcRectangleArea(5, 6);
console.log(rectangleArea);

/// 4 uzduotis

function findType(value) {
  return typeof value;
}
const type = findType("Jurgis");
console.log(type);

/// 5 uzduotis

function remainderOf(x, y) {
  const result = x % y;
  return result;
}
const remainder = remainderOf(10, 1);
console.log(remainder);

/// 6 uzduotis
// nepavyko
function callNTimes(times, fn) {
  for (let i = 0; i < times; i++);
  function hello() {
    hello = fn;
    console.log("Hello, world!");
  }
}

console.log(callNTimes(5, hello));
