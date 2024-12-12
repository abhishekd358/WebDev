/*

two type of memory:
stack : Primitve data type, copy of variable // it is kind of deep copy

heap : Non - primitive data type, reference of variable // it kind of shallow copy


*/

//1 Stack

let name1 = 'Abhijit'
let name2 = name1
name2 = 'Alex'
console.log(name1)
console.log(name2)



// 2 Heap : reference
let obj1 = {
    name : 'Abhijit',
    rollNo: 123
}

let obj2 = obj1
console.log(obj2)


obj2.rollNo = 1

console.log(obj1)
console.log(obj2)



//  we can't able to make a copy of the non -primitve data type so how can i make copy?
//  we can use spread method

let object1 = {
    name : 'Abhijit',
    rollNo: 123
}

let object2 = {...object1}  // now we have all keys of the Object1
// if we change the object2 properties(keys) value we not see any change in Object1
object2.name = "Herculus"
console.log("-----this is object1-----\n",object1,"\n-----below you an see name changes-----\n",object2);
