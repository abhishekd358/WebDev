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






// -----------------------------ARRAY --------------------------------------------------------
// 👉🏼 Array convert into String ''
// Splice -> delete the complete index from array completely
// delete -> only wipe the value of that index , making empty slot

// We can assign value to the Empty Slot
// index of EMpty Slot is not present
// Delete doesn’t shrink array length,So Better: use splice() for removing.
// .length property is writable/changable
// Default sort is lexicographic.so to sort number : nums.sort((a,b)=>a-b);

let arr = [1, , 3];  
console.log(arr) //[ 1, <1 empty item>, 3 ]
console.log(arr.length); // 3
console.log(arr[1]);     //  undefined (but slot exists!)
arr[1] = 'hey' // We can assign value to the Empty Slot
console.log(1 in arr); // false (hole) , index of EMpty Slot is not present
// Delete doesn’t shrink array

delete arr[0];
console.log(arr);       // [empty, empty, 3] Delete doesn’t shrink array
// Better: use splice() for removing.




// ===== sort array
let nums = [10, 2, 5];
nums.sort();
console.log(nums); // [10,2,5] ❌ (string compare)
nums.sort((a,b)=>a-b);
console.log(nums); // [2,5,10] ✅

// =====length property is writable
let arr = [1,2,3,4,5];
arr.length = 2;
console.log(arr); // [1,2] (array truncated)

arr.length = 5;
console.log(arr); // [1,2, empty ×3]




// ---------------------------------------STRING----------------------------------------
// 👉🏼+ ke saath string concatenation hota hai, lekin -, *, / me string number me convert hota hai.

console.log(" " == 0); // true // Number is present so " "===> convert to 0
console.log("" == 0);  // true  // Number is present so ""===> convert to 0
console.log("" == false); // true  // Boolean is present so ""===> convert to false


// 👉🏼Lexicographic comparison ("2" > "12" is true).




// ------------------------------------ OBJECT -------------------------
// 👉🏼 keys are always string
// 👉🏼 do alag objects kabhi equal nahi honge (jab tak same reference na ho).
// 👉 Number keys hamesha ascending order me aate hain, baaki keys insertion order follow karte hain.