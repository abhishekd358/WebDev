arr = [10, 25, 3, 99, 7, 56]

function sum(arr) {
    let totalSum = 0;
    for(let num of arr){
        totalSum+=num
    }    
    return totalSum
}

console.log(sum(arr))