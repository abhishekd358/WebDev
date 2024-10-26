//  i want to add a new functionality or you can say a method in String type which in below string a custom message for the different user names


// Adding customMsg method to the String prototype
String.prototype.customMsg = function(customName) {
    console.log('current context: ',this)
    console.log(`${this}, ${customName}!`);
};

// Using the custom method on a string instance
let msgTemplate1 = "Have a Great Day"; 
let msgTemplate2 = 'The king of Ocean'
msgTemplate2.customMsg("rake"); // Outputs: Have a Great Day, Rakesh!




//  array , string , function are children so custom method created to this particular data type can not be accesible by it parent i.e Object
// but vice versa , True




//  +++++ Intro to Inheritance ++++++

// 1. old way


const Vehicle = {
    wheels : 4,
    starring : true,
    electric: true,
    petrol : false,
}

// so merecedes is car brand means it vehicle , all property that Vehicle have can be precedes to the MercedesElectra.....so
const MercedesElectra = {
    brand: 'Mercedes',
    highSpeed: '300km/hr',
    batteryType: 'LithiumIon',
    __proto__: Vehicle  // it give accessiblity of the Vehicle obect
}

console.log(MercedesElectra.wheels) // it inherit the property of the vehicle i.e wheel



// modern way
Object.setPrototypeOf(MercedesElectra, Vehicle) // MercedesElectra accessing all property of Vehicle