const arr = [4,90,8,3,20] 
// console.log(3//2)

function oddEven (arr){
    for (let num of arr){
        // console.log(num)
        if(num % 2 == 1){
            console.log("odd:",num);    
        }
        if(num % 2 ==0){
            console.log("even:", num)
        }
    }
}
oddEven(arr)


// method 2:

const even = arr.filter((num)=> num % 2==0)
console.log(even);
const odd = arr.filter((num)=> num % 2==1)
console.log(odd);
