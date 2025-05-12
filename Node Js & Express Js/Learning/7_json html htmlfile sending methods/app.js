import express from "express";
import path from 'path';

const app = express();


// inline html and css rendering
app.get("/", (req, res) => {
  res.send('<div style="background-color:red;"><h1>This is Inline html</h1></div>');
});



// json rendering
app.get('/json', (req, res)=>{
    res.json({
        name: 'RollX',
        address : 'unknown',
        age : 29,
    });
})


// htmlFile rednering like index.js 
// create index.html in this folder
// import path module
app.get('/index', (req, res)=>{

    // current directory absolute path 
    const dirName= path.resolve()
    // console.log(dirName)

// join the index.js file with the dirName
    const filePath = path.join(dirName,'index.html')
    // console.log(filePath)

// pass the filePath to .sendFile 

    res.sendFile(filePath);

})



const port = 1300;
app.listen(port, () => console.log(`Server Running on Port ${port}`));
