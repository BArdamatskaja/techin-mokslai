"use strict";

function reiksme(x) {
  let y = 16 * Math.pow(x, 4) + 2 * x;
  return y;
}
let x = Number(prompt("x reikšmė:"));
const yReiksme = reiksme(x);
console.log(yReiksme);
