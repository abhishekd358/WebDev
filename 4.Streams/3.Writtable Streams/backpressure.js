const {createWriteStream} = require('node:fs')


// we create a write stream destination were we put our data
const writableOutput = createWriteStream('backpressure.txt', {highWaterMark:4})

let isEmpty;   
// now our highWaterMark means buffer size is 4 only so as our buffer size get full we get TRUE/FALSE
isEmpty = writableOutput.write('a')
console.log(isEmpty);               //true
// 2
isEmpty = writableOutput.write('b')
console.log(isEmpty);               //true
// 3
isEmpty = writableOutput.write('c')
console.log(isEmpty);               //true
// 4
isEmpty = writableOutput.write('d')
console.log(isEmpty);               //false (-------------OUR BUFFER SIZE is FULL)
//5
isEmpty = writableOutput.write('e')
console.log(isEmpty);               //false