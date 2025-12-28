import crypto from "node:crypto"

const password = "12345"
// console.log(crypto);
const x = crypto.createHash("sha256").update(password).digest('hex')
console.log(x);


