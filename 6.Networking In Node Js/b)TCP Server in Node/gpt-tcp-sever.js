const net = require('net');

const server = net.createServer((socket) => {
  console.log("New client connected:", socket.remoteAddress, socket.remotePort);

  // send welcome message
  socket.write("Hello Client! You are connected to the TCP Server.\n");

  // receive data
  socket.on('data', (data) => {
    console.log("Client says:", data.toString());

    // send back response
    socket.write(`Server received: ${data}`);
  });

  // on client disconnect
  socket.on('end', () => {
    console.log("Client disconnected");
  });
});

// on server error
server.on('error', (err) => {
  console.error("Server Error:", err);
});

// start server
server.listen(5000, () => {
  console.log("TCP Server running on port 5000");
});
