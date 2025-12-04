import { createServer } from 'node:net'


// ====================1)Create the TCP server========================
// app is nothing but sever instance
const app = createServer((socket)=>{
    //Socket is a duplex string

    console.log('client connected'); // print when a new client / request comes to this port

    // =================2)Listen for incoming data=================================================
    // socket listening data/request coming from client
    socket.on('data', (chunck)=>{
        console.log('comming data from CLIENT:-',chunck.toString());
        
    // ================3)Sending data from SERVER-> CLIENT=================================================
        socket.write('HTTP\n\nhello world')  
        // as soon as we write we end socket
        socket.end()

    })
    

    // =================4)Handle client disconnect===================================================
    // socket.on('end', ()=>{
    //     console.log('client disconnected');
        
    // })
    
})  






// we have created server instance but we not giving port were it listen
app.listen(4000, '0.0.0.0')  // here we pass callback it nothing but below 'listening' event

app.on('listening', ()=>{
    console.log('Server Started on 4000');
    
})

// socket.write('HTTP\n\nhello world')

// This is NOT a real HTTP response, but…
// ✔ The browser sees the HTTP keyword
// ✔ And sees two newlines (\n\n)
// ✔ It loosely assumes it's an HTTP header section
