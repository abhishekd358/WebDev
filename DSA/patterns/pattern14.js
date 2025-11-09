let charCode = 65
const n = 5
for (let i=0; i<n; i++){
    let line= ''
    for(let j=0; j<=i; j++){
        line += String.fromCharCode(j + charCode)+ ' '
    }
    console.log(line);
}
console.log('---------------------------');

console.log(String.fromCharCode(65))  //A
console.log(String.fromCharCode(97))  //a

// A 
// A B 
// A B C
// A B C D
// A B C D E
