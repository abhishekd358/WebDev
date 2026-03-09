function xyz(arr, fn) {
    return function fn(){
        for(num in arr){
            console.log(num);
            arr[num] += 1
        }
        return arr
    }
};


console.log(xyz([1,2, 3])())


/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    for(num in arr){
        arr[i] = fn(arr[i], i)
    }
    return arr
};

