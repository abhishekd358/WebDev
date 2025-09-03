// 153: 1³ + 5³ + 3³ = 1 + 125 + 27 = 153 
// 370: 3³ + 7³ + 0³ = 27 + 343 + 0 = 370 
// 1634: 1⁴ + 6⁴ + 3⁴ + 4⁴ = 1 + 1296 + 81 + 256 = 1634 



function armstrong(num){
    const numArray = String(num).split('')
    let result = 0;
    // console.log(numArray);
    for (let i = 0; i < numArray.length; i++) {

        result = result + ((Number(numArray[i])) ** numArray.length);
    }
    // console.log(`total sum -> ${result}` )
    
    if (result==num) {
        return `${num} -> Yes Armstrong✅` 
    }else{
        return `${num} -> Not Armstrong❎` 
    }
}


console.log(armstrong(153))
