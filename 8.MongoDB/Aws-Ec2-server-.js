const http = require("http")

const server = http.createServer((req,res)=>{
    res.end("hello AWS EC2")

})


const PORT = 8000;

server.listen(PORT,()=>console.log("Server running from AWS EC2"))