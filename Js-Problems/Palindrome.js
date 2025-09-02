const str = "TENET"

// method 1 : 
const reverseStr = str.split('').reverse().join('')
console.log("method 1: is palindrome->",str == reverseStr)


// method 2: 

function palindrome(str){
    str = str.toLowerCase();

    let left = 0   //index
    let right = str.length-1 //index

    while(left<right){
        if(str[left] !== str[right]){
            return false
        }
        left++
        right--
    }
    return true
}


console.log("method 2: is palindrome->",palindrome(str))



// method 3: recursion

function plaindromeRecursion(str){
    if(str.length<1){
        return true
    }
    if(str[0] !== str[str.length-1]){
        return false
    }

    return plaindromeRecursion(str.slice(1,-1))
}

console.log("method 3: is palindrome->",plaindromeRecursion(str))
