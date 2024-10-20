let myDate = new Date()
console.log(myDate.toString())
myDate.toDateString()  //return the date in proper format
myDate.toISOString() //return the date in ISO string format
myDate.toJSON()
myDate.toLocaleDateString() // dd/mm/yy format
myDate.toLocaleString() // dd/mm/yy, hh:mm:ss format
myDate.toLocaleTimeString() //  hh:mm:ss format
myDate.toUTCString() // Sun, 13 Oct 2024 18:11:06 GMT format
x = myDate.getDate()

//console.log(x)


// ==========================Important======================
y = Date() // type is string
//console.log(y.toDateString()) // any method of Date can not work because it is a type of 'String'

// in js the month is january is trated as 0.



//IMP: converting the date in to second 
console.log(Math.floor(Date.now()/ 1000))

myDate.toLocaleString('default',{
    calendar : "long"
})

