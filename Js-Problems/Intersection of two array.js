const arr1 = [1,4,67,2,4]
const arr2 = [9,3,5,7,2,57,3,4]
const intersection = []
for (let item of arr1){
    if(arr2.includes(item) && !intersection.includes(item)){
        intersection.push(item)
    }
}

console.log(intersection);
