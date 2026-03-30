function sortArr(arr){
      arr.sort((a,b) => a-b)

      return arr.join("")
    

}


console.log(sortArr([1, 2, 35, 4, 8, 3]))



// function removeQuotes(str) {
//     // if (str.length < 2) return str;

//     let first = str[0];
//     let last = str[str.length - 1];

//     // Check if both ends have matching quotes
//     if ((first === '"' && last === '"') || (first === "'" && last === "'")) {
//         return str.slice(1, -1);
//     }

//     return str;
// }

// // Test cases
// console.log(removeQuotes('"string1"')); // string1
// console.log(removeQuotes("'string1'")); // string1
// console.log(removeQuotes("'string1"));  // 'string1 (unchanged)
// console.log(removeQuotes("'s'"));  // string1' (unchanged)




// function occurence(str){

//     let count = 0 
//     for (let char of str){
//           if (char == 'w'){
//               count+=1    

//           }
//  }
//      return count

// }

// console.log(occurence('jnjkbfwjkjbwkbwkbkwkwjkblwbowb'))

// function getSecondStr(str){
//     if (!str.includes(".")){
//         return ""
//     }
    
//     let splitStr = str.split(".")
//     if (splitStr.length < 2){
//         return ""
//     }
    
//     return splitStr[splitStr.length-2]
    
//  }
 
 
// let str = prompt("Enter string:");
// console.log(getSecondStr(str))