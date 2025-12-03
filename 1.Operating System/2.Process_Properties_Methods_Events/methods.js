


// Ends the process with an exit code (default = 0)
// process.exit(1) 


// Returns current working directory
console.log("Current working directory ->",process.cwd()); 

// Returns how long process has been running (in seconds)
console.log("Running Time of Process ->",process.uptime()); 


// Change current working directory
process.chdir('../')
console.log("Now current working directory ->", process.cwd());  // now the current working directory change


// Returns memory stats (heap used, total, RSS)
console.log("Memory Use ->",process.memoryUsage());


// Send a signal to a process
// process.kill(pid, [signal])




// Runs callback before event loop continues
// process.nextTick(callback)
// nextTick() queue me callback ko daalta hai jo current phase ke baad run hota hai

console.log("1️ Start");

process.nextTick(() => {
  console.log("2️ Next Tick");
});

console.log("3️ End");

// 1️⃣ Start
// 3️⃣ End
// 2️⃣ Next Tick

