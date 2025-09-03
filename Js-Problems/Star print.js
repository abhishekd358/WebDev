
// * 
// * *
// * * *
// * * * *
// * * * * *

const n = 6
for (let i=0;  i< n; i++) {
    console.log("* ".repeat(i))
}

//       * 
//      * * 
//     * * *
//    * * * *
//   * * * * *
for (let i=0;  i< n; i++) {
    console.log(" ".repeat(n-i), "* ".repeat(i))
}


//       *
//      * *
//     * * *
//    * * * *
//   * * * * *
//  * * * * * *
//   * * * * *
//    * * * *
//     * * *
//      * *
//       *



for (let i=0;  i< n; i++) {
    console.log(" ".repeat(n-i), "* ".repeat(i))
    if(i == n-1){
        for(let i=0;  i< n; i++){
        console.log(" ".repeat(i), "* ".repeat(n-i))
    }}
}