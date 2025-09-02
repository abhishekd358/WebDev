
function factorial(number) {
    result = 1;
    for (let i=1; i<= number; i++){
        result = result * i
    }
    return result
    
}

console.log("normal method: ",factorial(5))




// recursion method

function factorialRecursion(num){
    if(num == 0 || num == 1){
        return 1
    }
    return num * factorialRecursion(num-1)
}

console.log("recursion method: ",factorialRecursion(5))