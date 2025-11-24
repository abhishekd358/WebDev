const {openSync, open} = require('fs')


// return fd value 
const fd = open("readme.md", 'r',(err, fd)=>{
    console.log(err)
    console.log(fd)

})
console.log((fd));




