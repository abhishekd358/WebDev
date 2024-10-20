
// array can hold heterogenous type of items
// array is a data type collection of multiple items
let arrrr = new Array(0,1,3,4) 
console.log(Array.isArray(arrrr)) // return true even after we declare it as object but still it is an Array
console.log(typeof arrrr) //object
console.log(arrrr.pop())


console.log("--------------------------------")


const arr = [10, 11, 13, 14,'mistic']
console.log(Array.isArray(arr)) // true 
console.log(typeof arr) // object
console.log(arr)
console.log(arr.push('man')) 
console.log(arr)
console.log(arr.length) // this printing the length of array
//---------------------pop---------------------------------
console.log(arr.pop()) // printing the popping item

//----------------------slice-> it print the sub-array and don't modify original array ----------------------------
console.log(arr.slice(1, 3))
console.log(arr)

//----------------------splice-> it print the sub-array and remove the part from original array---------------------------
console.log(arr.splice(1, 3))
console.log(arr)

// due to splice now arr is [10, 'mistic']

//----------------------unshift: inserting a element from head (shifiting existing elements towards the right by adding new elements)------------------------------
arr.unshift('god bless u')
console.log(arr)

//----------------------shift: deleting unshifted element towards the left------------------------------
arr.shift('god bless u')
console.log(arr)