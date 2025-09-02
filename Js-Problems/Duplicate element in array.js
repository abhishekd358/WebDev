const arr = [1,3,5,6,7,5,1]
// console.log(arr)


const duplicate =[]
for (let i = 0; i < arr.length; i++) {
    if (arr.slice(i+1,).includes(arr[i])) {
        duplicate.push(arr[i])
        i+=1 
    
    }    
}
console.log(duplicate)



// ======================================== Solution 2:
const duplicates = arr.filter((item, index, array)=> array.indexOf(item) !== index)
console.log(duplicates);


// Explanation:
// arrs.indexOf(item) gives the first occurrence index of the item.
// If the current index is not the first occurrence, it’s a duplicate.
// So we use !== index