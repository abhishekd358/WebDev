// first we create a server http

import { createServer } from "node:http";
import { createReadStream, createWriteStream, readFileSync } from "node:fs";
import {readFile} from 'fs/promises'
import { pipeline, Transform } from "node:stream";

const server = createServer(async (req, res) => {
    // home route
  if (req.url == "/") {
    return res.end("Runnning");
  }
// BADWAY: fs sync
  if (req.url == "/badway") {
    // ----------------------------------1: Bad way to send file to client from server
    const file = readFileSync("datafile.txt");
    return res.end(file)
  }
//   BADWAY: using async 
 if (req.url == "/async") {
    // 1: Bad way to send file to client from server
    const file =await readFile("datafile.txt");
    return res.end(file)
  }
//   BADWAY: VIDEO FILE
  if (req.url == "/video") {
    // 1: Bad way to send file to client from server
    // when you send video like this so sudden hike in the use of MEMORY i.e RAM
    const file = readFileSync("C:\\Users\\Abhishek\\Desktop\\Data Structures and Algorithms using Python _ Mega Video _ DSA in Python in 1 video.mp4");
    res.writeHead(200, { "Content-Type": "video/mp4" });

    return res.end(file)
  }


//   -----------------------2: GOODWAY

  if (req.url == "/goodvideo") {
    // fs module have createReadStream method which make it readble for stream
    const stream = createReadStream("C:\\Users\\Abhishek\\Desktop\\Data Structures and Algorithms using Python _ Mega Video _ DSA in Python in 1 video.mp4");
    res.writeHead(200, { "Content-Type": "video/mp4" });

    // here we create a pipe that were we sending the video file to the CLIENT side i.e on RESPOSE
    stream.pipe(res)
    // this way no HIGH RAM Used ; QUICK ; EFIIFCENT; LESS MEMORY USE
  }





// ========================================= FILEE PROCESSING / TRANSFORM
  // GOODWAY: fs sync
  if (req.url == "/goodway") {
    // ----------------------------------1: Bad way to send file to client from server
    const file = createReadStream("datafile.txt");

    // we write on file data on new output.txt on receiver end
    const outputFile = createWriteStream('output.txt')

// METHOD 1:-------------------------------------------------------------------
    // // so as we recive cunk of data from readblestream then we push to output.txt
    // file.on('data', (chunk)=>{
    //     // PROCESS KARENGE / TRANSFORM KARNEGE in between each chunk when it flowing to RECEIVER end.
    //     const uppercaseModification = chunk.toString().toUpperCase()
    //     // jaise hi process kiya hua data aajyega vaise hi hum kya write kar denge
    //     outputFile.write(uppercaseModification)
    // })

//but above .on() is not good way to TRANSFORM / PROCESS / MODIFY data when our data in flow 


// METHOD 2:---------------------------------------------------------------------
//  for that transform() use

  const uppercaseModificationStream = new Transform({
    transform(chunk, encoding, callback){

      // here we transform the flowing data chunk before receive to end user
      const uppercaseModification = chunk.toString().toUpperCase()
      // now we process 
      // now we have to send process data to next pipe
      callback(null,uppercaseModification )   // has parameter error, data
    } 
  })


// wehen we do transfrom  we have to add in pipe
// file(source) ----> trasfromStream(process) -----> outputFile(receiver)


// file.pipe(uppercaseModificationStream).pipe(outputFile)

// file.pipe(uppercaseModificationStream).on('error',()=>console.log(error)).pipe(outputFile).on('error',()=>console.log(error))
// -------------------------- limitiation on this above is that we not able to handle the error if occur when during flow of data and we processing  

// but this above error handling is not good way ---------------------






// METHOD 3 ______________________Instead _pipe()____we_use_pipeline()_______________________________________

// thatswhy pipeline used
pipeline(file, uppercaseModificationStream, outputFile,
  (error)=>console.log(error)
)
// source ----> transform stram ----> receiver


}


});






const PORT = 3000;

server.listen(PORT, () => {
  console.log("Server Running on port", PORT);
});
