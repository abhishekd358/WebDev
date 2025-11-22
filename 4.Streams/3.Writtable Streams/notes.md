
---

# 🎥 **Writable Stream Kya Hoti Hai?**

Readable stream → tum data **read** karte ho
Writable stream → tum data **send/write** karte ho

Example:

* File write
* Log write
* HTTP response send
* Uploads
* TCP data push

---

# 🧠 **How Writable Streams Work Internally?**

Writable streams ke andar:

* **Internal buffer** hota hai
* Tum write() se data bhejte ho
* Agar buffer empty hai → write instantly
* Agar buffer busy hai → data queue hota hai
* `drain` event fire hota hai when buffer frees

This is where **backpressure** happens.

---

### 🚦 Writable Stream Lifecycle (Real Order)

```
1️⃣ open     -> Stream resource is ready (file/socket opened).

2️⃣ write()  -> Data goes into internal buffer.

      └─ if buffer < highWaterMark → keep writing
      └─ if buffer full → write() returns false → wait for 'drain'

3️⃣ drain    -> Internal buffer has space again → continue writing.

4️⃣ end()    -> User tells: "No more data will come."

5️⃣ finish   -> All buffered data is flushed and writing fully completed.

6️⃣ close    -> Resource closed (file handle/network connection closed).

❗ error     -> Can occur ANYTIME if something goes wrong.
```



---

# 🛢 **Writable Stream Internal Buffer (Very Important!)**

Jab tum `write()` karte ho, Node:

* Pehle data ko internal buffer mein store karta hai
* Phir system ke through write karta hai

This buffer ka size controlled by:

### `highWaterMark`

File streams: default = **16KB**
TCP streams: default = **16KB**
HTTP streams: default = **16KB**

---

# 🧪 Example with custom buffer:

```js
const ws = fs.createWriteStream("output.txt", { highWaterMark: 1024 });
```

Yeh 1KB ka internal buffer banayega.

---

# ⚠️ Backpressure (Most Important Concept)

Backpressure =
👉 “Writer data zyada bhej raha hai, system utna fast write nahi kar pa raha.”

Writable stream ke backend mein:

* OS slow ho sakta hai
* Disk slow ho sakti hai
* Network latency ho sakti hai

Jaise hi buffer full hota hai → `write()` returns **false**.
Tumhe aur data nahi bhejna chahiye.

---

# 🧠 **Backpressure ka Solution: `drain` Event**

Writable stream bolega:

✔ “Mera buffer khali ho gaya, ab bhej sakte ho.”

Example:

```js
function writeData() {
    let ok = true;

    while(ok) {
        ok = ws.write("Hello World\n");
    }

    if (!ok) {
       ws.once("drain", writeData);
    }
}

writeData();
```

This is EXACT backpressure handling required for real-world apps.

---

# 🧩 **Why write() Returns TRUE or FALSE?**

* **true** → buffer space available, keep writing
* **false** → buffer full, wait for `drain`

This prevents RAM overflow.

---

# 🎯 States of Writable Streams

Writable streams ke kuch states hote hain:

1. **Writable = true**
   → Stream active hai, write kar sakte ho

2. **Corked**
   → Temporarily writes buffer ho jaati hain
   → `cork()` / `uncork()` functions hote hain

3. **Ending**
   → Tumne `end()` call kar diya hai, ab final data write hoga

4. **Finished**
   → Sab data write ho chukka, stream closed

5. **Errored**
   → Kuch error aaya, stream usable nahi

---

# 📤 **Ending Writable Stream Properly**

Jab tum writing khatam kar lo, use karo:

```js
ws.end("Final data");
```

Events:

### ✔ `finish`

Jab saara data write ho jaye

```js
ws.on("finish", () => console.log("Done writing!"));
```

### ✔ `close`

File descriptor close ho gaya

---

# ⚡ Simple Example (Writable Stream)

```js
const fs = require("fs");
const ws = fs.createWriteStream("output.txt");

ws.write("Hello World!\n");
ws.write("Writing via stream...\n");

ws.end("Goodbye!");
```

Output:

* File created
* Data in chunks write hota hai
* Stream gracefully close hoti hai

---

# 🔥 Example: Writing 1 Lakh Lines (Streams OP)

```js
const fs = require("fs");
const ws = fs.createWriteStream("numbers.txt");

for(let i = 1; i <= 100000; i++) {
    if(!ws.write(i.toString() + "\n")) {
        ws.once("drain", () => {});
    }
}

ws.end();
```

70MB ka file safe generate ho jata hai bina memory blast ke. 💯🔥

---

# 🤩  Summary

Writable Streams =
🎯 Data ko partial write karne ka fastest way
🎯 Backpressure handling = professional level coding
🎯 Internal buffer = smart memory management
🎯 write() → true/false = must understand
🎯 drain event = buffer ready blast function
🎯 end() = graceful close

