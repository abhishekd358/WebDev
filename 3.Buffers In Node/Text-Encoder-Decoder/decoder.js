const bytes = new Uint8Array([72, 101, 108, 108, 111]); // "Hello"
const text = new TextDecoder().decode(bytes);
console.log(text); // "Hello"


// basic syntax
const decoder = new TextDecoder("utf-8");
const text2 = decoder.decode(byteArray);
