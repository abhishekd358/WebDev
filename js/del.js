console.log(Number ("12px")) // NAN output
console.log(parseInt ("12pdfgh,hkcnx")) // 12 output
console.log(parseInt ("dfghjk12pdfgh,hkcnx")) // it act as now string so OUTPUT : NaN

// + → favors string concatenation
// Other math ops (- * /) → convert operands to number

console.log([] + []); // ""   :: tip:-> treat [] as a empty string ''
console.log([] + {}); // [object object]    ::: "" + "[object Object]"
console.log({} + []); // 0   
console.log({} + {}); // NaN
console.log([] - {}); //NaN
console.log({} - []); //NaN

// TIP : treat [] as a empty string ''
// TIP : tip:-> treat {} as Number , as the first expression is treated as a block



console.log("5" - -"5");  //-"5" → -5 → "5" - (-5) → 10
console.log("5" - +"5");  // +"5" → 5 → "5" - 5 → 0



console.log("true" == true); //  "true" → NaN
console.log("false" == false); // "false" → NaN


console.log("10" > 9);  //"10" → number → 10 > 9 → true
console.log("2" > "12"); //"2" > "12" → string comparison (lexicographical)


// Comparison operators convert null → 0, but in below wxample == behave differently
console.log(null == 0); // false   
console.log(null > 0); // false
console.log(null >= 0); // true

console.log([] == 0); // true
console.log([] === 0); // false


// ======================================= LOOP QUESTION
console.log('==============================LOOP QUESTIONS========================================');

if ("0") {  
  console.log("Hello");
}
// Ans → “Hello”
// Because "0" is truthy, only empty string "" is falsy.



for (let i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), 1000);
} 
// Output: 1 , 2 , 3


for (var i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), 1000);
} 
// Output: 4, 4, 4 Because var is function-scoped, loop ke baad i = 4 ho jata hai.




console.log('==============================Functions========================================');
// Arrow function own this nahi banata, parent ka this use karta hai.
// Arrow function parent ka this le leta hai


console.log('==============================SCOPE========================================');
// A function can access variables from the place where it was written (defined), not from where it is called.
// Lexical scope means a function remembers the environment where it was created.
// example:
let a = 100;

function outer() {
    let a = 20;
    inner();  // not here were it called
}

function inner() { // inner remeber value were it declare , here it declare 
    console.log(a);
}

outer();



console.log('==============================CLOSURE========================================');
// Inner function outer function ke variables ko yaad rakhta hai even after outer function execution is finished.

// example:
function outer() {
    let count = 0;
    
    function inner() {
        count++;
        console.log(count);
    }
    
    return inner;
}

const fn = outer();
fn(); // 1
fn(); // 2
fn(); // 3
// Even after outer() finishes, count STILL EXISTS
// → Closure stores the lexical environment

// --------------- importance of using clouser why it used?
// ✔ Data Privacy / Encapsulation
// ✔ Function Factories
// ✔ Module Pattern
// ✔ Debouncing / Throttling
// ✔ Currying
// ✔ Memoization


// Currying CLosure question
function sum(a) {
    return function(b) {
        return a + b;
    }
}

console.log(sum(5)(3)); // ?

// OUTPUT: 8





console.log('=======================Execution Context & Call Stack==================================');
// Execution Context = 👉 JavaScript code kaise run hota hai iska environment.

// Every time JS koi code execute karta hai, it creates:

// Global Execution Context (GEC) :- When your JS program starts, sabse pehle GEC banta hai.

// Function Execution Context (FEC) :- Jab function call hota hai → naya execution context banta hai.



console.log('=======================Execution Context & Call Stack==================================');

// JS engine single-threaded

// Browser/Node handle async via Web APIs + Event Loop  (Event Loop = Jo continuously check karta hai ki ,Call Stack empty hai ya nahi. Agar empty hai → queue se task uthakar stack me daalta hai.)

// Microtask queue > Callback Queue

// Promises run BEFORE setTimeout

// Event loop continuously checks empty stack

// Long-running tasks block JS

// ====================
// fetch → MIXED
// This confuses people.
// ✔ Fetch network request goes → macrotask
// ✔ Fetch .then() callback goes → microtask

// 💠await breaks the function into microtasks.



// 1:->Synchronous 2:->Microtask 3:->Macrotask 
console.log("1");  // 1:Synchronous

setTimeout(() => { //6: Macrotask
  console.log("2"); // 6(syncronous)

  Promise.resolve().then(() => { // 8: Microtask
    console.log("3"); // 8 
  });

  async function x() {  // 7: Syncronous  
    console.log("4"); // 7
    await null;  // 9: Microtask  :-💠await breaks the function into microtasks
    console.log("5"); // 9
  }
  x();

}, 0);

Promise.resolve().then(() => { //4:- Promise:Microtask
  console.log("6"); // 4
  setTimeout(() => { // Macrotask
    console.log("7"); //10
  }, 0);
});

async function y() { // 2:Synchronous
  console.log("8"); // 2:Synchronous
  await null;   // 5:-> Microtask :- 💠await breaks the function into microtasks
  console.log("9");   // 5
}
y();

console.log("10");  // 3:Synchronous
// OUTPUT: 1 8 10 6 9 2 4 3 5 7 


console.log("=================================CALL/BIND/APPLY===============================");
// Explicit Binding — call / apply / bind

// call() — pass arguments one by one
// call → invoke function immediately, args comma-separated
function greet(a, b) {
  console.log(this.name, a, b);
}

greet.call({name: "Amit"}, "hello", "world");


// apply() — pass arguments as array
// envoke function immediately, args array
greet.apply({name: "Amit"}, ["hello", "world"]);

// bind() — returns a new function with permanent this
// DOES NOT invoke, returns new function with locked this
const newGreet = greet.bind({name: "Amit"});
newGreet("hello", "world");



// Arrow function’s this = global.



console.log('=======================Prototype & Inheritance==================================');

// Every JavaScript object has a hidden property called [[Prototype]] which refers to another object from which it can inherit properties.

// prototype → belongs to function (used for making instances)
// __proto__ → belongs to object (points to parent)

// How to check prototype of an object? 
// ANS:-Object.getPrototypeOf(obj);

// How to set prototype manually?
// ANS:-Object.setPrototypeOf(child, parent);

// How does inheritance work internally in JS?
// ANS:JavaScript uses a prototype chain where each object contains a reference to another object (its prototype). When a property is not found, the engine looks upwards until null.
console.log('=======================PROMISES==================================');
// -----------------------Promise.all, Promise.race, Promise.allSettled, Promise.any
// Promise.all → sab succeed hone chahiye
// If any fails → all fail.

// Promise.any → first success
// If all fail → error.

// Promise.race → first settled (success/fail)

// Promise.allSettled → success/fail ka result deta hai


// 💠💠
// Q: Difference between Promise and async/await?
// Answer:
// async/await is syntactic sugar on top of promises.
// async/await makes code look synchronous.
// Error handling → try/catch (cleaner than .catch).
// Still uses the microtask queue internally.

console.log('=======================TRY CATCH BLOCK==================================');

console.log('=======================DOM==================================');

// Q1:. Difference between Node vs Element?
// ANS:- NODE;- Sab kuch node hota hai (comment, text, element)  
//       Element:- Sirf HTML tags element hote hain

// Q2:Difference between querySelector vs getElementById?
// ANS:- querySelector → CSS selector support, returns first match
//       getElementById → FASTEST


// Q3:What is reflow and repaint? (MOST ASKED)
// ANS:- Repaint → Visual update (color change)
//       Reflow → Layout recompute (size/position change)




// Q4:Difference between setAttribute() and direct property?
// ANS:- Repaint → Visual update (color change)
//       Reflow → Layout recompute (size/position change)



// Q5:Why DOM is Slow
// ANS:- DOM nodes are C++ objects in the browser, not JS objects.
//       Every time JS touches DOM → browser must bridge JS ↔ C++ → slow boundary crossing.
//       DOM Tree is Large and Complex
//       DOM Manipulations Are Synchronous
//       DOM Updates Cause Reflow + Repaint


// Q6:-What is LocalStorage, SessionStorage & Cookies?
// | Feature         | LocalStorage | SessionStorage | Cookies       |
// | --------------- | ------------ | -------------- | ------------- |
// | Life            | Forever      | Tab close      | Custom expiry |
// | Size            | 5–10 MB      | 5 MB           | 4 KB          |
// | Sent to server? | ❌           | ❌            | ✔             |

// Q7:-What is Web Storage API?
// localStorage, sessionStorage



