"use strict";

let a = Number(prompt("Kiek yra monetų po 5 ct?"));
let b = Number(prompt("Kiek yra monetų po 20 ct?"));
let c = Number(prompt("Kiek yra monetų po 2 Lt?"));

let result = 0.05 * a + 0.2 * b + 2 * c;

console.log("Taupyklėje yra " + result + " Lt.");
