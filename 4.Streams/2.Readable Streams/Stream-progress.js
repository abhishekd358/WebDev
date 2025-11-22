const { createReadStream, statSync, appendFileSync} = require('node:fs')

const fileName = "C:\\Users\\XYZ\\Desktop\\Data Structures and Algorithms using Python _ Mega Video _ DSA in Python in 1 video.mp4"
// const fileName = 'notes.md'

// first we take the file byteLength through stat file
const {size: totalByteLength}  = statSync(fileName)
// console.log(totalByteLength);


const videoReadingStream = createReadStream(fileName) 
// update on every chunk buffer byte-length when our "date" event run
let currentByteLength = 0


videoReadingStream.on('data',(chunk)=>{  
    currentByteLength += chunk.byteLength
    let percentage = Math.round((currentByteLength / totalByteLength) * 100)
    console.log(percentage+'%');

    // more extra unnessary stuffy to copy data to new file : to append this chunk to a new file 
    appendFileSync('output-video.mp4',chunk)
    
})

videoReadingStream.on('end',()=>{
    console.log("file completed: 100%");
})


