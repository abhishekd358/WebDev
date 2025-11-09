const n=4
for (let i=1; i<=n; i++){
    let line = ''
    for (let j=n; j>=n-i+1; j--){
        line += j 
    }

    line+=`${n+1-i}`.repeat(n+1-i)
    for (let j=n-i+1; j<=n; j++){
        line += j
    }
    
    console.log(line);
} 

// // for (let i=1; i<n; i++){
// //     let line = ''
// //     for (let j=n; j>i; j--){
// //         line += j
// //     }
// //     console.log(line);
// // }


// // for (let i=1; i<=n; i++){
// //     let line= '*'.repeat(i) + '  '.repeat(n-i) + '*'.repeat(i)
// //     console.log(line);
// // }







// for (let i=1; i<=n; i++){
//     let line = ''    
//     for (let j=n-i+1; j<=n; j++){
//         line += j
//     }
//     console.log(line);
    
// }