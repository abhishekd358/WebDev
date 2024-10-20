// 1. conversion of string to number (Number and parseInt and parseFloat)
let num = Number('123')
let intNum = parseInt('123'); // 123
let floatNum = parseFloat('123.45'); // 123.45

// 2. conversion of Number to string using String and using toString() => builtin method
let strTrue1 = String(123);
let strTrue5 = new String(123); // type is Object

let ab = 123;
let strTrue2 = ab.toString(); // toString() => js builtin Method

/*
    ----------------important-----------
    null > 0 ==> console.log(null >= 0);

Special Cases:

null to Number: Number(null) results in 0.
null to Boolean: Boolean(null) results in false.
undefined to Number: Number(undefined) results in NaN.
undefined to Boolean: Boolean(undefined) results in false.

*/


// example
let score = '123abc'
console.log(typeof score); // type is => String  

let changeToNumber = Number(score);
console.log(changeToNumber); // print => NaN
console.log(typeof changeToNumber); // type is => Number