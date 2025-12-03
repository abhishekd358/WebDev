console.log("here we get true ",exports === module.exports)// true
console.log(module)

// {
//   id: '.',
//   path: '/path/to/project',
//   exports: {},
//   filename: '/path/to/file.js',
//   loaded: false
// }

exports = { 'hi': 'he'}  // new object (breaks link)
console.log(exports);  // this is completly different object  than module.exports

// now if we print the module
console.log(module);

console.log(exports === module.exports)


const num = 10
module.exports = {num}


