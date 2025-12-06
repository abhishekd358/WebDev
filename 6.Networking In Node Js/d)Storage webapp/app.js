// ======================= IMPORTS =======================
import { readdir } from "fs/promises"; // To read directories asynchronously
import { createReadStream } from "node:fs"; // To stream files to the client
import { open, readFile } from "node:fs/promises"; // Open files and read template HTML
import http from "node:http"; // Create HTTP server
import mime from "mime-types"; // Detect file MIME types for proper Content-Type headers

// ======================= CREATE SERVER =======================
const app = http.createServer(async (req, res) => {
  // ---------------------- Ignore favicon requests ----------------------
  if(req.url === '/favicon.ico') return res.end('Not Found Icon');

  // ---------------------- Home route ("/") ----------------------
  if (req.url === "/") {
    // Show the directory listing for the root folder
    serveDirectory(req, res);
    return; // Stop further processing
  }

  try {
    // ---------------------- Detect download ----------------------
    // Check if the URL includes "?download=1"
    const isDownload = req.url.includes("?download=1");

    // Remove "?download=1" from URL to get the real file path
    const cleanPath = req.url.replace("?download=1", "");

    // ---------------------- Open file ----------------------
    // Open the file handle (async) from the Storage folder
    const fileHandle = await open(`./Storage${decodeURIComponent(cleanPath)}`);

    // ---------------------- Check if it's a directory ----------------------
    const stat = await fileHandle.stat();

    if (stat.isDirectory()) {
      // If it is a directory, show its contents
      serveDirectory(req, res);
      return;
    }

    // ---------------------- Serve file ----------------------
    // Detect proper MIME type (e.g., video/mp4, image/png)
    const mimeType = mime.lookup(cleanPath) || "application/octet-stream";
    res.setHeader("Content-Type", mimeType);

    // Get the file name from the path (last part after "/")
    const fileName = cleanPath.split("/").pop();

    // ---------------------- Set download or open ----------------------
    if (isDownload) {
      // Force download
      res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
    } else {
      // Open in browser inline (for videos, images, PDFs, etc.)
      res.setHeader("Content-Disposition", `inline; filename="${fileName}"`);
    }

    // ---------------------- Stream the file ----------------------
    const contentFile = fileHandle.createReadStream();
    contentFile.pipe(res);

  } catch (error) {
    // ---------------------- Error handling ----------------------
    // If file not found or any error occurs
    console.log(error.message);
    res.end("Not Found!");
  }
});

// ======================= SERVE DIRECTORY FUNCTION =======================
async function serveDirectory(req, res) {
  // Read all files/folders in the requested directory
  const files = await readdir(`./Storage${req.url}`);

  // Generate dynamic HTML for each file/folder
  let dynamicHtml = "";
  files.forEach((element) => {
    dynamicHtml += `
      <li>${element}</li>

      <!-- Open button -->
      <a href=".${req.url === "/" ? "" : req.url}/${element}">
        <button>Open</button>
      </a>

      <!-- Download button -->
      <a href=".${req.url === "/" ? "" : req.url}/${element}?download=1">
        <button>Download</button>
      </a>
    `;
  });

  // Read the HTML template
  const htmlRead = await readFile("homeTemplate.html", "utf-8");

  // Replace placeholder in template with the dynamic file list
  return res.end(htmlRead.replace("${dynamicHtml}", dynamicHtml));
}

// ======================= START SERVER =======================
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server Running on Port:", PORT);
});
