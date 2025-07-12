
const num = 4355
console.log(typeof num); // number
nu= num.toString()  // convert to string
console.log(typeof(nu)) 

const num1 = new Number(123.896 )
console.log(typeof(num1)) // object
   

const z = Number(100)
console.log(typeof z)


//================ toFixed used to round up to decimal number =====================
//console.log(num1.toFixed(2))

//================ toPrecision move the decimal point from extreme left of number by value that we pass  =====================
console.log(num1.toPrecision(4))

//====================== Math ==================================
console.log(Math.random())

// in js random function doesn't take the range so following method use========

const min = 10
const max = 20

// console.log(Math.round(Math.random() * (max-min + 1) + min ))
console.log(Math.round(Math.random()*(max-min+1)+min))



console.log(Math.floor(12.01)) // return 12, its remove the numbers after the decimal point
console.log(Math.round(12.10)) // return 12, its remove the numbers after the decimal point


console.log("----practice----")
console.log(Math.round(Math.random()*(30-10)+ 10))




console.log("----floor()-&-round()----")
// Just chop off the decimal and go down.
Math.floor(4.9); // → 4
Math.floor(4.1); // → 4
Math.floor(-4.9); // → -5 (goes more negative!)


// If decimal is 0.5 or more, it goes up.
// If less than 0.5, it goes down.
Math.round(4.4); // → 4
Math.round(4.5); // → 5
Math.round(4.6); // → 5
Math.round(-4.5); // → -4 (because it rounds away from zero)



// | `Value`  | `Math.floor()` | `Math.round()` |
// | ------ | -------------- | -------------- |
// | `4.9`  | `4`            | `5`            |
// | `4.1`  | `4`            | `4`            |
// | `4.5`  | `4`            | `5`            |
// | `-4.5` | `-5`           | `-4`           |