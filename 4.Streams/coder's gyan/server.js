// first we create a server http

import { createServer } from "node:http";
import { createReadStream, readFileSync } from "node:fs";
import {readFile} from 'fs/promises'

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
    const file = readFileSync("C:\\Users\\RUSHIKESH DHAWARE\\Desktop\\Data Structures and Algorithms using Python _ Mega Video _ DSA in Python in 1 video.mp4");
    res.writeHead(200, { "Content-Type": "video/mp4" });

    return res.end(file)
  }


//   -----------------------2: GOODWAY

  if (req.url == "/goodvideo") {
    // fs module have createReadStream method which make it readble for stream
    const stream = createReadStream("C:\\Users\\RUSHIKESH DHAWARE\\Desktop\\Data Structures and Algorithms using Python _ Mega Video _ DSA in Python in 1 video.mp4");
    res.writeHead(200, { "Content-Type": "video/mp4" });

    // here we create a pipe that were we sending the video file to the CLIENT side i.e on RESPOSE
    stream.pipe(res)
    // this way no HIGH RAM Used ; QUICK ; EFIIFCENT; LESS MEMORY USE
  }




});






const PORT = 3000;

server.listen(PORT, () => {
  console.log("Server Running on port", PORT);
});
