const arr = [4,90,8,3,20]  // max -> 90 min->3



// 1️⃣========== Method 1: approach with sort() method
const arr1 = [4,90,8,3,20] 
arr1.sort((a,b)=>(a-b)) // modify arr1 and [ 3, 4, 8, 20, 90 ] return first index and last index value
console.log("Method 1:",arr1, "max-",arr1[arr.length-1], "min-",arr1[0]);



// 2️⃣========== Method 2: 
let min = arr[0];
let max = arr[0]
for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i]
    }else if(max < arr[i]){
        max = arr[i]
    }
}
console.log("Method 2:", "max-",max,"min-",min)



// 3️⃣========== Method 3: 

// arr = [10, 25, 3, 99, 7, 56] When no initial value is provided, the first call uses: accumulator = arr[0] (4 here)  currentValue = arr[1] (90 here)


// accumulator think like prevValue index 0, currentValue index 1
const maxVal = arr.reduce((accumulator, currentValue)=> accumulator > currentValue ? accumulator : currentValue)
const minVal = arr.reduce((accumulator, currentValue)=> accumulator < currentValue ? accumulator : currentValue)

console.log("method 3:", "max-",maxVal,"min-",minVal)


// maxVal iteration trace

// Start: a = 4, b = 90 → 4 > 90 ? 4 : 90 → returns 90
// Next: a = 90, b = 8 → 90 > 8 ? 90 : 8 → returns 90
// Next: a = 90, b = 3 → 90 > 3 ? 90 : 3 → returns 90
// Next: a = 90, b = 20 → 90 > 20 ? 90 : 20 → returns 90

// ✅ Final maxVal = 90

// minVal iteration trace

// Start: a = 4, b = 90 → 4 < 90 ? 4 : 90 → returns 4
// Next: a = 4, b = 8 → 4 < 8 ? 4 : 8 → returns 4
// Next: a = 4, b = 3 → 4 < 3 ? 4 : 3 → returns 3
// Next: a = 3, b = 20 → 3 < 20 ? 3 : 20 → returns 3

// ✅ Final minVal = 3





// 4️⃣========== Method 4: 
const maxValue = Math.max(...arr);
const minValue = Math.min(...arr);
console.log("method 4:", "max-",maxValue,"min-",minValue)