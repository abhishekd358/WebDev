//  creating buffer with Arraybuffer 
const buff = new ArrayBuffer(4)
const x = new Uint8Array(buff)
x[0] = 500
console.log("Human readble only array",x)
console.log("Full deatil buffer with hex",x.buffer)

// without ArrayBuffer
const withoutArrayBuffer = new Uint8Array(5)
console.log(withoutArrayBuffer)
withoutArrayBuffer[3] = 200

console.log(withoutArrayBuffer); // normal array
console.log(withoutArrayBuffer.buffer); // details buufer array with buffer length

