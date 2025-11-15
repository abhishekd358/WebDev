const buffer = new ArrayBuffer(2);
const view = new DataView(buffer);

view.setUint16(0, 500, true); // little-endian
console.log(view);