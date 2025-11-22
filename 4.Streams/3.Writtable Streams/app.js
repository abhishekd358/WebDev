const {createReadStream, createWriteStream} = require('node:fs')

const file = 'notes.md'
const readableStream = createReadStream(file)

// ------------------WRITABLE STREAM
const writableStreamFile = createWriteStream('output.txt',{highWaterMark:18200}) // to which file we want to write or here automatically create a new file

// when our data is flowing state
readableStream.on('data',(chunk)=>{
    // in the file that we want to write each data chunk
    writableStreamFile.write(chunk)  
})

// =================================== with above method 
// CPU and RAM usage is high for the resaon we have Backpressure =
// 👉 “Writer data zyada bhej raha hai, system utna fast write nahi kar pa raha.”
console.log('======================BACKPRESSURE=========================');

