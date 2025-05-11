// creating server here

// first import http module 
import http from 'http';


// createServer() is method which have a res -> response, req-> request parameters 
const server = http.createServer();
// here we declaring port of our choice were we want to create the server
const port = 8000

// listen(port, callback) basically take port and callback . callback after server created on that port
server.listen(port, ()=>console.log('Your Server Created'));









// ====================== creating server with return user a response ============================



// createServer() is method which have a res -> response, req-> request parameters 
const server2 = http.createServer((req,res) =>{
    // .end -> it display on browser whatever we pass when the server ends
    res.end(`welcome !!!! you created your server on ${port2}`)
});
// here we declaring port of our choice were we want to create the server
const port2 = 5000

// listen(port, callback) basically take port and callback . callback after server created on that port
server2.listen(port2, ()=>console.log('Your 2nd Server Created'));