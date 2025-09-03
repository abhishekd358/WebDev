

function charCounter(userString, char) {
let count = 0
for (let i = 0; i < userString.length; i++) {
    if(userString[i]== char){
        count +=1
    }
}
    return count
}
console.log(charCounter("happy new year", 'e'))
