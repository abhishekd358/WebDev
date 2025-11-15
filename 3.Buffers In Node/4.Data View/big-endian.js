const buffer = new ArrayBuffer(2);
const view = new DataView(buffer);

view.setUint16(0, 500, false); // big-endian
console.log(view);