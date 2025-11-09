const n = 4
for (let i=1; i<=n; i++){
    let line= ''
    for(let j=1; j<=i; j++){
        line+= j
    }
    line += '  '.repeat(n-i)
    for(let k=i; k>=1; k--){
        line+=k
    }
    console.log(line)
}



// 1      1
// 12    21
// 123  321
// 12344321