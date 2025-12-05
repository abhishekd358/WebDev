import http from 'node:http'

const server = http.createServer((request, response)=>{
    // the DATA coming from client on request method :- request made by Client1
    request.on('data', (chunk)=>{
        console.log(chunk.toString())
    })
    
    response.end("Goodbye!");
})


server.listen(80,'0.0.0.0' ,() => {
  console.log("Server listening at 3000");
});

