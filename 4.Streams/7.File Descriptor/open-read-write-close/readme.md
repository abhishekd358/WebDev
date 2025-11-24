
# 📌 **FS File Descriptor Operations – ALL METHODS**

Hum cover karenge:

### ✔ `open`

### ✔ `read`

### ✔ `write`

### ✔ `close`

In **3 versions**:

1. **Async Callback Style**
2. **Promise Style (fs.promises)**
3. **Sync Style**

Super-organized form me 👇

---

# 🟦 **1) OPEN FILE**

---

## ✅ **Async (Callback)**

```js
const fs = require("fs");

fs.open("data.txt", "r", (err, fd) => {
  if (err) throw err;
  console.log("FD:", fd);
});
```

---

## 🟩 **Promise-based**

```js
const fs = require("fs/promises");

async function run() {
  const fd = await fs.open("data.txt", "r");
  console.log("FD:", fd.fd);
  await fd.close();
}
run();
```

---

## 🟥 **Sync Version**

```js
const fs = require("fs");

const fd = fs.openSync("data.txt", "r");
console.log("FD:", fd);
fs.closeSync(fd);
```

---

# 🟦 **2) READ FROM FILE USING FD**

---

## ✅ **Async (Callback)**

```js
const fs = require("fs");

fs.open("data.txt", "r", (err, fd) => {
  const buffer = Buffer.alloc(100);

  fs.read(fd, buffer, 0, 100, 0, (err, bytesRead) => {
    console.log("Read:", buffer.toString("utf8", 0, bytesRead));

    fs.close(fd, () => {});
  });
});
```

---

## 🟩 **Promise-based**

```js
const fs = require("fs/promises");

async function readFile() {
  const fd = await fs.open("data.txt", "r");

  const buffer = Buffer.alloc(100);

  const { bytesRead } = await fd.read(buffer, 0, 100, 0);

  console.log("Read:", buffer.toString("utf8", 0, bytesRead));

  await fd.close();
}

readFile();
```

---

## 🟥 **Sync Version**

```js
const fs = require("fs");

const fd = fs.openSync("data.txt", "r");
const buffer = Buffer.alloc(100);

const bytesRead = fs.readSync(fd, buffer, 0, 100, 0);

console.log("Read:", buffer.toString("utf8", 0, bytesRead));

fs.closeSync(fd);
```

---

# 🟦 **3) WRITE TO FILE USING FD**

---

## ✅ **Async (Callback)**

```js
const fs = require("fs");

fs.open("data.txt", "w", (err, fd) => {
  const data = "Hello World";

  fs.write(fd, data, (err, written) => {
    console.log("Bytes Written:", written);
    fs.close(fd, () => {});
  });
});
```

---

## 🟩 **Promise-based**

```js
const fs = require("fs/promises");

async function writeFile() {
  const fd = await fs.open("data.txt", "w");

  const data = "Hello World!";

  const { bytesWritten } = await fd.write(data);

  console.log("Bytes Written:", bytesWritten);

  await fd.close();
}

writeFile();
```

---

## 🟥 **Sync Version**

```js
const fs = require("fs");

const fd = fs.openSync("data.txt", "w");

const data = "Hello World";

const written = fs.writeSync(fd, data);

console.log("Bytes Written:", written);

fs.closeSync(fd);
```

---

# 🟦 **4) CLOSE FILE DESCRIPTOR**

---

## ✅ **Async (Callback)**

```js
fs.close(fd, (err) => {
  if (err) throw err;
  console.log("FD Closed");
});
```

---

## 🟩 **Promise-based**

```js
await fd.close();
```

---

## 🟥 **Sync Version**

```js
fs.closeSync(fd);
```

---

# 🎯 **MASTER TABLE — COMPLETE SUMMARY**

| Action    | Async        | Promise              | Sync             |
| --------- | ------------ | -------------------- | ---------------- |
| **open**  | `fs.open()`  | `fs.promises.open()` | `fs.openSync()`  |
| **read**  | `fs.read()`  | `fd.read()`          | `fs.readSync()`  |
| **write** | `fs.write()` | `fd.write()`         | `fs.writeSync()` |
| **close** | `fs.close()` | `fd.close()`         | `fs.closeSync()` |

---

# 💥 BONUS TIP

**Streams internally use exactly these 4 functions loop-wise:**

```
open → read/write → read/write → close
```

Samajhne se Streams ka internal magic unlock ho jata hai 🔥

---
