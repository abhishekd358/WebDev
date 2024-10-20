
// ...parameter_name  => this used to pass multiple parameter 

function myFunc(p1, p2, ...p){
    return `p1:${p1} \np2:${p2} \nall values of p ${p}`
}

console.log(myFunc(10, 80, 70, 60, 50));


// =================Important====================
// in nested functions the child function can able to access variable of it parent function
// similarly, same for the conditioning i.e if


// ====================== this. ==================
// in current context you use the this.variable-name to access the value of Object it accesible. 
// but it not works for the functions

// in node => in global scope console.log(this) => {}
// in browser engine => console.log(this) => window{ 0: .., 1:..,....}



// anynonmous arrow function
const mul = (num1, num2 ) => num1*num2
console.log(mul(4, 7));


// Immediately Invoked Function Expression (IIFE)

// it used to remove the pollution from the global scope. Also it run instantly.

// decalration of IIFE  

(function meraFunc(){
    console.log('Mera Function is Running');
})(); // NOTE:---->>> always use ; to end the IIFE


// for arrow function

((name) => {
    console.log(`its working, ${name}`)
})('IIFE');



