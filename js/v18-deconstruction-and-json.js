
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

// Destructuring with nested properties
const { healthDeatils: { health, breadType: { bread } } } = obj2;
console.log(health);  // 'Perfect'
console.log(bread);   // 'Bengal-Tiger'


// accessing the perfect value 
/*


Mehod 1:-----

const { healthDeatils: { health } } = obj2;
console.log(health); // 'Perfect' 

Method 2:----
// const {health} = obj2.healthDeatils;
// console.log(health);


*/