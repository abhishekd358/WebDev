// to routing we use the http module of node and we set route on conditions

import http from 'http';

// create a server

// createServer() method have req(request-> done by user to server) and response(response->given by server to user)
const server = http.createServer((req, res)=>{
    if(req.url === '/home'){
        res.end('This is Home Page')
    }else if(req.url === '/about'){
        res.end('This is About Page')
    }else{
        res.end('<h1>Route Not Found</h1>') // here we pass HTML 
    }
})





// port 
const port = 8000
server.listen(port, ()=>console.log('Server Running....!!!'))