import { createWriteStream } from "fs";
import { rm } from "fs/promises";
import path from "path";
import Directory from "../models/directoryModel.js";
import File from "../models/fileModel.js";
import {pipeline} from 'node:stream/promises'

export const uploadFile = async (req, res, next) => {
  const parentDirId = req.params.parentDirId || req.user.rootDirId;
  try {
    const parentDirData = await Directory.findOne({
      _id: parentDirId,
      userId: req.user._id,
    });

    // Check if parent directory exists
    if (!parentDirData) {
      return res.status(404).json({ error: "Parent directory not found!" });
    }

    const filename = req.headers.filename || "untitled";
    const filesize = Number(req.headers.filesize);
    // console.log(filename, filesize)
    // console.log(typeof filesize);

    //  Blocking the request if the SIze is greater 
    if(filesize > 50 * 1024 * 1024){
      // 1. Set the status code
      res.status(413);
        
      // 2. we send a msg
      console.log('file size big')
      res.write('File too large. Connection terminated.');
        
      // 3. Destroy the connection immediately
      return res.destroy(); 
    }



    const extension = path.extname(filename);

    const insertedFile = await File.insertOne({
      extension,
      name: filename,
      size: filesize,
      parentDirId: parentDirData._id,
      userId: req.user._id,
    });

    const fileId = insertedFile.id;

    const fullFileName = `${fileId}${extension}`;
    const filePath = `./storage/${fullFileName}`

    const writeStream = createWriteStream(filePath);
    //============ checking the size of file when receiving to sever using chunk . so from postamn or frotend even after manumulation of file size we validate every chuck size . this help less bandwidth use and security 
    let totalFileSize = 0
    let isAborted = false
    req.on('data', async(chunk)=>{

      // if aborted 
      if(isAborted){
        return 
      }

      totalFileSize += chunk.length
      isAborted = true
      if (totalFileSize > filesize){
        // remove the file also
        writeStream.close()
        res.status(413);
        await insertedFile.deleteOne()
        await rm(filePath)
        return res.destroy()
      }

      // ------------------ Backpressure manual handling

      // we write on our stram
      let canWrite= writeStream.write(chunk)
      if (!canWrite){
        //  if not writable we pasue the readble stream
        req.pause()

        // else we check drain event
        writeStream.once('drain', ()=>{
          // drain ho gaya to resume kar denge
          req.resume()
        })
      }
    })

    req.on("end", async () => {
      return res.status(201).json({ message: "File Uploaded" });
    });

    req.on("error", async () => {
      await File.deleteOne({ _id: insertedFile.insertedId });
      return res.status(404).json({ message: "Could not Upload File" });
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const getFile = async (req, res) => {
  const { id } = req.params;
  const fileData = await File.findOne({
    _id: id,
    userId: req.user._id,
  }).lean();
  // Check if file exists
  if (!fileData) {
    return res.status(404).json({ error: "File not found!" });
  }

  // If "download" is requested, set the appropriate headers
  const filePath = `${process.cwd()}/storage/${id}${fileData.extension}`;

  if (req.query.action === "download") {
    return res.download(filePath, fileData.name);
  }

  // Send file
  return res.sendFile(filePath, (err) => {
    if (!res.headersSent && err) {
      return res.status(404).json({ error: "File not found!" });
    }
  });
};

export const renameFile = async (req, res, next) => {
  const { id } = req.params;
  const file = await File.findOne({
    _id: id,
    userId: req.user._id,
  });

  // Check if file exists
  if (!file) {
    return res.status(404).json({ error: "File not found!" });
  }

  try {
    file.name = req.body.newFilename;
    await file.save();
    return res.status(200).json({ message: "Renamed" });
  } catch (err) {
    console.log(err);
    err.status = 500;
    next(err);
  }
};

export const deleteFile = async (req, res, next) => {
  const { id } = req.params;
  const file = await File.findOne({
    _id: id,
    userId: req.user._id,
  }).select("extension");

  if (!file) {
    return res.status(404).json({ error: "File not found!" });
  }

  try {
    await rm(`./storage/${id}${file.extension}`);
    await file.deleteOne();
    return res.status(200).json({ message: "File Deleted Successfully" });
  } catch (err) {
    next(err);
  }
};
