# 🧩 Variables (var, let, const)

#### 1️⃣ Core Concepts to Know
| Concept            | Description                                                                                                                   |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| **Declaration**    | `var`, `let`, and `const` are used to declare variables.                                                                      |
| **Scope**          | `var` → function scoped; `let` & `const` → block scoped.                                                                      |
| **Hoisting**       | All are hoisted, but `var` is initialized with `undefined`, while `let` & `const` remain in the **Temporal Dead Zone (TDZ)**. |
| **Re-declaration** | `var` allows it; `let` & `const` don’t.                                                                                       |
| **Re-assignment**  | `var` and `let` allow; `const` doesn’t.                                                                                       |
| **Default value**  | If not assigned, `var` and `let` → `undefined`; `const` must be initialized.                                                  |



#### Q: What is the Temporal Dead Zone (TDZ)?
The period between hoisting and initialization where a let or const variable exists but cannot be accessed.
Accessing it before initialization throws a **ReferenceError**

#### Q: What’s the output?
```
console.log(x);
var x = 5;
```
✅ Output: undefined
➡ Because var is hoisted and initialized with undefined








#### What is Promises ? 
A Promise is an object in JavaScript that represents the result of an asynchronous operation.
The result can be:
pending
fulfilled (resolved)
rejected

#### What is Async/await ?
async/await is a syntactic sugar (cleaner way) built on top of Promises to write asynchronous code in a way that looks synchronous.
async -> makes a function return a Promise.
await -> breaks the function into microtasks

#### what is diff between async/await and promises ?
JavaScript async model is based on Promises & the Event Loop.
Callbacks were used earlier but caused callback hell.
Promises introduced clean chaining & better error handling.
async/await is built on top of promises and makes async code look synchronous,
but still works using the microtask queue.



#### what are type of Promise combinators ?
✅ **1. Promise.all()**

**Meaning:**
👉 *“Sab succeed hone chahiye”*

* Runs all promises **in parallel**
* If **all resolve →** gives array of results
* If **any one fails →** entire Promise rejects

**Use case:** Loading multiple APIs together (user + posts + comments)

**Example:**

```js
Promise.all([p1, p2, p3]);
```

---

✅ **2. Promise.any()**

**Meaning:**
👉 *“First success ka result do”*

* Returns **first fulfilled** Promise
* If **all fail →** throws `AggregateError`

**Use case:** Multiple fallback servers → first available one wins

**Example:**

```js
Promise.any([p1, p2, p3]);
```

---

✅ **3. Promise.race()**

**Meaning:**
👉 *“Jo pehle settle ho jaye (resolve ya reject) wahi result”*

* First **resolved OR rejected** promise wins

**Use case:** Timeout logic
(ex: whichever finishes first → API or timeout)

**Example:**

```js
Promise.race([p1, timeoutPromise]);
```

---

✅ **4. Promise.allSettled()**

**Meaning:**
👉 *“Sabka result do — success ho ya fail”*

* Never throws error
* Gives result of **every promise**
* Each item contains:

  * `{status: "fulfilled", value: ...}`
  * `{status: "rejected", reason: ...}`

**Use case:**
Batch operations where you want **full report**, not stop on error.

**Example:**

```js
Promise.allSettled([p1, p2, p3]);
```

---

---


# Error Handling (try/catch, throw)

#### Q: Difference between throw and return?
throw → stops function execution immediately + sends error to catch.
return → simply returns a value; does not cause an error.


#### IN SHORT:
JavaScript error handling is done using try/catch/finally.
throw creates custom errors.
try/catch only works for synchronous code;
for async errors use .catch() or try/catch inside async functions.
Always throw Error objects instead of strings for better debugging.


#### Q: Does try/catch work with async code?
```
try {
  setTimeout(() => {
    throw new Error("Boom");
  }, 1000);
} catch (e) {
  console.log("Caught");
}
```
✔ Output:
```
Uncaught Error: Boom
```

🚫 try/catch DOES NOT catch async errors inside setTimeout.
Why?
Because the callback runs later in a different call stack.


#### Q: Error bubbling in JS?
If one catch doesn't handle the error → it moves up.

---

---


# Object manipulation (copy, merge, destructure)

#### How Deep Copy created ?
const deep = structuredClone(obj1);

#### Destructuring Objects
1. Basic:
```
const user = { name: "Rahul", age: 21 };
const { name, age } = user;
```

2. Rename Variables
```
const { name: username } = user;
```
3. Default Values
```
const { city = "Delhi" } = user;
```


---

---

# Array methods (map, filter, reduce, forEach, etc.)

1. find()
Returns the first match.
```
const res = [1,5,10].find(x => x > 5);
console.log(res); // 10
```

2. some()
At least one element matches.
```
[1,3,5].some(x => x % 2 === 0); // false
```

3. sort()
⚠️ Mutates original array

A. Lexical sort (default):
```
["b", "a"].sort(); // ["a","b"]
```

B. Numeric sort:
```
[10,1,2].sort((a,b) => a - b); // [1,2,10]
```

#### Q1: map vs forEach difference?

map:
✔ returns new array
forEach:
✔ not returns new array, it return **Undefined**


---

---


# JSON vs Object

- JSON is a data format used for transferring data, always in string form.
- JSON has strict rules (no functions, undefined, comments, single quotes).
- Conversion is done via JSON.stringify() and JSON.parse().
 
Convert JSON ↔ Object

1. JSON → Object
```
const obj = JSON.parse('{"name":"Rahul"}');
```
2. Object → JSON
```
const json = JSON.stringify({ name: "Rahul" });
```

---

---


# DOM 

### Difference between innerHTML vs textContent vs innerText?
| Property        | What it does                           |
| --------------- | -------------------------------------- |
| **innerHTML**   | HTML + Text set/read (can inject HTML) |
| **textContent** | Only text, hidden elements included    |
| **innerText**   | Only visible text (respects CSS)       |

- innerHTML is slower + vulnerable to XSS.

### What is the difference between NodeList and HTMLCollection?
- HTMLCollection is live and contains only elements.
- NodeList can contain any node and may be static or live (mostly static).


---

## Event Bubbling & Event Capturing & Event Delegation
**Event Bubbling:**
- Flow = inner → outer (child → parent)
- Event propagate hota hai from child to parent.
- **false** (default) = bubbling mode

**Event Capturing:**
- Flow = Parent → Child
- Event propagate hota hai from child to parent.
- **true** = capturing mode

**Event Delegation**
```
Example scenario:
A list me 1000 items hai.
Each item me click event lagana inefficient hai.
```

- Event Delegation: Technique where instead of adding event listeners to multiple child elements, we add one listener to the parent and use event bubbling + event.target to detect which child was clicked.

- Benefits: Better performance, cleaner code, works for dynamically added elements.


### Q: How to stop event bubbling?`
```
event.stopPropagation();
```

---


## Debouncing & Throttling
Both are performance optimization techniques used to control how often a function runs, especially for events that fire repeatedly (scroll, input, resize, mousemove).

Absolutely — here’s the most simple, memorable, and interview-friendly explanation of **Debouncing** & **Throttling**, with examples and when to use them.
Write it in your notes exactly like this 👇

---

# 🚀 Debouncing vs Throttling

👉 Debounce = “Wait until user stops”
👉 Throttle = “Run every X ms max”

Both are **performance optimization techniques** used to control how often a function runs, especially for events that fire repeatedly (scroll, input, resize, mousemove).


---


### ✅ **Debouncing**

👉 **Debounce waits for the user to stop doing the action** before running the function.

⏳ If the event keeps firing, the timer resets.

✔ Useful when action should run **ONCE after user stops typing/moving.**

### Example use cases:

* Search bar auto-suggest (wait after user stops typing)
* Form validation while typing
* Resize window 

### Example Code:

```js
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function searchHandler(e) {
  console.log("Searching for:", e.target.value);
}

const input = document.querySelector("input");
input.addEventListener("input", debounce(searchHandler, 400));
```


---

### ✅ **Throttling**

👉 **Throttle allows the function to run at a fixed time interval, no matter how many times event fires.**

⏳ It ignores extra calls until the time has passed.

✔ Useful when action should run **regularly while user is doing something**, not after.

### Example use cases:

* Scroll event (infinite scroll)
* Window resize listener

### Example Code:

```js
function throttle(fn, delay) {
  let last = 0;
  return function (...args) {
    let now = Date.now();
    if (now - last >= delay) {
      fn.apply(this, args);
      last = now;
    }
  };
}

function logScroll() {
  console.log("Scrolling...");
}

window.addEventListener("scroll", throttle(logScroll, 500));
```

---

---


# ES6+ (Modern JavaScript Features)

### Q: Are ES modules synchronous or async?
✔ ESM are asynchronous (browsers me).

### Q: CommonJS (require) vs ES Modules (import)?
| CommonJS        | ES Modules                   |
| --------------- | ---------------------------- |
| require()       | import/export                |
| Synchronous     | Asynchronous                 |
| Used in Node.js | Used in browser & Node(v13+) |
| Dynamic         | Static (compile-time)        |


### Optional Chaining ?
```
console.log(user?.details?.address?.city);
```

---

## Nullish Coalescing (??)
**Return right side only when left is null or undefined.**
```
let value = null ?? "Default";
console.log(value); // "Default"
```

---

## Iterators & Generators

### Iterators 
Iterator = A mechanism that allows you to access values one at a time instead of all at once

- Iterator = Object with .next() method
- .next() returns: { value: <data> , done: <boolean> }
- Used to read data step-by-step

Example:
```
const numbers = [10, 20, 30, 40];

function createIterator(arr) {
  let index = 0;

  return {
    next() {
      if (index < arr.length) {
        return { value: arr[index++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    }
  };
}

const it = createIterator(numbers);

console.log(it.next());  // { value: 10, done: false }
console.log(it.next());  // { value: 20, done: false }
console.log(it.next());  // { value: 30, done: false }
console.log(it.next());  // { value: 40, done: false }
console.log(it.next());  // { value: undefined, done: true }
```

### Generators 
Generator = A special function that can pause and resume execution.

- Created with ```function*```
- **yield** pauses execution , and make iterators
- Returns iterator automatically
- Useful for lazy loading, infinite sequences, controlled execution

Example:
```
function* myGen() {
  yield 10;
  yield 20;
  yield 30;
}

const it = myGen();

console.log(it.next()); // { value: 10, done: false }
console.log(it.next()); // { value: 20, done: false }
console.log(it.next()); // { value: 30, done: false }
console.log(it.next()); // { value: undefined, done: true }
```


---

## Symbols + Sets, Maps, WeakSet, WeakMap

### Symbol
- unique & immutable value used as object keys.
- To create **hidden object properties**
- Not iterable, not auto-visible key
👉 Symbol key does NOT appear in for…in or Object.keys.
```
const user = {
  name: "Amit",
  [Symbol("id")]: 101
};
```

### Set
- Store unique values
- No index access
- Methods: add(), delete(), has(), size


```
const s = new Set([1, 2, 2, 3]);
console.log(s); // {1, 2, 3}
```
Methods on Sets:
```
s.add(4);
s.has(2); // true
s.delete(1);
s.size; // 3
```
### Map
- Map stores key-value pairs like objects,
- BUT keys can be anything (object, function, number, symbol).
- Methods: set(), get(), has(), delete(), 

### WeakSet
- Stores only objects
- No duplicate
- No iteration
- Auto garbage-collected


### WeakMap
- Key must be object
- Auto garbage collection
- Not iterable
- Used to store private data for objects

### ⭐ FINAL MEMORY SHORTCUT TABLE
| Feature     | Allows Objects as Key?   | Unique Values? | Iterable? | Auto Garbage Collection? |
| ----------- | ------------------------ | -------------- | --------- | ------------------------ |
| **Symbol**  | ❌                        | Unique         | ❌         | ❌                        |
| **Set**     | ❌ (only values stored)   | ✔              | ✔         | ❌                        |
| **Map**     | ✔                        | ❌              | ✔         | ❌                        |
| **WeakSet** | ✔ (only objects)         | ✔              | ❌         | ✔                        |
| **WeakMap** | ✔ (only objects as keys) | ❌              | ❌         | ✔                        |



---


---

# 🟤 6. Advanced JS Concepts

## Deep Dive in **this**
- this depends on HOW a function is called, not where it's written.

**Rule 1: Global this**
- In Browser → window
- In Node.js → {} (module object)

**Rule 2: this inside a simple function**
- strict mode → undefined
- non-strict mode → window (browser)

```
function show() {
  console.log(this);
}
show();
```

**RULE 3: Inside an object method**
- this → object calling the method.
```
const obj = {
  name: "Amit",
  show() {
    console.log(this.name);
  }
};

obj.show(); // "Amit"
```

**Rule 4: this in Arrow Functions**
- ⚠ ARROW FUNCTIONS DO NOT HAVE THEIR OWN this.
- They take this from their surrounding scope (lexical this).

**RULE 5: constructor function this**
- new creates a new object
- this = new object


**RULE 6: this in Classes**
- Simply behaves like constructor functions:


**RULE 7: call(), apply(), bind()**
- Used to control this manually.

- call(obj, arg1, arg2, ...) -> calls function immediately with args one-by-one
- apply(obj, [arg1, arg2, ...]) -> calls function immediately with args in array
- bind(obj, a, b) -> does NOT run instantly, returns new function with fixed this

```
function hi(a, b) { console.log(this.name, a, b); }

hi.call({ name: "Amit" }, 10, 20);
hi.apply({ name: "Amit" }, [10, 20]);
hi.bind({ name: "Amit" }, 10, 20);
```

---

## CURRYING
Currying means converting a function with multiple arguments into a series of nested functions, where each function accepts only one argument.

In simple words:
```
Normal function: f(a, b, c)
Curried function: f(a)(b)(c)
```

Benefits:
- ✔ Reusability
- ✔ Clean & readable code
- ✔ Used in functional programming (React, Redux)

ES6 Arrow function Example:
```
const add = a => b => a + b;
add(2)(5) -> 7
```

---


## MEMOIZATION

- Memoization is a technique to speed up function execution by storing results of expensive function calls and returning cached results when the same inputs occur again.

Uses:
✔ Avoid repeated calculations
✔ Improve performance
✔ Common in React, recursion, search systems, caching APIs.

General Memoization Utility Function:
```
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      console.log("Returning from cache:", key);
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}
```



---

## Garbage Collection:

- Automatic memory management in JavaScript.
- Removes unused / unreachable objects.

🔍 Mark & Sweep Steps Alogrithm Steps:
```
1. Roots identify karo
(Global variables, window, document, active functions, closures etc.)

2. Mark Phase
Jo values still reachable hain (linked by references) → unko mark kar diya jata hai.

3. Sweep Phase
Jo marked nahi hain (unreachable / no references) → unko remove (free memory) kar diya jata hai.
```

IN SHORT Algorithm:
- ✔ Mark and Sweep:
   1. Identify reachable objects (mark them)
   2. Unreachable objects removed (sweep)

Key term: Reachability
- If no reference exists → eligible for GC.

Avoid Memory Leaks:
- ✔ remove event listeners
- ✔ avoid unused global variables
- ✔ clear unused arrays or objects

#### Q: Can closures cause memory leaks?

👉 YES, if unnecessary data captured.

#### Q: Can we force GC in JavaScript?

👉 Browser: No
👉 Node: Yes (flag) but discouraged.

#### Q: Why does JS need Automatic GC?

👉 Because JS browser-first language hai, memory management developer-friendly nahi hota.
