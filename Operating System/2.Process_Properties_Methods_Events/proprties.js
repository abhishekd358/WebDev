
// return all the Process data
// console.log(process)  


// Process ID : pid
console.log("Process ID ->",process.pid);

// Process Parent ID : ppid
console.log("Process Parent ID ->",process.ppid);

// Tells OS platform (like win32, linux, darwin
console.log("Process Platfrom ->",process.platform);

// Current Node.js version
console.log("Process Version ->",process.version);

// Current Node.js version
console.log("Process Title ->",process.title); // no title by default we set
process.title = "MyNodeApp"
console.log("Process Title ->",process.title); // no title by default we set


// Returns an array of command-line arguments
console.log("Process Arguments Array ->",process.argv); // no title by default we set


// Return all environment variables
// console.log("Process Environment Variables ->",process.env); // no title by default we set


