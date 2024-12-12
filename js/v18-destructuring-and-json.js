
// destructuring is way to write the Object key in easy accessible way with best way to maintainable code

const obj = {
    nameOfTheCompany: 'Mericasa. Inc',
    CompanyNetProfit: '800Million',
    CompanyEstablishment: 2019,
    CompanyEmployment:{
        IT : 3000,
        NonIT: 2000
    }

}
// regular way 
console.log(obj.nameOfTheCompany)
console.log(obj.CompanyEmployment.IT)


// desconstruction : easy way

const {CompanyNetProfit} = obj
console.log(CompanyNetProfit)

// another way
const {CompanyNetProfit: Profit} = obj
console.log(Profit)





// ------ complicated example -----------

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

// destructuring only one 
const { healthDeatils: { breadType: { bread } } } = obj2;
console.log(bread); // 'Bengal-Tiger'


/*

// Destructuring with nested two properties at same i.e 'health' and 'bread'
const { healthDeatils: { health, breadType: { bread } } } = obj2;
console.log(health);  // 'Perfect'
console.log(bread);   // 'Bengal-Tiger'


// accessing the perfect value 



Mehod 1:-----

const { healthDeatils: { health } } = obj2;
console.log(health); // 'Perfect' 

Method 2:----
// const {health} = obj2.healthDeatils;
// console.log(health);


*/
console.log("==== array destructuring.====");

// array destructuring

let arr = ['mesopotnia', 'Kaling', 'Oracus']

let [var1, var2, var3] = arr // storing the mesopotnia -> var1,kaling -> var2,Oracus-> var3
console.log(var1)
console.log(typeof(var1)) // Sring
console.log(var2)
console.log(var3)

let [v1, , V3] = arr // we not storing 'kaling' value to any other object
console.log(v1, V3)