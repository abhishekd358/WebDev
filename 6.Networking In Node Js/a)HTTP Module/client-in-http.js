import http from 'node:http'


// he ClientRequest instance, which represents an outgoing HTTP request and is returned by http.request(), is a writable stream.

// we create one client to write on the servevr
const client1 = http.request({method:'POST'})

// here we wiriting data on to the server
client1.write("THis is Client 1 Request ")


// ------------------- this is data that receiveing to client from server when it make connection with server
// client1.on('response', (response) => {
//     response.on("data", (chunk)=>{
//         console.log("Body:--------", chunk.toString());
//     })
// });