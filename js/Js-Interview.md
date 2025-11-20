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



#### Q2: What is the Temporal Dead Zone (TDZ)?
The period between hoisting and initialization where a let or const variable exists but cannot be accessed.
Accessing it before initialization throws a **ReferenceError**

#### Q3: What’s the output?
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









# Error Handling (try/catch, throw)

#### throw — Custom Error
Aap apna khud ka error "throw" kar sakte ho.
```
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
```
- 🚫 try/catch DOES NOT catch async errors inside setTimeout.
- 🚫 YOU CANNOT catch a Promise error using outer try/catch.

#### Q4: Difference between throw and return?
throw → stops function execution immediately + sends error to catch.
return → simply returns a value; does not cause an error.


#### IN SHORT:
JavaScript error handling is done using try/catch/finally.
throw creates custom errors.
try/catch only works for synchronous code;
for async errors use .catch() or try/catch inside async functions.
Always throw Error objects instead of strings for better debugging.


# Object manipulation (copy, merge, destructure)

#### How Deep Copy created ?
const deep = structuredClone(obj1);
