"use strict";

let a = Number(prompt("Trapecijos ilgesniojo pagrindo plotis:"));
let b = Number(prompt("Trapecijos trumpesniojo pagrindo ilgis:"));
let h = Number(prompt("Trapecijos aukštinės ilgis:"));

let S = ((a + b) / 2) * h;

console.log("Trapecijos plotas: " + S);
