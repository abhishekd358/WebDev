
const arr1 = ['a', 'b', 'c']
const arr2 = ['x', 'y', 'z']

// making nested array with the + operator
const arrResult = arr1 + arr2
console.log(arrResult) // a,b,cx,y,z
console.log(typeof arrResult) // string type


// using push , pushing arr2 in arr1

//arr1.push(arr2)
console.log(arr1) // this change the arr1 to [ 'a', 'b', 'c', [ 'x', 'y', 'z' ] ]


// using concat method to try to merge both array
console.log(arr1.concat(arr2)) // ouput : [ 'a', 'b', 'c', 'x', 'y', 'z' ]

// using spreding method try to merge both array , beacuse it easy to merge multiple arrays at same
const spreadArray = [...arr1, ...arr2] // output : [ 'a', 'b', 'c', 'x', 'y', 'z' ]
console.log(spreadArray)
console.log(arr1)
console.log(arr2)


// from : making array with the string
console.log(Array.from("Hello Dear"))

// of : making array with exiting variables
 
const v1 = [1,3,5]
let v2 = 'Speed'
const v3 = {
    country: 'Unknown',
    population: 10000
}

console.log(Array.of(v1,v2,v3))


