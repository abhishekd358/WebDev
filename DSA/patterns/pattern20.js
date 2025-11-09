const n=5

for (let i=1; i<n; i++){
    let line= '*'.repeat(i) + '  '.repeat(n-i) + '*'.repeat(i)
    console.log(line);
}


for (let i=n; i>=1; i--){
    let line= '*'.repeat(i) + '  '.repeat(n-i) + '*'.repeat(i)
    console.log(line);
}


// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *