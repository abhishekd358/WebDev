
// deconstruction is way to write the Object key in easy accessible way with best way to maintainable code

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