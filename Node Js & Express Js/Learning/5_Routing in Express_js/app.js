// to understand routing first we have to create Server

import express from 'express';

const app = express();

// express have the .get method to fetch data from server
app.get('/', (req, res)=>{
    res.send("We Use .send Method")
})



const port = 8000
app.listen(port, ()=> console.log('Server Running'))