

# 📝 **READ notes.txt for SHORT SUMMARY*

## ⭐ 1. **What is Buffer?**

* Raw **binary data container** (not string, not array)
* Fixed-size memory block
* Lives **outside V8 heap** → very fast
* Used in: **File System, Streams, Network, Crypto**

---

## ⭐ 2. **Why Buffer exists?**

JavaScript originally only handled **text**, but Node.js needs:

* images
* videos
* audio
* PDFs
* network packets
* binary streams

So Node introduced **Buffer class** for binary handling.

---

## ⭐ 3. **How to create Buffer**

### ✔ `Buffer.from(data)`

For existing data

```js
Buffer.from("Hello");
Buffer.from([1,2,3,255]);
Buffer.from("48656c6c6f", "hex");
```

---

### ✔ `Buffer.alloc(size)`

Safe, zero-filled memory

```js
Buffer.alloc(10);
```

---

### ✔ `Buffer.allocUnsafe(size)`

Fast, returns uninitialized memory

```js
Buffer.allocUnsafe(10);
```

---

## ⭐ 4. **Buffer Properties**

### ✔ Fixed size

`buf.length` always same as allocated size.

### ✔ Each element = 1 byte (0–255)

```js
buf[0] = 255;
```

---

## ⭐ 5. **Writing & Reading**

```js
buf.write("Hi");        // write string
buf.toString();         // read as UTF-8
buf.toString("hex");    // hex output
```

---

## ⭐ 6. **Encodings Supported**

* utf8 (default)
* ascii
* hex
* base64
* utf16le
* binary

---

## ⭐ 7. **Important Buffer Methods**

| Method                 | Description        |
| ---------------------- | ------------------ |
| `Buffer.alloc()`       | safe zero-filled   |
| `Buffer.allocUnsafe()` | fast uninitialized |
| `Buffer.from()`        | create from data   |
| `buf.write()`          | write data         |
| `buf.toString()`       | read data          |
| `buf.slice()`          | zero-copy slice    |
| `buf.copy()`           | copy data          |
| `Buffer.concat()`      | merge buffers      |

---

## ⭐ 8. **Zero-Copy Behavior**

`buf.slice()` does **not** create new memory — it references same memory.

```js
let a = buf.slice(0, 5);
a[0] = 65;   // modifies original buffer
```

---

## ⭐ 9. **Where Buffers are used?**

* `fs.readFile` → returns buffer
* HTTP request chunks → buffer
* TCP sockets → buffer
* crypto hashing → buffer
* streaming videos/files → buffer

---

## ⭐ 10. **Buffer Internals (Important)**

* Buffer is built on top of:
  `Uint8Array + ArrayBuffer`
* Node uses **Slab allocator (Memory Pool)** of 8 KB for small buffers
* `b.buffer.byteLength` shows **total backing ArrayBuffer**
* `b.byteLength` shows **your slice size**

Example:

```js
const b = Buffer.from([1,2,3,4]);
b.byteLength → 4          // your usable buffer
b.buffer.byteLength → 8192  // underlying pool memory
```

---

## ⭐ 11. **Buffer vs String**

| String       | Buffer            |
| ------------ | ----------------- |
| Unicode text | Raw bytes         |
| Dynamic size | Fixed size        |
| Slow edits   | Fast binary ops   |
| For UI/text  | For files/network |

---

# 📌 **One-line Definitions (Revision)**

### **Buffer**

Binary data block used for file & network operations.

### **alloc vs allocUnsafe**

* `alloc()` → safe, zero-filled
* `allocUnsafe()` → fast, old random memory

### **slice()**

Zero-copy view; modifies original memory.