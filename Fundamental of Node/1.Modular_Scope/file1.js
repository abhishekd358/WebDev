// Node.js JavaScript

// Node.js me global object → global hota hai (not window).

// Har file apni ek module scope me run hoti hai,
// matlab ek file ka variable doosri file me auto-accessible nahi hota.

num = 10;          // GLobal but accesible in this file only
var num1 = 20;     // local
global.num2 = 30;  // true global inside this running process

// but in Node js this varibale not accessible in file2.js
// because Node.js treate as a modular sope . Only accessible in the current file


