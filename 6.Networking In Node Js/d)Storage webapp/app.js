import { readdir } from "fs/promises";
import { createReadStream } from "node:fs";
import { open, readFile } from "node:fs/promises";
import http from "node:http";
import mime from "mime-types";

const app = http.createServer(async (req, res) => {
  // favicon.ico route
  if(req.url === '/favicon.ico') return res.end('Not Found Icon')

  // home route
  if (req.url === "/") {
    serveDirectory(req, res);
  } else {
    try {

      // clean url before opening file
        const isDownload = req.url.includes("?download=1");
        const cleanPath = req.url.replace("?download=1", "");
      // if the file we create read stream
      const fileHandle = await open(`./Storage${decodeURIComponent(cleanPath)}`);

      // we checking is dir or file
      const stat = await fileHandle.stat();

      if (stat.isDirectory()) {
        // if it is folder
        serveDirectory(req, res);
      
      } else {
        // if it file

        // for file : custom header passing ---------------------------------
        const mimeType = mime.lookup(cleanPath) || "application/octet-stream";
        res.setHeader("Content-Type", mimeType);
        // -------------------------------------------------------------------------


        const fileName = cleanPath.split("/").pop();


        // ========================= download
        if(isDownload){
          res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
        }else{
          // open
          res.setHeader("Content-Disposition", "inline; filename=\"${fileName}\"");
        }

        // ================================================

        const contentFile = fileHandle.createReadStream();
        contentFile.pipe(res);
      }
    } catch (error) {
      console.log(error.message);
      res.end("Not Found!");
    }
  }
});

// ======================= Reading or serving directory
async function serveDirectory(req, res) {
  // if it is a folder
  const files = await readdir(`./Storage${req.url}`);
  // looping on files
  let dynamicHtml = "";
  files.forEach((element) => {
    dynamicHtml += `<li>${element}</li>
    
    <a href=".${req.url === "/" ? "" : req.url}/${element}"><button>Open</button></a>

    <a href=".${req.url === "/" ? "" : req.url}/${element}?download=1"><button>Download</button></a>


    `;
  });

  // we read the home html and reder it and also rednder dynamic html
  const htmlRead = await readFile("homeTemplate.html", "utf-8");
  // now from html we replace the static ${} to dyamic
  return res.end(htmlRead.replace("${dynamicHtml}", dynamicHtml));
}





// port
const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server Running on Port:", PORT);
});
