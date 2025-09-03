// 10 -> 0, 1, 1, 2 , 3 , 5 , 8 , 13 , 21, 34, 55
const n = 10


// Method 1:
function fibonacci(num) {
  let a = 0;
  let b = 1;
  let i = 2;
  let arr = []
  // print the first two ns
  arr.push(a);
  if (num > 1) {
    arr.push(b)
  }

  while (num > i) {
    let next = a + b;
    arr.push(next);
    // reassign
    a = b;
    b = next;
    // incremment i
    i++;
  }
  return arr
}

console.log("Method 1:",fibonacci(n),"\n---------------------------")



// Method 2:

let arr = []
let a = 0;
let b = 1;
for (let i = 0; i < n; i++) {
    arr.push(a);
    [a, b] = [b, a+b]
}
console.log("Method 2 :",arr,"\n---------------------------")



// Method 3: recursion 



function fibonacciRecursion(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacciRecursion(n-1) + fibonacciRecursion(n-2)
}

let fibarray = []
// if you want array 
for (let i = 0; i <n; i++) {
    fibarray.push(fibonacciRecursion(i))
}

console.log("Method 3 Printing Array:",fibarray, "\n---------------------------")