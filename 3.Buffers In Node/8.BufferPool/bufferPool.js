import { Buffer } from 'buffer'



console.log('Buffer Poolsize --->', Buffer.poolSize);

// checking length of buffer 
console.log("===================Checking Buffer Length====================")
const b1 = Buffer.alloc(4)
const b2 = Buffer.allocUnsafe(4)
const b3 = Buffer.from([1, 2, 3, 4])

console.log("b1 Alloc---> ",b1.byteLength);
console.log("b2 AllocUnsafe--->",b2.byteLength);
console.log("b3 From--->",b3.byteLength);


// checking length of buffer 
console.log("================Checking Buffer Length .buffer Under The hood buffer property==============")
console.log("b1 Alloc---> ",b1.buffer.byteLength);
console.log("b2 AllocUnsafe--->",b2.buffer.byteLength);   // allocated Buffer from BufferPool
console.log("b3 From--->",b3.buffer.byteLength); // allocated Buffer from BufferPool


// now see the Short buffer of b1 , b2, b3
console.log("================SHort Deatil about Buffer==============")
console.log("b1 Alloc---> ",b1);
console.log("b2 AllocUnsafe---> ",b2);
console.log("b1 From---> ",b3);



// now see the Detail buffer of b1 , b2, b3
console.log("================More Deatil about Buffer==============")
console.log("b1 Alloc---> ",b1.buffer);
console.log("b2 AllocUnsafe---> ",b2.buffer);
console.log("b1 From---> ",b3.buffer);



