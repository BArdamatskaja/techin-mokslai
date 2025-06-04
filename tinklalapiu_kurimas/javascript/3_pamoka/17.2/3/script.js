"use strict";

function patikra(x) {
  const y = x % 2 === 0;
  return y;
}
let x = Number(prompt("Tikrinamas skaičius:"));
if (x % 2 === 0) {
  console.log("Skaičius lyginis");
} else {
  console.log("Skaičius nelyginis");
}
