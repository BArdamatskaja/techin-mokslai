"use strict";

let pirmadienis = Number(prompt("Kiek pamokų yra pirmadienį?"));
let antradienis = Number(prompt("Kiek pamokų yra antradienį?"));
let treciadienis = Number(prompt("Kiek pamokų yra trečiadienį?"));
let ketvirtadienis = Number(prompt("Kiek pamokų yra ketvirtadienį?"));
let penktadienis = Number(prompt("Kiek pamokų yra penktadienį?"));

let bendras =
  pirmadienis + antradienis + treciadienis + ketvirtadienis + penktadienis;

console.log("Pamokų skaičius: " + bendras);
console.log("Tai sudaro minučių: " + bendras * 45);
