

====== In short Custom Package =====
CJS (CommonJS):
"type" ❌ not needed (default CommonJS)
"main" → entry (index.js)
"name" → package name
use module.exports / require()



ESM (ES6 Module):
"type": "module" ✅ required
"main" → entry (index.js)
"name" → package name
use export / import


Hybrid (CJS + ESM):
"name" → package name
"main" → CJS entry (index.cjs)
"module" → ESM entry (index.mjs)
"exports" → define import/require paths




===== Imports Alias ========
Define custom path shortcuts in package.json →
package.json:-> "imports": { "#myMath": "./myMath.js" }

before : import {} from "./myMath.js"
Now:  import {} from "#myMath"


















### 📦 **Custom Package Summary**

#### 🧩 **CommonJS (CJS)**

* `"type"` ❌ not needed (default = CommonJS)
* `"main"` → entry file (`index.js`)
* `"name"` → package name
* use `module.exports` / `require()`

🧠 Example:

```json
{
  "name": "my-cjs",
  "main": "index.js"
}
```

---

#### ⚙️ **ES Module (ESM)**

* `"type": "module"` ✅ required
* `"main"` → entry file (`index.js`)
* `"name"` → package name
* use `export` / `import`

🧠 Example:

```json
{
  "name": "my-esm",
  "type": "module",
  "main": "index.js"
}
```

---

#### 🔀 **Hybrid (CJS + ESM both)**

* `"name"` → package name
* `"main"` → CommonJS entry (`index.cjs`)
* `"module"` → ES Module entry (`index.mjs`)
* `"exports"` → define import/require paths

🧠 Example:

```json
{
  "name": "my-hybrid",
  "main": "index.cjs",
  "module": "index.mjs",
  "exports": {
    "require": "./index.cjs",
    "import": "./index.mjs"
  }
}
```