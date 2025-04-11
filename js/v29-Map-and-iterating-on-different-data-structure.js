console.log('===================Map (Data Structure)===================')

// Map : Built-in object, Map hold key-value pairs, maintain the order, unique key,
    
// 1. creating Map
const myMap = new Map();

myMap.set('IN', 'India');
myMap.set('UAE', 'United Arab Emirates');
myMap.set('US', 'United State of America');
// myMap.set('IN', 'INDO')  this will update the value of the 'IN' Key 

// 2. Using method of Map()
console.log(myMap);
console.log("=============================================");

console.log(myMap.keys());
console.log("=============================================");

console.log(myMap.values());
console.log("=============================================");

console.log(myMap.has('IN'));
console.log("=============================================");

// for (const k of myMap.values()){
//     console.log(k)
// }



// Iterating on the elements

/*
let entries = myMap.entries();
for (let [key, value] of entries) {
    console.log(key, value);
}   */



// 3. simple method to iterate on elements of the map using of


for (const [keys, values] of myMap){
    console.log(keys, ':-->' ,values);
};




// loop in python; for <iterator> in <interation>:

//  In js we have loop as follows

const sentence = 'Hello dear, My microprocessor';

for (const words of sentence){ // it kind of memebership(in) operator of python i.e of
    console.log(words);
};
console.log(sentence.length);


console.log('-----------------------------------------------')

// Object iteration
const object1 = {
    animal : 'Lion',
    weight : '2400kg'
}
for (const key in object1) {
    console.log(`${key} --> ${object1[key]}`)
}


//  similarly done for Arrays as well




// ++++++++++++++++++ for each loop +++++++++++++++++++++++ 






/*
---------------------|-----------------------
    Iterable	     \   Not Iterable                
---------------------|-----------------------
    Arrays           \   Plain Objects
    Strings          |   Errors
    Maps             \   Math Object
    Sets             |   Global Object
    Typed Arrays     \   Dates
    Arguments object |
    NodeLists        \
    Generator objects|
                     \
---------------------|-------------------------
*/





//  forEach : builtin method for the list, allow to execute a provided function once for each array element
//   it does not return the array output
/* SYNTAX: 

    array.forEach(function(currentValue, index, array) {
                // code to execute for each element
    });
*/


// with asynchrous function

arr = [1, 2, 3, 4, 5]


console.log("******************* in    operator(membership operator)***********************")
// this below loop print the array each element
for (const k in arr){
    console.log(arr[k])
}

console.log("******************* of    operator***********************")
// this below loop print the array each element
for (const k of arr){
    console.log(arr[k-1])
}

console.log("****************forEach**************************")
// print each element of the array
arr.forEach( function(item, currentItemIndex, array){
    console.log(item)
    // console.log(item, currentItemIndex, array)
})



console.log("******************************************")
// perform item*2 operation on each element of the array
arr.forEach( function(item, currentItemIndex, array){
    console.log(item *2)
    // console.log(item, currentItemIndex, array)
})



console.log("******************************************")
// with anonymous arrow function
arr.forEach( (itemName) =>{
    console.log(itemName *100)
    // console.log(itemName, currentItemIndex, array)
})
