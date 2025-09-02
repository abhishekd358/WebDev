// class Vehicle{
//     constructor(distance, time){
//         this.distance = distance,
//         this.time = time
//     }

//     speed(distance, time){
//         return `speed: ${distance/time}km/h`    
//     }
// }


// // motorcycle

// class Bike extends Vehicle{
//     constructor(distance, time, consummation){
//         super(distance, time);
//         this.consummation = consummation
//     }

//     mileage(distance,consummation){
//         return`mileage: ${distance/consummation} `  
//     }

// }


// const h2r = new Vehicle()
// console.log(h2r.speed(80, 2))

// const ninja = new Bike()
// console.log(ninja.mileage(10, 2))

// ==============================================array weird beahviour 

// let arr = [1, , 3];  
// console.log(arr.length); // 3
// console.log(arr[1]);     // undefined (but slot exists!)
// console.log(1 in arr)
// console.log(arr[1]== 2)
// console.log(arr[1]= 2)
// console.log(arr)



// let arr = [1,2,3];
// console.log(arr)
// console.log(arr.length)


// arr[10] = 99;
// console.log(arr); // [1,2,3, empty ×7, 99]    empty*7 beacuse current length (11) - total element consider(1,2,3 and also new added element that is 99) (11-4= 7 empty items)
// console.log(arr.length); // 11 😲

// console.log("----------------")
// let arr2 = [1,2,3];
// arr2[25] = "hello";
// console.log(arr2); // [1,2,3, empty ×22,"hello"] empty*22 beacuse current length (26) - total element consider(1,2,3 and also new added element that is "hello") so (26-4= 22 empty items)
// console.log(arr2.length); //26  



// let arr3 = [1,2,3];
// delete arr3[1];
// console.log(arr3);       // [1, empty, 3]
// console.log(arr3.length); // 3 ❌ (length same rehti hai)


// // 5. Comparison is tricky
// console.log([] == []);  // false
// console.log([1,2] == [1,2]); // false


// // 👉 Arrays are reference types, alag objects compare hote hain.

// // String coercion
// console.log([1,2,3] + [4,5]); // "1,2,34,5" (string join)
// console.log([] + []); // "" (empty string)




// const nums = [10, 2, 5];
// nums.sort((a,b)=>a-b);
// console.log(nums); // [2,5,10] ✅



// ==================================================String Weird behaviour
// null & undefined
// null == undefined → true
// Lekin null ya undefined kisi aur type se equal nahi.

// 👉 === (Strict equality) me no type coercion hota hai, types bhi match hone chahiye. 
// 👉 == (loose equality) operands ko type convert karke compare karta hai.

// Whenever you see ==:
// Check operand types.
// If mismatch → apply coercion rules:
//          String → Number
//          Boolean → Number
//          null & undefined → only equal to each other //true
// Compare final numbers.


// === (strict equality)
// No type coercion.
// Dono operands ke:
//          1.Type same hone chahiye
//          2.Value same hone chahiye
// Otherwise false



// Step 4: How to solve ANY such question in exams
// 👉 Always follow this checklist:
// Check operator
// + → string concatenation if any operand is string, otherwise numeric.
// Convert objects/arrays to primitive
// Array → .toString() (comma-joined elements)
// Object → "[object Object]"
// Special case: If you see {} at the start, check if parser treats it as a block instead of object literal.
// Example: {} + [] → block + +[] = 0
// Example: ({} + []) (force object) → "[object Object]"
