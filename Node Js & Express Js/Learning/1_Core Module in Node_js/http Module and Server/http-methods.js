// server creation

import http from 'http';

const server = http.createServer((req, res)=>{
// ================================= res object methods  =====================================

    // 1. statusCode() use to sets the status code like 200, 404, 500 etc
    res.statusCode = 404;
    // console.log(res.statusCode) // returns the 404 in terminal
    
    
    //2: .setheader() with this we able to set the kind of data ; like Content-Type, user-agent
    res.setHeader('Content-Type', 'application/json')

    
    // 3 : .write() -> whatever we want to write on sever side we can wirte here , we can render pages as well
    res.write('THis is written with the .write() method available in res object\n\n')

    
    //4: .end() is end the server ; if not end the browser going on buffering
    res.end('this will going to end the server')



    // ================================= req object methods  =====================================

    // 1. req.url it return the user inputed path/route in browser after the hostanme/ 
    const browser_path = req.url
    // console.log(browser_path)

    // 2. req.headers
    const header_info = req.headers
    // console.log('HEADER INFO:->',header_info)

    // 3. req.method -> returns what kind of request is made (GET, POST)
    const method_type = req.method
    // console.log(method_type);


});
const port = 8000
server.listen(port, ()=>console.log('Your Server Created'));