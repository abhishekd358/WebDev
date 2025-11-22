const {readFileSync, createReadStream} = require('node:fs')

// BADWAY : sudden pushing data to availble buffer , which is high consume of memory
// basic reading file / video
// const videoReading = readFileSync("C:\\Users\\Abhi\\Desktop\\Data Structures and Algorithms using Python _ Mega Video _ DSA in Python in 1 video.mp4") 
// // console.log(videoReading);


// GOODWAY: 
const videoReadingStream = createReadStream("notes.md",{highWaterMark: 10}) 


// now the file video going to read in chuck we create a river SOURCE
// jaise hi hamere river mai data flow hoga 
// CPU use Increase but MEMORY use very less
let count = 0
videoReadingStream.on('data',(chunk)=>{
    
    // how may data chunk reads through this data loop event
    count++
    
    // to check our chunk Buffer length 
    const currentBufferLen = chunk.byteLength
    // console.log(chunk)
    console.log("Chunk Buffer Length:->",currentBufferLen);
})
// console.log(videoReadingStream._readableState);




// on when our file reading end 
videoReadingStream.on('end',()=>{
    // when our stream completed. we print the count that how many times the data chunk is pass or flow 
    console.log(count);
})
