console.log("==============map() Array Method========================")

arr = [1, 2, 3, 4, 5]


// technique general using function 
const arrOutput = arr.map( function (item){ 
    return item *2 // map : implemented expression on every element of the arra

})
console.log(arrOutput)




// technique second using arrow function
const arrOutput2 = arr.map( (eachitemofarray) => {
    return eachitemofarray *10 });
console.log(arrOutput2)


// technique third using anynomous arrow function
const arrOutput3 = arr.map( (eachitemofarray) => eachitemofarray *1000 )
console.log(arrOutput3)

console.log('==============filter() Array Method=====================')

//  filter() :  creates a new array, Only elements that return 'true' for the test condition are included in the new array, Does not modify the original array

/* SYNTAX

let filteredArray = array.filter(function(currentValue, index, array) {
  // return true to keep the element, false otherwise
})

*/


let numbers = [1, 2, 3, 4, 5, 6];

const numberOut = numbers.filter(function(num) {
    return num % 2 === 0;
  });
console.log(numberOut)


//  similarly as map(),there can pass call back function can be arrow, anynomous arrow function to the filter as well.


console.log('==============.reduce() Array Method=====================')
/* 
used to sum numbers, 
flatten arrays,
accumulate a result based on an array's values.

SYNTAX:-
arrayName.reduce(callback(accumulator, currentValue, index, array), initialValue);
*/


array1 = [1, 2, 3, 4, 5]
const var1 = array1.reduce(function (accum, eachElementOfArray){
    return accum + eachElementOfArray
}, 10); // 10 is inital value of accumulator
console.log(var1)



const var2 = array1.reduce((accum, eachElementOfArray) => accum + eachElementOfArray, 100); // 10 is inital value of accumulator
console.log(var2)