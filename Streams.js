import { Readable, Writable } from 'node:stream'

const rs = Readable.from(['A', 'B', 'C'])

const ws = new Writable({
  write(chunk, enc, cb) {
    console.log('Writing:', chunk.toString())
    cb()
  }
})

rs.pipe(ws)


// ============================

import { createReadStream, createWriteStream, fstat, stat, statSync } from 'node:fs'


// console.log(fileBuffer)

const readStream = createReadStream('react.text',{highWaterMark:1000})
const writeStream = createWriteStream('newFile.txt')


const {size: totalFileSize} = statSync('react.text')
console.log(totalFileSize)

let currentByteLength = 0

readStream.on('data', (chunk)=>{
    readStream.pause()

    writeStream.write(chunk)
    currentByteLength += chunk.byteLength
    // here we do percentage stuff
    const percentage = Math.floor((currentByteLength / totalFileSize)*100)
    console.log(`Your file copy ${percentage}% out of 100%`)
    setTimeout(()=>{
        readStream.resume()
    },1000)
    
})



readStream.on('end', ()=>{
    console.log('that file copied 100%')
})























