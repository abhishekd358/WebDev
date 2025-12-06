import { readdir } from "fs/promises";
import { createReadStream, readFile } from "node:fs";
import { open } from "node:fs/promises";
import http from "node:http";

const app = http.createServer(async (req, res) => {
  // home route
  if (req.url === "/") {
    const files = await readdir(
      "C:\\Users\\RUSHIKESH DHAWARE\\Desktop\\Chai with Js\\6.Networking In Node Js\\d)Storage webapp\\Storage"
    );
    // looping on files
    let dynamicHtml = "";
    files.forEach((element) => {
      dynamicHtml += `<li><a href="./${element}">${element}</a></li>`;
    });

    return res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Storage webapp</title>
</head>
<body>

    <h1>My Storage:</h1>
     <ul>
     ${dynamicHtml}
     
     </ul>
</body>
</html>`);
  }else{
      //   file based route

      try {
       const currentFileROute = req.url
    const fileHandle =await open(`C:\\Users\\RUSHIKESH DHAWARE\\Desktop\\Chai with Js\\6.Networking In Node Js\\d)Storage webapp\\Storage\\${currentFileROute}`)
    // console.log(fileHandle)

    const contentFile = fileHandle.createReadStream()
    contentFile.pipe(res) 
      } catch (error) {
        console.log(error.message)
        res.end('Not Found!')
      }

  }




});

// port
const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server Running on Port:", PORT);
});
