import crypto from 'node:crypto'

const password = 'Hello123@'

crypto.pbkdf2(password, 'salt', 100, 20, 'SHA256',(err, hashPassword)=> console.log("error->",err,"\n","hashPassword->",hashPassword.toString("base64")))

