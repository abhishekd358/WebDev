const object1 = new Object() // singelton
const object2 = {} // Non-singleton


const obj1 = {
    name : 'Lion',
    weight: '140kg'
}

const obj2 = {
    name:'Tiger',
    weight: '200kg',

    healthDeatils:{
        health: 'Perfect',
        breadType:{
            bread : 'Bengal-Tiger'
        }
    }
}

// if want to access nested things then have to use 'dot' Notation
console.log(obj2.healthDeatils.breadType.bread)

// ? => used because it infers that if the healthDetails available then only it return value otherwise it return  "undefined"
console.log(obj2.healthDeatils?.breadType.bread)

// Object.assign => it merge the object
const obj3 = {
    name: 'Elephant',
    weight: '2000kg'
}

console.log(Object.assign(obj1, obj3))   // merge both the object 


// spreading : ...object-name  use to merge
console.log({...obj1, ...obj3})


// Object properties
console.log(Object.keys(obj3)); // return list of all properties
console.log(Object.values(obj3)); // return list of all values
console.log(Object.entries(obj3)); // return the nested list of key, value list
// Object.create(obj-name, properties)  => for this property one new object has to create which has its own properties and that going merge with the array that you want to.