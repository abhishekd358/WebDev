
# 🎯 **What is TCP? (Quick Refresher)**

TCP = **Transmission Control Protocol**
Used where reliability is essential.

### ✔️ TCP Features:

* Connection-based → **3-way handshake**
* Reliable → no packet loss
* Ordered delivery
* Stream-based (continuous data flow)
* Error checking
* Supports full-duplex communication (read + write together)

TCP = Perfect for
✔ Login systems
✔ Chat applications
✔ File transfer
✔ Web servers (HTTP runs over TCP)
✔ Databases

---

# 🔌 **TCP in Node.js: `net` Module**

Node.js provides `net` module for creating:

* TCP servers
* TCP clients
* Bi-directional communication
* Low-level network applications

```js
const net = require('net');
```

---

# 🌐 **How a TCP Server Works (Concept)**

```
        1. Server starts
        2. Server listens on a port (e.g., 5000)
        3. A client connects
        4. Server creates a NEW socket for that client
        5. Both can send/receive data
```

Diagram:

```
      Client 1    Client 2    Client 3
         │           │           │
         ▼           ▼           ▼
    ┌──────────────────────────────────┐
    │            TCP SERVER           │
    │   (Creates a socket for each)   │
    └──────────────────────────────────┘
        ▲           ▲           ▲
        Socket A    Socket B    Socket C
```

Each client gets its **own dedicated socket**.

---

# 🔥 **Step-by-Step: Creating a TCP Server**

---

# 🟦 Step 1 — Import the net module

```js
const net = require('net');
```

---

# 🟦 Step 2 — Create the TCP server

```js
const server = net.createServer((socket) => {
  console.log("Client connected");

  socket.write("Welcome to TCP Server!\n");
});
```

This callback runs **every time a new client connects**.
`socket` represents that client's connection.

---

# 🟦 Step 3 — Listen request from client

```js
socket.on('data', (data) => {
  console.log("Client says:", data.toString());
});
```

TCP gives data in **chunks**, so you must read it as a stream.


# 🟦 Step 3 — sending data to client

```js
// =======3)Sending data from SERVER-> CLIENT=======
        socket.write('HTTP\n\nhello world')  
        // as soon as we write we end socket
        socket.end()
```

TCP gives data in **chunks**, so you must read it as a stream.

---

# 🟦 Step 5 — Handle client disconnect

```js
socket.on('end', () => {
  console.log("Client disconnected");
});
```

---

# 🟦 Step 6 — Handle server errors

```js
server.on('error', (err) => {
  console.error("Server error:", err);
});
```

---

# 🟦 Step 7 — Bind server to a port

```js
server.listen(5000, () => {
  console.log("TCP Server running on port 5000");
});
```

---

# 🎉 **FULL TCP SERVER CODE (Copy This)**

```js
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
```

Run:

```
node tcpServer.js
```


---

# 🧠 Understanding `socket` Object (Very Important)

The `socket` is a duplex stream — it supports:

### **socket.write()**

→ Send data to client.

### **socket.on('data')**

→ Receive data from client.

### **socket.remoteAddress**

→ Get client's IP.

### **socket.remotePort**

→ Get client's port.

### **socket.end()**

→ Close connection.

---

# 📦 TCP is Stream-Based (Not Packet-Based)

UDP sends **packets (datagrams)**.
TCP sends **streams (continuous data)**.

Example:

If client sends a large file →
TCP server may receive it in parts:

```
chunk 1
chunk 2
chunk 3
```

You must handle streaming properly.

---

# 📡 Diagram: TCP Communication Flow

```
Client ------------------> Server
       (data)
Client <------------------ Server
        (response)
```

TCP = two-way reliable pipe.

---
