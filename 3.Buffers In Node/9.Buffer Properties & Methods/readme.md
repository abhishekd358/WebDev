

# 📌 **🔥 MOST IMPORTANT BUFFER PROPERTIES**

1. **byteLength**
2. **length**
3. **buffer** (ArrayBuffer reference)
4. **BYTES_PER_ELEMENT** (typed arrays)
5. **prototype** internal props (rarely asked)

---

# 📌 **🔥 MOST IMPORTANT BUFFER METHODS**

### **Creation Methods**

1. `Buffer.from()`
2. `Buffer.alloc()`
3. `Buffer.allocUnsafe()`
4. `Buffer.concat()`

### **Read/Write Methods (Super Important in Interviews)**

5. `buf.write()`
6. `buf.writeUInt8()`, `writeInt8()`
7. `buf.writeUInt16LE()`, `writeUInt16BE()`
8. `buf.writeUInt32LE()`, `writeUInt32BE()`
9. `buf.readUInt8()`, `readInt8()`
10. `buf.readUInt16LE()`, `readUInt16BE()`
11. `buf.readUInt32LE()`, `readUInt32BE()`

### **Search & Compare**

12. `buf.includes()`
13. `buf.indexOf()`
14. `buf.compare()`

### **Copy & Slice**

15. `buf.copy()`
16. `buf.subarray()` ← non-copy slice
17. `buf.slice()` ← old alias

### **Encoding Conversion**

18. `buf.toString()`
19. `Buffer.isEncoding()`

### **Validation**

20. `Buffer.isBuffer()`
21. `Buffer.byteLength()`

---

# 💥 NOW FULL EXPLANATION — HINGLISH + EXAMPLES + LOGIC

---

# 🔶 **1) Buffer Properties**

---

## ⭐1. `buf.length`

Buffer ke **bytes** ki total length return karta hai.

```js
const buf = Buffer.alloc(10);
console.log(buf.length);  // 10
```

Ye **fixed** hota hai — resize nahi hota.

---

## ⭐2. `Buffer.byteLength(string)`

Kaunse string ko buffer banane par kitne bytes lagenge?

```js
Buffer.byteLength('😊'); // 4 bytes utf8
```

---

## ⭐3. `buf.byteLength`

Actual used bytes (rare use).

---

## ⭐4. `buf.buffer`

Underlying **ArrayBuffer** ko return karta hai (TypedArray-style internals).

---

# 🔥 **2) Buffer Creation Methods**

---

## ⭐1. `Buffer.from()`

String, array, arrayBuffer — kuch bhi se buffer banata hai.

```js
Buffer.from('hello');
Buffer.from([1,2,3]);
```

---

## ⭐2. `Buffer.alloc(size)`

✔ Safe
✔ Zero-filled
❌ Slightly slow

```js
Buffer.alloc(10);
```

---

## ⭐3. `Buffer.allocUnsafe(size)`

✔ Fast
❌ Memory garbage ho sakti hai

```js
Buffer.allocUnsafe(10);
```

---

## ⭐4. `Buffer.concat([buf1, buf2])`

Buffers combine karne ka best method.

```js
Buffer.concat([b1, b2]);
```

---

# 🧠 **3) Read & Write Methods (Interview Favourite)**

---

## ⭐ `buf.write(string, offset)`

String ko buffer me likhna.

```js
const buf = Buffer.alloc(10);
buf.write("Hi", 0);
```

---

## ⭐ Read/Write Integers

### 8-bit

```js
buf.writeUInt8(255, 0);
buf.readUInt8(0); // 255
```

### 16-bit (LE/BE)

```js
buf.writeUInt16LE(513, 0);
buf.readUInt16LE(0); // 513
```

### 32-bit (LE/BE)

```js
buf.writeUInt32BE(1000, 0);
buf.readUInt32BE(0);
```

➜ **LE = Little Endian**
➜ **BE = Big Endian**
Interviewers ask this a LOT!

---

# 🎯 **4) Search Methods**

---

## ⭐1. `buf.includes()`

```js
Buffer.from("hello").includes("ell"); // true
```

---

## ⭐2. `buf.indexOf()`

String ya byte ka position.

```js
buf.indexOf("lo");
```

---

## ⭐3. `Buffer.compare(a, b)`

Sorting ya comparing ke kaam aata hai.

---

# 🪓 **5) Copy & Slice Methods**

---

## ⭐1. `buf.copy(target, targetStart, srcStart, srcEnd)`

```js
buf.copy(targetBuf);
```

---

## ⭐2. `buf.subarray(start, end)` (NO MEMORY COPY)

Same memory share karta hai — FAST.

---

## ⭐3. `buf.slice()`

subarray ka old version.

---

# 🔄 **6) Encoding Conversion**

---

## ⭐1. `buf.toString(encoding)`

```js
buf.toString('utf8');
buf.toString('base64');
```

---

## ⭐2. `Buffer.isEncoding('utf8')`

---

# ✔ **7) Validation Helpers**

---

## ⭐ `Buffer.isBuffer(obj)`

```js
Buffer.isBuffer(myVar);
```

---

## ⭐ `Buffer.byteLength(str)`

Encoding ke hisab se bytes count.

---

# 🧨 **INTERVIEW RAPID-FIRE SUMMARY**

| Topic         | 5-sec Explanation    |
| ------------- | -------------------- |
| `alloc`       | Safe, zero-filled    |
| `allocUnsafe` | Fast, random memory  |
| `from()`      | String → Buffer      |
| `toString()`  | Buffer → String      |
| `subarray()`  | No copy              |
| `slice()`     | No copy (old)        |
| Read/Write    | Binary data handling |
| LE/BE         | Byte order           |
| compare()     | Buffer sort          |

---
