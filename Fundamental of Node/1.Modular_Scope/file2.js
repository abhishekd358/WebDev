// Browser JavaScript

// Browser ka global object → window hota hai.

// Jo bhi variable without var/let/const likhte ho ya top-level var,
// wo automatically global ban jaata hai.

num = 10;           // becomes window.num
var num1 = 20;      // also window.num1
window.num2 = 30;   // explicitly global
console.log(window.num, window.num1, window.num2); // 10 20 30


// ✅ All 3 are global (attached to window).
