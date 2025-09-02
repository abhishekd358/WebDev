const number = 10  // factors are 1, 2, 5


// method 1: 
function factors(num){
    for(let i=1; i<=num; i++){
        if(num % i == 0){
            console.log(i)
        }
    }
}

// factors(10)


function factorsRecursion(num, i=1){
    if (i>num){
        return
    }
    if(num < 0){
        return 0
    }

    if (num % i == 0){
        console.log(i)
    }
    return factorsRecursion(num, i+1)

}


// factorsRecursion(10)
