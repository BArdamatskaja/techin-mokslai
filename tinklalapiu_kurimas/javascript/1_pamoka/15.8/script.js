"use strict";

let k = Number(prompt("Automobilių skaičius:"));
let m = Number(prompt("Į keltą telpa automobilų:"));

let n = k / m;
let x = k - Math.floor(n) * m;

console.log("Perkels per kartų: " + Math.floor(n));
console.log("Liks neperkelta: " + x);
