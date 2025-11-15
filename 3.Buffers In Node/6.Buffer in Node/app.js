// #! /usr/bin/env node
console.log(Buffer);
// --------------------- Buffer has the following property
//   [Function: Buffer] {
//   poolSize: 8192,
//   from: [Function: from],
//   copyBytesFrom: [Function: copyBytesFrom],
//   of: [Function: of],
//   alloc: [Function: alloc],
//   allocUnsafe: [Function: allocUnsafe],
//   allocUnsafeSlow: [Function: allocUnsafeSlow],
//   isBuffer: [Function: isBuffer],
//   compare: [Function: compare],
//   isEncoding: [Function: isEncoding],
//   concat: [Function: concat],
//   byteLength: [Function: byteLength],
//   [Symbol(kIsEncodingSymbol)]: [Function: isEncoding]
// }

// console.log('----------------------------------------------------')




// // import 

import { Buffer } from 'buffer'

// how to create a custom buffer
const a = Buffer.alloc(4)
console.log("Node Js Buffer:  ",a);


// first we allocate buffer with ArrayBuffer and then we use Node Buffer
const buff = new ArrayBuffer(4)
const newNodeJsBuff = Buffer.from(buff)
console.log("Create Buffer from ArrayBuffer:  ",newNodeJsBuff);
console.log(newNodeJsBuff === a);  // false 



newNodeJsBuff[0] = 97
newNodeJsBuff[1] = 98
newNodeJsBuff[2] = 99
newNodeJsBuff[3] = 100
console.log("NewNodeBuff Value Assign: ",newNodeJsBuff)




console.log("-------------------------------------------");
// ----------------------Old way--------------
// here we create a buffer with the
const newBuff = new ArrayBuffer(4)
const unit8Buffer = new Uint8Array(newBuff)
unit8Buffer[0] = 97
unit8Buffer[1] = 98
unit8Buffer[2] = 99
unit8Buffer[3] = 100
console.log(unit8Buffer.buffer) // hex array buffer
console.log(unit8Buffer) // give human readble array buffer




console.log("========================= IMP =============================================");



// Normal JS ArrayBuffer allocates EXACT 4 bytes
const b1 = new ArrayBuffer(4)
const b1x = Buffer.from(b1)
console.log(b1x.byteLength);
console.log(b1x.buffer.byteLength);

console.log('*******************************');

// Node allocates EXACT 4 bytes
const b2 = Buffer.alloc(4)
console.log(b2.byteLength);
console.log(b2.buffer.byteLength);

console.log('*******************************');

const b3 = Buffer.from([1, 2, 3, 4])
console.log(b3.byteLength);
// Node allocates from internal memory pool (8 KB pool)
console.log("Buffer length",b3.buffer.byteLength);




// *********************************NOTES*****************************************************

console.log(`
    
b.byteLength  
→ shows how many bytes THIS buffer holds  
→ your usable size

b.buffer.byteLength  
→ shows the size of the underlying ArrayBuffer  
→ often 8192 because Node uses a memory pool (slab)


Buffers created from raw data (Buffer.from([...])) use the Node.js internal buffer pool (8192 bytes).
Therefore, buffer.buffer.byteLength = 8192 even if actual buffer size is small.
   
    
    `);
