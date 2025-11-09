let charCode = 65
const n = 5
for (let i=0; i<n; i++){
    let line= ''
    for(let j=0; j<=i; j++){
        line += String.fromCharCode(i + charCode)
    }
    console.log(line);
}
// A
// BB
// CCC
// DDDD
// EEEEE