📘 TEXT DECODER — Notebook Notes (Simple & Clear)
🔹 What is TextDecoder?

TextDecoder is a built-in browser/Node API that converts binary data (bytes) into human-readable text (UTF-8, UTF-16, etc.).

👉 Use when your bytes represent text
❌ Not for numbers
✔️ Only for string decoding

🔹 Why is TextDecoder needed?

Because computers store text as bytes, not characters.

Example:
Letter A → UTF-8 → byte: 65

If you receive bytes from:

network

file

buffer

typed array
→ You must convert them back into text.

That conversion = TextDecoder.

🔹 How it works

Example:

const bytes = new Uint8Array([72, 101, 108, 108, 111]); // "Hello"
const text = new TextDecoder().decode(bytes);
console.log(text); // "Hello"


Bytes → characters.

🔹 Default Encoding: UTF-8

If not specified:

new TextDecoder(); // UTF-8 by default


UTF-8 is used everywhere (web, JSON, files).

🔹 When to use TextDecoder

✔️ When bytes represent TEXT
✔️ When reading file contents
✔️ When receiving network binary data
✔️ When converting ArrayBuffer → string
✔️ When dealing with Encoded text formats

❌ Do NOT use for plain numbers
Use DataView for numbers instead.

🔹 Basic Syntax
const decoder = new TextDecoder("utf-8");
const text = decoder.decode(byteArray);

🔹 Special Feature — Streaming Decode

If large text is split across chunks (like network packets):

const decoder = new TextDecoder("utf-8", { fatal: false });
decoder.decode(chunk1, { stream: true });
decoder.decode(chunk2, { stream: true });


Used in streams/network.

🔹 TextEncoder vs TextDecoder (VERY IMPORTANT)
Feature	TextEncoder	TextDecoder
Converts	String → bytes	Bytes → String
Default format	UTF-8	UTF-8
Returns	Uint8Array	String
Used for	sending data	reading data

Example:

new TextEncoder().encode("Hi")  // → [72, 105]
new TextDecoder().decode([72,105])  // → "Hi"