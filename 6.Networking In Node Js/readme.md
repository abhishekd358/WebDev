

# 📝 **Sockets**
- It is where **data enters and exits** between two applications over a network.
- If two computers want to talk → both need sockets.
```
● A socket is a communication endpoint (IP + Port).
● It allows two applications to send/receive data over a network.
● Node.js sockets come from:
   - UDP: dgram.createSocket()
   - TCP: net.Socket (auto-created on connection)
● TCP sockets = connection-based, persistent, duplex stream.

● socket.write() → send data (TCP)
● socket.on('data') → receive data (TCP)

● Socket = foundation of networking; HTTP, FTP, DNS all use sockets.
● Every network connection uses a socket pair:
   ClientIP:Port ↔ ServerIP:Port
```

---


# 📝 **CreateServer And Socket events**

```
● createServer() returns a net.Server object.
● Server Events:
   1. connection → new client connected (gives socket)
   2. listening → server started listening
   3. error → server error (port busy, network issue)
   4. close → server stopped

● Socket Events:
   1. data → client sent data
   2. end → client disconnected
   3. error → socket failure
   4. close → socket fully closed

● Server = manages connections.
● Socket = manages communication with each client.
```

---



# 📝 **TCP SERVER DOING HTTP CALL **

```
● TCP = reliable, connection-based, ordered, stream-based protocol.
● Node.js uses net module for TCP.
● net.createServer(callback) creates a TCP server.
● callback receives a socket for each client connection.
● socket is a duplex stream: socket.write() and socket.on('data').
● server.listen(port) to start the server.
● TCP server creates a NEW socket per client.
● socket.remoteAddress / remotePort gives client info.
● TCP ensures no packet loss and perfect ordering.
● Use nc or telnet to test TCP servers.
● Use cases: chat apps, file transfer, APIs, backend services.
```

