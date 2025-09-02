let a = 5;
let b = 0;


// method 1: using temp
// let temp;
// temp = b
// b = a
// a = temp
// console.log(a,b)


// method 2: wihout temp
[a, b] = [b, a];
console.log(a, b); // 10, 5



// method 3: arithematic operation
a = a + b   // 5
b = a - b   //5-0   b = 5
a = a - b   //5-5   a = 0

