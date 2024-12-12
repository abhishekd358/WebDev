


// this is called spreading : basically we extending the array or object taking reference of other
let arr = ['a', 'b', 'c', 'd']

let arr2 = [...arr, 1, 2] // spread operator is used to create a new array by copying elements from an existing array
console.log(arr2)

let arr3 = ['malcom','nerk',...arr]
console.log(arr3)


// same for object as well

let obj1 = {
    rollNo : 21,
    name : 'Ned Stark'
}

let obj2 = { // this obj2 is extend i.e spread using ob1
    ...obj1,
    crown:'Winterfell'
}
console.log(obj2)




// ========================== Rest========================

// it used in functions argument or parameter

function PrintNum(...num){// we can pass as much arguments as we want
    console.log(num)
}

PrintNum(1,2,3, 4, 5, 5) // return a arry 