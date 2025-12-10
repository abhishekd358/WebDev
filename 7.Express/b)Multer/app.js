import express from "express";
// ----------------------------------------1) import multer
import multer from 'multer'
const app = express()

// -------------------------------------------2) create a folder were multer store 
const fileUpload = multer({ dest: 'uploads/' })



app.get('/', (req, res)=>{
    res.send("hello route working")
})



// +++++++++++++++++++++++++++++++++ SIMPLE METHOD ++++++++++++++++++++++++++++++++++++++++++

// --------------------------------------------3) now here on fileUpload we have .single('attribute_name_passing_through_frontend') method for 1 file upload 
// ---------------------- file upload
app.post('/upload',fileUpload.single('file'), (req, res)=>{
    console.log(req.file)
    res.write("file uploaded")
})




app.listen(8000, ()=>console.log("Server Running on Port 8000"))