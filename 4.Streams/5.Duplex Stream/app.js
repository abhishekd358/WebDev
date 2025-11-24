import { Duplex } from "stream";

const duplexStream = new Duplex({
  read(size) {
    this.push("Hello from Read side\n");
    this.push(null); 
  },
  write(chunk, encoding, callback) {
    console.log("Received:", chunk.toString());
    callback();
  }
});

duplexStream.write("Client says Hi!");
duplexStream.on("data", (data) => {
  console.log("Readable Output:", data.toString());
});
