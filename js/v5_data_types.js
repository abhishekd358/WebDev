"use strict";   // treate the code as standard per new version

/* 

MAINLY THERE ARE FOLLOWING DATA TYPES :
 1. 7-kind of primitive data types
    Number
    Boolean
    BigInt
    String
    Symbol    
    Undefined
    Null
    
    

 2.3-kind of Non-primitive data types (reference)
    Object
    Array
    Function
*/


// number
// string 
let name = 'ABhi'
let backtickString = `Hello, ${name}`; // Template literals , Print in formating 


// template literal also use when if you writing multi-lines string 

//  Boolean
// undefined

// null
let emptyValue = null;

// console.log(typeof(emptyValue))  // type => object

// Symbol
let uniqueId = Symbol('id');  // unique representation
// console.log(typeof(uniqueId))  type is => Symbol

// BigInt   : Two ways to deaclare the BigInt
let bigIntValue = BigInt(123456789012345678901234567890);
let anotherBigInt = 123456789012345678901234567890n;



// -----------------------------Non-Primitive (Reference) Data Types---------------------------------  

// object  => python dictionary treated as Object in js
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    isEmployed: true
};


// Array =>  treated as Object in js
let fruits = ['apple', 'banana', 'cherry', 12, '21']; // type => Object
let makeArr = Array(1, 2, 3, 4, 5) // type => Object
// console.log(typeof makeArr)
// console.log(Array.isArray(makeArr))
//console.log(fruits)
// console.log(Array.isArray(fruits))

// Function
function greet(name) {
    return `Hello, ${name} !!!`;   // type is => function
}

// RegularExperession
let pattern = /ab+c/; // type is => Object

// Date
let now1 = new Date(); // type is => Object
let now2 = Date();    // type is => String



// ============================== Special Values ============================================

// NaN
let notANumber = NaN;  // type is => number

// Infinity and -Infinity
let positiveInfinity = Infinity; // type is => number 
let negativeInfinity = -Infinity; // type is => number



/*
=======================type of ========================

console.log(typeof 42); // "number"
console.log(typeof 'Hello'); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is actually a bug in JavaScript, null is not an object)
console.log(typeof Symbol('id')); // "symbol" for unique
console.log(typeof BigInt(123456789012345678901234567890)); // "bigint"
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (arrays are a type of object in JavaScript)
console.log(typeof function() {}); // "function"
console.log(typeof new Date()); // "object"
console.log(typeof /ab+c/); // " "

*/