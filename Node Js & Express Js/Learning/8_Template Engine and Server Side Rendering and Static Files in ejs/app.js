// create server

import express from 'express';
import path from 'path';



const app = express();

// making the public folder static

// abs path
const absPath = path.resolve()
// console.log(absPath);

const publicDir = path.join(absPath, 'public')
console.log(publicDir)

// using middleware
app.use(express.static(publicDir))


const obj = {
    name: 'Romeo',
    country: 'Malondon'
} 

app.get('/', (req, res)=>{
    res.render('index.ejs', {obj}) // this how we can pass the obj and this calls SSR
})


const port = 1400
app.listen(port, console.log(`Server Rendering...!!! on ${port}`))