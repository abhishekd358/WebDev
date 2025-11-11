

====== In short =====
CJS (CommonJS):
Default in Node.
Use module.exports & require().
package.json: only "main" & "name" needed.

ESM (ES6 Module):
Use export & import.
Need "type": "module" in package.json.

Hybrid (CJS + ESM):
Support both require & import.
Add "main" (CJS), "module" (ESM), and "exports": { "require": ..., "import": ... }

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