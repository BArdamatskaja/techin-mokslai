"use strict";

let a = Number(prompt("Sienos ilgis:"));
let h = Number(prompt("Sienos aukštis:"));
let k = Number(prompt("Plytos kaina:"));

let result = (a * h) / (0.2 * 0.1);
let kaina = result * k;

console.log("Plytų kiekis: " + result.toFixed(0));
console.log("Plytos kainuos: " + kaina.toFixed(2) + " Lt");
