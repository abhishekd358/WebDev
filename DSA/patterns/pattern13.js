let sum = 1
const n = 5
for (let i=1; i<=n; i++){
    let line= ''
    for(let j=1; j<=i; j++){
        line += sum +' '
        sum += 1
    }
    console.log(line);
}

// let x = 'abhi'
// console.log(x.at(-1))

// 1 
// 2 3 
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15