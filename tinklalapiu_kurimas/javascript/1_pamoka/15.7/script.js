"use strict";

let m = Number(prompt("Puodelių, kuriuose reikia supakuoti, skaičius:"));

let n = m / 3;
let k = m - n.toFixed(0) * 3;

console.log("Pilnų dėžių skaičius: " + n.toFixed(0));
console.log("Nesupakuotų puodelių skaičius: " + k);
