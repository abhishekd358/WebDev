function mostFrequentElement(nums){
    let myMap = new Map()
    for (const val of nums){
        if(myMap.has(val)){
            myMap.set(val, myMap.get(val)+1)
        }else{
            myMap.set(val, 1)
        }
    }
    
    // we loop on each value and check whtich is higest
    highestFreq = []
    highestOccurence = 0
    for(const value of myMap.values()){
        if(value >=highestOccurence){
            highestOccurence = value
        }
    }
    for(const key of myMap.keys()){
        if(myMap.get(key) == highestOccurence){
            highestFreq.push(key)
        }
    }
    
    return Math.min(...highestFreq)
}


console.log(mostFrequentElement([ 5, 5, 4, 4, 6]))