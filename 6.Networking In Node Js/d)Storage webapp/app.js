import { readdir } from "fs/promises";
import { createReadStream } from "node:fs";
import { open, readFile } from "node:fs/promises";
import http from "node:http";

const app = http.createServer(async (req, res) => {
  // favicon.ico route
  if(req.url === '/favicon.ico') return res.end('Not Found Icon')

  // home route
  if (req.url === "/") {
    serveDirectory(req, res);
  } else {
    try {
      // if the file we create read stream
      const fileHandle = await open(`./Storage${decodeURIComponent(req.url)}`);

      // we checking is dir or file
      const stat = await fileHandle.stat();
      if (stat.isDirectory()) {
        serveDirectory(req, res);
        // if it file
      } else {
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
    
    <a href=".${
      req.url === "/" ? "" : req.url
    }/${element}"><button>Open</button></a>

    <a href=".${
      req.url === "/" ? "" : req.url
    }/${element}"><button>Download</button></a>


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
