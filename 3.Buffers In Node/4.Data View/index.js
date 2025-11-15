// creating ArrayBuffer which is empty
const buff = new ArrayBuffer(4)
// console.log(buff)

// now if we wnat to read and write data in buffer on each index we need to create DataView
// DataView
const view = new DataView(buff)
// console.log(view);

// now we want to set data
view.setInt8(2, -10)  // setting negative value
view.setUint8(1, -10)  // this can't set neagtive value beacuse it is itself Unsigned

console.log(view);


console.log(view.getInt8(2)) // this return our neagtive value
console.log(view.getUint8(1))  // it not negative value that we set it alwayas Unsigned


view.setUint16(0, 500); // this require 2 byte and it by default little indian , it Overwrite 0, 1 index in Buffers data
console.log(view);