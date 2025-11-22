const {createReadStream, createWriteStream} = require('node:fs')

const file = 'E:\\iit\\Data Structures and Algorithms.mp4'
const readableStream = createReadStream(file, { highWaterMark: 1024 * 1024 })

const writableStreamDestination = createWriteStream('output.mp4',{highWaterMark:1})



let isEmpty;
// when our data is flowing state
readableStream.on('data',(chunk)=>{
    // in the file that we want to write each data chunk
    isEmpty = writableStreamDestination.write(chunk)
    // if humara buffer empty nahi hai
    if(!isEmpty){
        // we stop the readable Stream to told him dont pass data pause untill writable stream 'drain'
        readableStream.pause()
        console.log('Readable Stream:->',readableStream.isPaused());
        
    }
})


// now , when our writable stream went to destination to put recived data from readble stream ; it drain
writableStreamDestination.on('drain', ()=>{
    // when it drain again we allow Readble stream to send me(writable stream) the data 
    readableStream.resume()
    console.log('Readable Stream:->',readableStream.isPaused());
})