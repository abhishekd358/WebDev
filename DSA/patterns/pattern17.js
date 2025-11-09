const charCode = 65
const n = 4
for (let i=0; i<n; i++){
    let line= ''
    line+=' '.repeat(n-i)
    for(let j=0; j<=i; j++){
        line += String.fromCharCode(j + charCode)
    }
     for (let j=i-1; j>= 0; j--){
        line += String.fromCharCode(j + charCode)
    }

    console.log(line);
}

//     A
//    ABA
//   ABCBA
//  ABCDCBA