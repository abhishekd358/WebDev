// =======================Conditional Ternary Operator===============================
let age = 20;
let canVote = (age >= 18) ? 'Hello ji' : 'Nahi ji'; // 'Yes'


// =======================Instance of Operator===============================

// check  is the object is an instance
let isArray = [1, 2, 3] instanceof Array; // true

console.log(isArray)

// =======================Arithmetic Operations===============================
let sum = 3+4;
let difference = 5-3;
let product = 3*4;
let quotient = 15/3;
let power = 3**4;

// unary plus : convert a value to a number
let num = +'14';

// unary Negation : convert a value to negative number
let num1 = -'4';


// =======================Comparison Operations===============================

let equal = 5 == '5';

// Strict Equal to (===): Checks if two values are equal, without type coercion.
let strictEqual = 5 === '5'; // false

let notEqual = 5 != '5'; // false

// Strict Not Equal to (!==): Checks if two values are not equal, without type coercion.
let strictNotEqual = 5 !== '5'; // true

// greater than
// less than
// greater than or equal to
// less than or equal to


// =======================Logical Operation===============================

// 1. AND (&&)
let and = (5 > 3) && (2 > 1); // true

// 2. OR (||)
let or = (5 > 3) || (2 < 1); // true

// NOT (!)
let not = !(5 > 3); // false


// =======================Bitwise Operations===============================

// AND (&)
// OR (|)
// XOR (^)    5 ^ 1	0101 ^ 0001	0100	 4
// NOT (~)
// LEFT SHIFT (<<)
// RIGHT SHIFT (>>)
// UNSINGED RIGHT SHIFT (>>>)
let unsignedRightShift = -5 >>> 1; // 2147483642


// =======================Assignment Operations===============================

let x1 = 10;

let x2 = 10;
x2 += 5; // 15

let x3 = 10;
x3 += 5; // 15
// .....................etc............


// =======================String Operations===============================

// concatenation (+)
// Template Literal ${varible_name}



 
const arr = ['a', 'b','c','d',11, 12]
console.log(arr)
console.log(arr[1])
console.log(arr.indexOf('c'))
console.log(arr.includes('c')) // return boolean value
arr.unshift('c') // inserting element from head also u can say shifting to right
console.log(arr)

arr.shift() // shifting element to left side
console.log(arr)

arr.push('x') // appending the element at tail
console.log(arr)

arr.pop() // remove the last element
console.log(arr)

arr.sort() // sort the element ascending order
console.log(arr)


const arr1= arr.slice(3, 5)
console.log(arr1)


function sqr(num) {
    return num**2
}

console.log(sqr(12))


 
