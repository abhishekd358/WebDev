
### Base-64 in NodeJS

    When we write a file in base64 the file size increases by 1.3 times

    You can use the following command as well to get the base64 encoded data:
    >  base64 image.png

    If you want to get the URL of the image. Then you can use the following command:
    >  echo "data:image/png;base64,$(base64 image.png)"

    This encoding exist cuz some communication system are only text-based

    Base64url ? 
        It remove the = sign from last if exist, and +, / is replaced by -, _
        It is used for sending data in query params

---

# 🚀 **Base64 in Node.js – Practical Coding **

## 🔥 **1. Convert String → Base64**

### **Example 1: Basic String to Base64**

```js
const str = "Hello MERN Developer!";

const base64 = Buffer.from(str, "utf8").toString("base64");

console.log("Base64:", base64);
```

### Output:

```
Base64: SGVsbG8gTUVSTiBEZXZlbG9wZXIh
```

---

# 🎯 **2. Convert Base64 → Original String**

```js
const base64 = "SGVsbG8gTUVSTiBEZXZlbG9wZXIh";

const original = Buffer.from(base64, "base64").toString("utf8");

console.log("Original:", original);
```

**Output:**

```
Original: Hello MERN Developer!
```

---

# 🖼️ **3. Base64 Encode Images (common MERN interview Q)**

Ye bahut use hota hai **mobile apps me**, **S3 upload me**, **APIs me**, ya Jab front-end Base64 bhejta hai.

---

### 📌 **Image → Base64**

```js
const fs = require("fs");

const image = fs.readFileSync("logo.png");

const base64Image = image.toString("base64");

console.log(base64Image);
```

---

### 📌 **Base64 → Image (Decode)**

```js
const fs = require("fs");

const base64Data = base64Image;

fs.writeFileSync("decoded.png", Buffer.from(base64Data, "base64"));
```

---

# 🔥 **4. Base64 JSON Encoding (common in APIs & JWT)**

### Encode

```js
const obj = { name: "Rahul", role: "MERN Dev" };

const jsonStr = JSON.stringify(obj);

const base64 = Buffer.from(jsonStr).toString("base64");

console.log(base64);
```

### Decode

```js
const decoded = JSON.parse(
  Buffer.from(base64, "base64").toString("utf8")
);

console.log(decoded);
```

---

# 🔐 **5. Base64 URL Safe Encoding (JWT uses this)**

Base64 normal me `+` aur `/` aate hain
JWT me URL-safe version chahiye.

### Convert → Base64 URL Safe

```js
function base64UrlEncode(str) {
  return Buffer
    .from(str)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

console.log(base64UrlEncode("Hello"));
```

---

# 📦 **6. Binary Data → Base64**

Binary data example: PDF / Audio.

```js
const fs = require('fs');

const data = fs.readFileSync("sample.pdf");

const base64 = data.toString("base64");

console.log("PDF Base64 length:", base64.length);
```

---

# 🧪 **7. Base64 → Buffer (for uploads, cloud storage, etc.)**

```js
const base64 = "SGVsbG8=";

const buf = Buffer.from(base64, "base64");

console.log(buf);   // <Buffer 48 65 6c 6c 6f>
```

---

# 🧠 **8. Practical Real-World MERN Example: Upload Base64 Image**

### Client (React):

```js
const fileToBase64 = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.readAsDataURL(file);
  });
};
```

### Server (Node.js):

```js
app.post("/upload", (req, res) => {
  const { base64 } = req.body;

  const buffer = Buffer.from(base64, "base64");

  fs.writeFileSync("upload.png", buffer);

  res.send("Uploaded!");
});
```

---

# 🎤 **Interview Summary (1-Minute Ready-Made Answer)**

**👉 Base64 binary ko safe text format me convert karta hai.**
**👉 Node.js me encoding/decoding Buffer se hota hai.**
**👉 Mostly images, files, JSON, tokens, JWT me use hota hai.**
**👉 `Buffer.from(data).toString("base64")` to encode**
**👉 `Buffer.from(base64, "base64")` to decode**
**👉 Base64 URL safe version JWT header & payload me use hota hai.**

---

