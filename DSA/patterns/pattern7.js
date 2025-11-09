const n=6
for (let i=1; i<n; i++){
    console.log(String(" ").repeat(n-i)+'*'.repeat(i)+'*'.repeat(i-1)); 
}

//      *
//     ***
//    *****
//   *******
//  *********