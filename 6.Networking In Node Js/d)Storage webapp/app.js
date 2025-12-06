import { readdir } from "fs/promises";
import { open, readFile } from "node:fs/promises";
import http from "node:http";
import mime from "mime-types";

const app = http.createServer(async (req, res) => {

  // favicon request ignore
  if (req.url === "/favicon.ico") return res.end("No Icon");

  // Home route
  if (req.url === "/") {
    serveDirectory(req, res);
    return;
  }

  try {
    // ----------------------------
    // 1️⃣ Check if download is requested
    // ----------------------------
    const isDownload = req.url.includes("?download=1");

    // remove the ?download=1 to get the ACTUAL file path
    const cleanPath = req.url.replace("?download=1", "");

    // ----------------------------
    // 2️⃣ Open the file or folder
    // ----------------------------
    const fileHandle = await open(`./Storage${decodeURIComponent(cleanPath)}`);

    const stat = await fileHandle.stat();

    // ----------------------------
    // 3️⃣ If folder → show directory listing
    // ----------------------------
    if (stat.isDirectory()) {
      serveDirectory(req, res);
      return;
    }

    // ----------------------------
    // 4️⃣ If file → serve file
    // ----------------------------

    // Detect correct MIME type
    const mimeType = mime.lookup(cleanPath) || "application/octet-stream";
    res.setHeader("Content-Type", mimeType);

    // filename (last part of URL)
    const fileName = cleanPath.split("/").pop();

    // ----------------------------
    // 5️⃣ Download Mode
    // ----------------------------
    if (isDownload) {
      // "attachment" forces download
      res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
    } else {
      // "inline" opens in browser (pdf, images, text, videos stream)
      res.setHeader("Content-Disposition", "inline");
    }

    // Create a Readable stream
    const contentStream = fileHandle.createReadStream();

    // Pipe file → browser
    contentStream.pipe(res);

  } catch (error) {
    console.log(error.message);
    res.end("Not Found!");
  }
});



// ===================================================================
// SERVE DIRECTORY FUNCTION
// ===================================================================
async function serveDirectory(req, res) {
  // Read folder content
  const files = await readdir(`./Storage${req.url}`);

  let dynamicHtml = "";

  files.forEach((element) => {

    // element = file or folder name

    dynamicHtml += `
    <li>${element}</li>

    <!-- OPEN BUTTON -->
    <a href=".${req.url === "/" ? "" : req.url}/${element}">
      <button>Open</button>
    </a>

    <!-- DOWNLOAD BUTTON -->
    <a href=".${req.url === "/" ? "" : req.url}/${element}?download=1">
      <button>Download</button>
    </a>
    `;
  });

  // Load HTML template
  const htmlRead = await readFile("homeTemplate.html", "utf-8");

  // Replace placeholder
  return res.end(htmlRead.replace("${dynamicHtml}", dynamicHtml));
}


// Server
const PORT = 3000;
app.listen(PORT, () => console.log("Server running on:", PORT));
