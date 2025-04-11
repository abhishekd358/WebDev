// NaN is Not Equal to Anything, Even Itself
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

// To check if a value is NaN, use Number.isNaN():
let value3 = 123;
console.log(Number.isNaN(value3)); // false

// undefined increment to NaN
let x;
console.log(x++); // NaN (undefined is coerced to NaN)


/* ---------------------------------------------------------------------------------------------------------

null => type is object, Intentional absence of any object value
NaN => type is Number,  result of invalid numeric operations, 
undefined => type is undefined, Variable declared but not assigned a value      


*/







// ---------------------------------------------------------------------------------------------------------
//    ![] => false 
//    [] => true
// comapring of array and objects
console.log([] == []); // false (different references)
console.log({} == {}); // false (different references)







// ---------------------------------------------------------------------------------------------------------
// Two parameter for ParseInt it act as BASE  ; by deafult it set to BASE 10

let intVal = parseInt('123abc', 10); // 123

console.log(typeof intVal)
console.log(intVal)






// ---------------------------------------------------------------------------------------------------------
console.log([1] + [7]); // '17' (arrays are converted to strings and concatenated)
let x1 = {} + []
console.log(x1); // '[object Object]' (object is converted to string)
console.log(typeof x1) // type is => string






// -----------------------------------------Object Comparison----------------------------------------------------------------
let obj1 = {};
let obj2 = {};
console.log(obj1 == obj2); // false (different object references)






// ---------------------------------------------------------------------------------------------------------
