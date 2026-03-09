function countFrequencies(nums){
   const HashArray= new Map()
    for(const val of nums){
        if(HashArray.has(val)){
            HashArray.set(val, (HashArray.get(val)+1))
        }else{
            HashArray.set(val, 1)
        }
    }
    return HashArray
}


console.log(countFrequencies( [1, 2, 2, 1, 3]))




// const myMap = new Map();

// myMap.set([1, 1000]);
// myMap.set('UAE', 'United Arab Emirates');
// myMap.set('US', 'United State of America');

// console.log(myMap[3])