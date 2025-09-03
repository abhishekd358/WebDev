const arr1 = [1,4,67,2,4]
const arr2 = [9,3,5,7,2,57,3,7,4]
const union = []

for (let item of arr1){
    if(!union.includes(item)){
        union.push(item)
    }
}
for (let item of arr2){
    if(!union.includes(item)){
        union.push(item)
    }
}

console.log(union);
