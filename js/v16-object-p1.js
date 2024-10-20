
// with literal declaration no singleton
const o1 = {} // no singleton

// with constructor there is singleton
Object.create // create the object with the constructor and it singleton


const obj1 = {
    key : 'value',
    name: 'Alex'
}

// object access with two method
console.log(obj1['name']) // its prefer
console.log(obj1.name)


// ==================Important: Interview =======================
// Symbol => how to accesss and declare Symbol in the Object

const mySymbol = Symbol('UniqueId')

const obj2 = {
    name : 'Socrates',
    place : 'Alexandria',
    [mySymbol]: 'UniqueId' // Symbol should be declare like this
}

console.log(obj2[mySymbol]) // type is String 

// rewriting values
obj2.place = "Europe"
console.log(obj2)

// creating new key and value
obj2.person = 'Great'

// applying on Object to not get change by using => freeze Method
Object.freeze(obj2)
obj2.place = "Utopia" // not update this changes in obj2
console.log(obj2)  

// functions in Object

obj1.funcAdd = function(){
    return `Hello Dear ${this.name}!. How's doing.`; // this => is a method of Object type to access the keys data
}

console.log(obj1);
console.log(typeof obj1.funcAdd); //function
console.log(typeof obj1.funcAdd()); // string beasuse function itself giving output is string 
console.log(obj1.funcAdd());        // Hello Dear Alex!. How's doing.



 