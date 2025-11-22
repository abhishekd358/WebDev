
✔ Default chunk size for: 
                File streams is 64KB
                Network streams is 16KB

✔ but we can change chunk size with higWaterMark = <any_number>

✔ Streams are Asynchronous and event-driven.

✔ Chunks received from streams are Node.js Buffer objects.

✔ Buffer is a TypedArray (based on Uint8Array) and internally uses ArrayBuffer.

✔ Node.js uses a Buffer Pool system to reduce memory allocation overhead,
   so buffers are reused when possible instead of creating new memory every time.


-------------------------------------------------------------------------
✔ createReadStream → File ko chunks me read karta hai
✔ statSync → File ka size nikalne ke liye
✔ .on('data') → Jab chunk stream hota hai tab event fire hota hai
✔ appendFileSync → Chunk ko new file me write karta hai (slow method)
✔ .on('end') → Jab saari file read ho jaye
-------------------------------------------------------------------------------


