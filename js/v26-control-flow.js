
// switch cases syntax

// switch (passExperession){
//         case no:
//             //code
//             break;

            // case no2:
            //     case no3:
                    // similar code run for both cases

//         default:
//             // code
// }

const y = 3

switch (y) {
    case 1:
        console.log('jan')
        break;
    case 2:
        console.log('feb')
        break;
    case 3:
        console.log('march')  // here no break so , this will print
    case 4:
        console.log('april') // this also going to print
        break;
    default: // runs if no case is present
        console.log("nothing") 
        break;
}


// falsy values ==> False, '', 0, -0, BigInt, 0n, null, undefined, NaN
// truthy values ==> True, ' ', '0', 1, 'false', [], {}, function(){}


// how to check array is empty
const userEmail = []
if (userEmail.length  === 0){
    console.log('Array is empty')
}

// how to check object empty
const meraObject = {}

if (Object.keys(meraObject).length === 0){
    console.log("EMpty Object")
}



// Nullish Coalescing Operator (??)  : null, Undefined

// used in null and undefined condition if the values receiving from datatabases is belong to null or undefined then (x ?? y)  y value consider to maintain the code and to handle the errors

let val1;
// val1 = 5 ?? 13
// val1 = null ?? 10000
val1 = undefined ?? 2
console.log(val1)


// Ternary Operator
// condition ? true : else

true ? console.log("yes True statement run") : console.log("no")