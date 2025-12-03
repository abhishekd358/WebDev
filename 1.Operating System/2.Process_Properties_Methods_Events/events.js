// 1️⃣ exit

// 📘 Description:
// Triggered when the Node.js process is about to exit (either naturally or via process.exit()).

// 🧠 Use Case:
// Clean up before exit — close DB connections, stop servers, save logs, etc.

process.on('exit', (code)=>{
    console.log('Process exits with code:',code);
    
})


// ------------------------------------------------------------------------------------------------

// 2️⃣ SIGINT

// 📘 Description:
// Occurs when user presses Ctrl + C in terminal.

// 🧠 Use Case:
// Handle server shutdown properly (instead of force kill).

process.on('SIGINT',async()=>{
    console.log(' Ctrl+C detected! Shutting down...');
    await mongoose.disconnect();
    process.exit(0);
})


// ------------------------------------------------------------------------------------------------

// 3️⃣ uncaughtException

// 📘 Description:
// Fired when an exception (error) occurs but isn’t caught anywhere.

// 🧠 Use Case:
// Last-resort error logging (never let app crash silently).

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1); // Exit after logging
});


// ------------------------------------------------------------------------------------------------


// 4️⃣ unhandledRejection

// 📘 Description:
// Triggered when a Promise rejects but there’s no .catch() handler.

// 🧠 Use Case:
// Catch unhandled promise rejections (common in async DB or API code).

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});








// ______________________________________less commonly use are below_______________________________






// ------------------------------------------------------------------------------------------------
 
// 5️⃣ warning

// 📘 Description:
// Emitted when Node.js internally warns you (like deprecated APIs, memory leaks, etc.)

process.on('warning', (warning) => {
  console.warn('Warning:', warning.name);
  console.warn(warning.message);
});







// ------------------------------------------------------------------------------------------------

// 6️⃣ beforeExit

// 📘 Description:
// Emitted when Node.js has finished all work in the event loop,
// but before it actually exits (you can still schedule async work here).

process.on('beforeExit', (code) => {
  console.log(`Before exit with code: ${code}`);
});