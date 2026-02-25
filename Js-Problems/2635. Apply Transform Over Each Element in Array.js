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