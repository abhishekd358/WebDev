// console.log(module); // no common js access module 

console.log(import.meta)


// Current module ka file URL (file://...)
console.log('url ->',import.meta.url) 



// Current file ka folder path
console.log('dirname ->',import.meta.dirname) 



// Current file ka full file path
console.log('filename ->',import.meta.filename) 



// true agar ye hi entry file hai (directly run hui ho)
console.log('main ->',import.meta.main) 



// Resolve path of another module
console.log('resolve ->',import.meta.resolve('./note.txt')) 






