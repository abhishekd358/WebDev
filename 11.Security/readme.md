</br>

<center>

# **📝 CORE SECURITY**

</center>

## 1) Intro to Security in Node.js

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>
✔ What is Web Security?
- Protect web apps from unauthorized access & attacks
- Prevent data theft, misuse, account hijacking

</br>

✔ Client vs Server Trust Rule (MOST IMPORTANT)
- Client (Browser) = NEVER TRUST
- Server (Node.js) = FINAL AUTHORITY
- Frontend validation is NOT security

✔ Common Web Attacks (Overview)
- SQL Injection → DB read/delete/update
- XSS(cross-site scripting) → JS inject, cookie/token steal
- CSRF → logged-in user se fake request
- Clickjacking → invisible buttons
- DoS/DDoS → server overload
- IDOR → access unathorize access by changing URLs

✔ Authentication vs Authorization
- Authentication → who are you?
- Authorization → what can you do?
- Login ≠ permission

✔ Defense in Depth (Security Layers)
- Multiple security layers
- One fails → others protect

**Layers:**
1) Input validation
2) Sanitization
3) Authentication
4) Authorization
5) Secure cookies
6) HTTPS
7) Rate limiting
8) Security headers


✔ Golden Rules 🔐
- Never trust user input
- Always validate on server
- Sanitize output
- Use HTTPS
- Protect cookies & secrets
- Apply rate limits


✔ Interview Line ⭐
"Web security focuses on reducing attack surface and applying defense-in-depth across application layers."

</details>



## 2) Using `.env` File in Node.js (Native Way)

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>

✔ Native `.env` Support (Node.js v20+ )
- No dotenv package needed
- Built-in support using `-env-file flag`



#### 1️⃣ Create `.env` file

```
PORT=5000
DB_URL=mongodb://127.0.0.1:27017/app
JWT_SECRET=superSecretKey
NODE_ENV=development
```

#### 2️⃣ Run Node with env file

```bash
node --env-file=.env index.js
```

#### 3️⃣ Access in code

```js
const port = process.env.PORT;
```


✔ Old vs New Way 
- `dotenv package` → optional / legacy
- `node --env-file` → modern / native

✔ Multiple Environments (Pro Level)

```
.env.development
.env.production
.env.test
```

</details>

<!-- <a href="https://www.animatedimages.org/cat-lines-562.htm"><img src="https://www.animatedimages.org/data/media/562/animated-line-image-0507.gif" border="0" alt="animated-line-image-0507" /></a> -->
</br>
</br>

<img src="https://www.animatedimages.org/data/media/562/animated-line-image-0415.gif" border='0' height="15px" width="100%" />

</br>

<center>

# **📝 Input Validation & Injection Attacks**

</center>

## 3) SQL Injection & NoSQL Injection 

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>

✔ What is SQL Injection?
- Attack where attacker manipulates DB queries via user input

✔ Simple Definition
SQL / NoSQL Injection → using malicious input to alter database queries

✔ Root Cause (VERY IMPORTANT)
- Trusting user input ❌
- No validation ❌
- Raw / dynamic queries ❌
- Direct use of req.body ❌

✔ NoSQL Injection 

Attacker sends:
```
{
  email: { $ne: null },
  password: { $ne: null }
}
```

Result:
- First user returned
- Login hacked


✔ Common Injection Points
- Login forms
- Search APIs
- Query params
- JSON body
- Filters
- Headers

✔ Injection Types
- SQL Injection (MySQL, PostgreSQL)
- NoSQL Injection (MongoDB)
- Command Injection (exec, shell)
- LDAP Injection

✔ Hacker Techniques
- Special characters: `'`, `"`,`{ }`, `$`
- Mongo operators: `$ne`, `$gt`, `$or`
- Tools: DevTools, Postman, Burp Suite
- Automated bots scan 24×7


✔ Golden Rule 
"User input is DATA, never CODE"

✔ Interview Line ⭐
"SQL and NoSQL injections occur when untrusted user input is directly used in database queries without proper validation."

✔ Prevention (Preview)
- Schema validation (Zod)
- Whitelisting fields
- Avoid spreading req.body
- Type checking
- Sanitization
- Parameterized queries

</details>



## 4) Schema-Based Data Validation with Zod

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br> 

✔ What is Validation?
- Checking whether user input is ALLOWED or NOT
- Ensures correct type, format, length, rules
- Invalid input → request rejected before DB


✔ What is Zod?
- Popular validation library for JS/TS
- Runtime validation (actual data check)


✔ Basic Zod Schema Example
```js
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});
```
✔ How Validation Works

`const result = loginSchema.safeParse(req.body);`

✔ Why `safeParse()` is IMPORTANT
- Prevents server crash
- it returns `success`, `data` , `error` 

- `success` → boolean
    - Indicates validation result.
    - true = valid data, false = validation failed.

- `data` → parsed & type-safe data
    - Available only when `success` === `true`.

- `error` → ZodError
  - Contains validation errors.


✔ Common Zod Validators
- `z.string()`
- `z.number()`
- `z.boolean()`
- `z.array()`
- `z.object()`
- `z.enum(["admin", "user"])`

With rules:
- `.min()`
- `.max()`
- `.email()`
- `.optional()`

✔ Validation vs Sanitization
Validation → allowed or not (GATEKEEPER)
Sanitization → clean data (CLEANER)
  
</details>


---
---


<details>
  <summary>👉🏼 SIMPLE IMPLEMENTATION:</summary>

### SIMPLE EXAMPLE :

#### Folder structure

```
project/
│
├─ validators/
│   └─ auth.validator.js
│
├─ auth.controller.js
│
├─ server.js
```

#### `validators/auth.validator.js`

```js
import { z } from "zod";

// Login schema
export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

// Register schema
export const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
});
```

#### `auth.controller.js`

```js
import express from "express";
import { loginSchema, registerSchema } from "./validators/auth.validator.js";

const router = express.Router();

/* ================= LOGIN ================= */
router.post("/login", async (req, res) => {
  try {
    const result = loginSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        errors: result.error.errors,
      });
    }

    const { email, password } = result.data;

    // business logic here (DB, auth, etc.)
    return res.json({
      message: "Login successful",
      data: { email },
    });

  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
});

/* ================= REGISTER ================= */
router.post("/register", async (req, res) => {
  try {
    const result = registerSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        errors: result.error.errors,
      });
    }

    const { name, email, password } = result.data;

    // business logic here (DB save, hashing, etc.)
    return res.json({
      message: "Registration successful",
      data: { name, email },
    });

  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
});

export default router;
```

</details>

</br>
</br>

<img src="https://www.animatedimages.org/data/media/562/animated-line-image-0415.gif" border='0' height="15px" width="100%" />

</br>

<center>

# **📝 Browser Security & XSS**

</center>

## 1) Same-Origin Policy (SOP) 

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>

✔ What is Same-Origin Policy (SOP)?
- Browser security rule
- One website cannot access data of another website directly
- Enforced by browser, NOT by server

✔ Simple Definition
- Same-Origin Policy → browser restricts cross-site data access

✔ What is an Origin?
- Origin = protocol + domain + port

- Example:
  - https://example.com:3000

✔ Same Origin Conditions
- Protocol same
- Domain same
- Port same
(All three must match)

✔ Examples
- https://a.com  ↔ https://a.com        → Same Origin ✅
- http://a.com  ↔ https://a.com        → Different ❌
- https://a.com ↔ https://b.com        → Different ❌
- https://a.com:3000 ↔ :4000           → Different ❌

✔ Why SOP Exists?
- Protect user data
- Prevent malicious websites from stealing cookies/data
- Stops cross-site attacks


✔ What SOP Blocks
- Reading response data
- Accessing cookies
- DOM access across origins

**✔ What SOP Allows**
- Sending requests (forms, images, scripts)
- But reading response is blocked

**✔ SOP vs CORS (Quick)**
- SOP → default browser restriction
- CORS → controlled relaxation by server
- SOP is always ON


✔ Important Limitation
- SOP does NOT prevent CSRF
- Requests can still be sent
- Only response reading is blocked

</details>




## 2) XSS (Cross-Site Scripting) 

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>

✔ What is XSS?
- XSS = Cross-Site Scripting
- Attacker injects malicious JavaScript
- Script runs in victim’s browser

✔ Basic Example
```
HTML:
<p>Comment: USER_INPUT</p>

User input:
<script>alert("Hacked")</script>

Final output:
<p>Comment: <script>alert("Hacked")</script></p>
```

✔ What Can Be Stolen?
- Cookies (if not httpOnly)
- JWT tokens
- Session data
- User actions (CSRF + XSS combo)
- Fake UI / phishing redirects

✔ Common XSS Locations
- Comment boxes
- Search input
- Profile bio
- Reviews
- Admin panels


✔ Attacker Mindset
1. Find input field
2. Inject `<script>`
3. Check response
4. Improve payload
5. Exploit users

✔ Escaping vs Sanitization
- Escaping → encode special characters
- Sanitization → remove dangerous code
- XSS protection requires SANITIZATION

✔ Interview Line 
"XSS is a vulnerability where malicious JavaScript is executed in a user’s browser under a trusted website context."

</details>

---
---

<details>
  <summary>👉🏼 TYPE OF XSS:</summary>

#### **1. Stored XSS**

* Payload stored in DB and runs for all users
  **Example:**

```html
<script>alert('Stored XSS')</script>
```

---

#### **2. Reflected XSS**

* Payload reflected via URL or form
**Example:**

```text
https://site.com/search?q=<script>alert('Reflected XSS')</script>
```

---

#### **3. DOM-Based XSS**

* Client-side JS vulnerability
  **Example:**

```html
<div id="out"></div>
<script>
document.getElementById("out").innerHTML = location.hash;
</script>
```

URL:

```text
#<script>alert('DOM XSS')</script>
```

---

#### **4. Blind XSS**

* Executes later in admin panel/logs
  **Example:**

```html
<script src="https://attacker.com/xss.js"></script>
```

---

#### **5. Self XSS**

* User tricks themselves
  **Example:**

```javascript
javascript:alert(document.cookie)
```

---

#### **6. Mutation XSS (mXSS)**

* Browser changes sanitized HTML
  **Example:**

```html
<svg><p><style><img src=x onerror=alert(1)>
```

---

#### **7. Universal XSS (UXSS)**

* Browser vulnerability
  **Example:**

```javascript
// Exploit depends on browser bug (no fixed payload)
```

</details>





## 3) Fix XSS using DOMPurify

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>

✔ What is the XSS Problem?
- XSS happens when user input is rendered as HTML without cleaning
- Attacker injects `<script>`, `onerror`, javascript:
- Browser executes it as trusted site code

Example (Dangerous):
```
div.innerHTML = userInput;   ❌
```

✔ What is DOMPurify?
- is library
- DOMPurify is an HTML sanitizer
- Removes malicious JavaScript & attributes
- Keeps safe HTML intact
- Uses ALLOWLIST approach (most secure)


✔ Sanitization vs Escaping
- Escaping → encodes characters (< > &)
- Sanitization → removes dangerous code
- XSS protection requires SANITIZATION


✔ Allowlist Concept (IMPORTANT)
- Only allowed tags & attributes survive
- Everything else is removed
- Blocklist is never safe
- Allowlist = industry standard

- **BEST PRACTICE → Sanitize BOTH**

</details>

---
---

<details>
  <summary>👉🏼 Frontend Implementation:</summary>

</br>


### ✔ Frontend Usage (React / Browser)


- Use when rendering user HTML
- Especially with `dangerouslySetInnerHTML`

-  1️⃣ Example:

```js
import DOMPurify from "dompurify";

<div dangerouslySetInnerHTML={{
  __html: DOMPurify.sanitize(userHTML)
}} />
```

- 2️⃣ Simple Example :

```js
const handleChange = (e) => {
  const dirty = e.target.value;
  const clean = DOMPurify.sanitize(dirty);
  setContent(clean);
};

<textarea onChange={handleChange} />
```

✔ IN FRONTEND IT WORKS ?
- Browser already has DOM
- DOMPurify directly uses window

</details>


---
---

<details>
  <summary>👉🏼 Backend Implementation:</summary>

</br>


### ✔ Backend Usage (Node.js)


Problem:
- Node.js has NO DOM so that we import `import { JSDOM } from "jsdom";`

- DOMPurify needs DOM
- Backend not have window so we create `const window = new JSDOM("").window;` 


```js
import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";

const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

const cleanHTML = DOMPurify.sanitize(dirtyHTML);
```

</details>

---
---


<details>
  <summary>👉🏼 Best Approach of Implementation(in less setup):</summary>

</br>



### ✅ Best Industry Shortcut (Recommended)

```js
import DOMPurify from "isomorphic-dompurify";

const cleanHTML = DOMPurify.sanitize(req.body.comment);
```

✔ Works in browser + Node
✔ Less setup
✔ Fewer mistakes


- We use isomorphic-dompurify because it works in both browser and Node.js environments and automatically handles DOM availability, reducing configuration errors and improving security consistency.

</details>



</br>
</br>

<img src="https://www.animatedimages.org/data/media/562/animated-line-image-0415.gif" border='0' height="15px" width="100%" />

</br>

<center>

# **📝 Content Security Policy (CSP)**

</center>


## 1) Content Security Policy (CSP)

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>

✔ What is CSP?
- Content Security Policy is a browser security rule-set
- Server sends CSP rules via HTTP headers
- Browser enforces those rules
- Controls what scripts/resources can run

✔ Simple Definition
CSP → browser ko batata hai kaunsa code/resource allowed hai

✔ Why CSP Exists?
- Prevent XSS (Cross-Site Scripting)
- Block injected / malicious scripts
- Restrict untrusted external resources


✔ Syntax
- `Content-Security-Policy: <directives>;`


✔ Important CSP Directives

- `default-src`
  - Fallback rule for all resources

- `script-src`
  - Controls JavaScript sources
  - Example: `script-src 'self' https://trusted.cdn.com;`

-`style-src`
  - Controls CSS sources
  - 'unsafe-inline' ❌ (avoid)

- `img-src`
  - Controls image sources
  - Example: `img-src 'self' data:;`

✔ Inline Scripts Warning 
- Inline JS is blocked by default
- Developers feel CSP "breaks site"
- Reality: CSP breaks insecure code

✔ CSP vs DOMPurify

- **DOMPurify**
  - Sanitizes input
  - Removes dangerous HTML/JS
  - First line of defense

- **CSP**
  - Controls script execution
  - Browser-level protection
  - Last line of defense

✔ Example of CSP in Express

```js
res.setHeader(
  "Content-Security-Policy",
  "default-src 'self'; script-src 'self'"
);
```

✔ Important Limitations
- CSP can be misconfigured
- `'unsafe-inline'` weakens security
- Not supported fully in old browsers

✔ Security Principle
CSP ≠ single solution
CSP = defense-in-depth layer

✔ Interview Line 
"Content Security Policy restricts what resources the browser is allowed to execute."

</details>

---
---

<details>
  <summary>👉🏼 All list of Directive:</summary>

</br>


#### Directive Reference Table

| **Directive**              | **Purpose (Simple)**         | **Recommended Value**            | **Why Important**                      | **Use / Avoid** |
| -------------------------- | ---------------------------- | -------------------------------- | -------------------------------------- | --------------- |
| `default-src`              | Sab resources ka base rule   | `'self'`                         | Safe default, unknown sources block    | ✅ MUST USE      |
| `script-src` ⭐             | JavaScript execution control | `'self'`                         | XSS ka main attack surface band        | ✅ MUST USE      |
| `style-src`                | CSS loading control          | `'self'`                         | Malicious CSS / inline styles block    | ✅ USE           |
| `img-src`                  | Image sources                | `'self' data:`                   | Base64 images allow, image-XSS prevent | ✅ USE           |
| `connect-src`              | API / fetch / WebSocket      | `'self' https://api.example.com` | Data exfiltration & rogue APIs block   | ✅ MUST USE      |
| `font-src`                 | Font sources                 | `'self'`                         | Tracking & font injection prevent      | ✅ USE           |
| `object-src`               | Plugins (Flash, etc.)        | `'none'`                         | Legacy plugin attacks stop             | ✅ MUST USE      |
| `frame-ancestors`          | iFrame embedding             | `'none'`                         | Clickjacking prevent                   | ✅ MUST USE      |
| `base-uri`                 | `<base href>` control        | `'self'`                         | URL rewriting attacks block            | ✅ USE           |
| `form-action`              | Form submit destination      | `'self'`                         | Credential stealing forms block        | ✅ USE           |
| `media-src`                | Audio / video sources        | `'self'`                         | Media injection control                | ⚠️ Optional     |
| `worker-src`               | Web workers                  | `'self'`                         | Malicious background scripts prevent   | ⚠️ Optional     |
| `manifest-src`             | PWA manifest                 | `'self'`                         | PWA integrity maintain                 | ⚠️ Optional     |
| `prefetch-src`             | Prefetched resources         | `'self'`                         | Unwanted prefetch block                | ⚠️ Optional     |
| `frame-src`                | Allowed iframes              | `'self'`                         | iFrame content restriction             | ⚠️ Conditional  |
| `child-src`                | Nested browsing contexts     | `'self'`                         | Legacy iframe control                  | ⚠️ Rare         |
| `report-uri` / `report-to` | CSP violation reports        | `/csp-report`                    | Attack detection & debugging           | ⚠️ Optional     |

---

#### 🚨 Dangerous / Disallowed CSP Keywords (EXAM TRAP)

| **Keyword / Pattern**   | **Why Dangerous**                             | **Status**  |
| ----------------------- | --------------------------------------------- | ----------- |
| `'unsafe-inline'`       | Inline scripts & event handlers allowed → XSS | ❌ NEVER USE |
| `'unsafe-eval'`         | `eval()` based JS execution                   | ❌ NEVER USE |
| `*` (wildcard)          | Any domain allowed                            | ❌ NEVER USE |
| `data:` in `script-src` | Base64 JS execution possible                  | ❌ NEVER USE |
| `http:`                 | Allows non-HTTPS scripts                      | ❌ AVOID     |



#### Safe Advanced Options (When Needed)

| **Option**       | **Use Case**           | **Example**         | **Status**    |
| ---------------- | ---------------------- | ------------------- | ------------- |
| `nonce-*`        | Safe inline scripts    | `'nonce-random123'` | ✅ RECOMMENDED |
| `sha256-*`       | Static inline JS       | `'sha256-AbCd...'`  | ⚠️ Advanced   |
| `strict-dynamic` | Dynamic script loading | `'strict-dynamic'`  | ⚠️ Expert     |



#### ✅ Minimal Production-Ready CSP

```bash
Content-Security-Policy:
default-src 'self';
script-src 'self';
style-src 'self';
img-src 'self' data:;
connect-src 'self';
font-src 'self';
object-src 'none';
frame-ancestors 'none';
base-uri 'self';
form-action 'self';
```


</details>


## 2) Reporting CSP Violations (CSP Report-Only) 

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>

✔ What is CSP Violation Reporting?
- Browser reports when a CSP rule is violated
- no blocking happen 
- CSP rules are NOT enforced
- Violations are only reported
- Application keeps working


✔ Route of report Creation 
- `report-uri /csp-report;` set this directive in header so we receive report
- `/csp-report` -> you can set any name of ROUTE ex. report-uri /csp-report-violation

Example Header:
```bash
Content-Security-Policy-Report-Only:
  default-src 'self';
  script-src 'self';
  report-uri /csp-report;
```



✔ Express Example (Capture Reports)

```js
app.post("/csp-report", express.json(), (req, res) => {
  console.log("CSP Violation:", req.body);
  res.status(204).end();
});
```

✔ Common Mistakes ❌
- Enabling strict CSP directly in production
- Ignoring violation reports
- Leaving report endpoint unsecured


✔ Interview Line ⭐
"CSP Report-Only mode allows monitoring policy violations without enforcing them."


</details>

## 3) Using Inline Scripts with Hash (CSP)

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>
✔ What is the Inline Script Problem?
- Inline JavaScript (<script>...</script>) is blocked by CSP
- Reason: Inline scripts are common XSS attack vectors
- When to use : for static Inline script 

✔ Hash Concept (Simple)
“Sirf wahi inline script chalegi jiska hash allowed hai, ek bhi script ke content mai change then browser block the script”

**✔ What is a CSP Hash?**
- Hash = cryptographic fingerprint of script content
- CSP allows inline script ONLY if hash matches exactly


✔ Inline Script Example (Blocked)

```js
<script>
  console.log("Hello");
</script>
```

**✔ How Hash is Generated**
1. Take inline script content `console.log("Hello");`
2. Generate SHA-256 hash   `crypto.createHash('sha256').update('console.log("Hello");').digest('base64')
3. Base64 encode it
4. Pass hash value in csp `script-src` derivative

✔ CSP Header with Hash
```bash
Content-Security-Policy:
  script-src 'self' 'sha256-abc123...';
```

✔ Hash vs Nonce (Concept Preview)
- Hash → static, precomputed
- Nonce → dynamic, per request (more flexible)



</details>


## 4) `integrity` Attribute for External Scripts

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>

✔ What is `integrity` attribute?
- HTML security feature for external scripts
- Ensures script content is NOT modified
- Uses SHA-256 + Base64 hash
- ✔ Match → script execute
- ❌ Mismatch → script BLOCK


✔ Example (External Script Security)

```html
<script
  src="https://cdn.example.com/app.js"
  integrity="sha256-AbCdEf123456Base64Hash=="
  crossorigin="anonymous">
</script>
```

✔ Why `integrity` is IMPORTANT
- CDN compromise protection
- Man-in-the-middle attack prevention
- Script tampering detect karta hai


✔ CSP Hash vs `integrity`

| Feature    | CSP Hash        | `integrity` Attribute |
| ---------- | --------------- | --------------------- |
| Used for   | Inline scripts  | External scripts      |
| Defined in | CSP Header      | HTML `<script>` tag   |
| Purpose    | Allow execution | Verify content        |
| Hash       | SHA-256 Base64  | SHA-256 Base64        |


✔ When to Use `integrity`

- ✅ Third-party CDN scripts
- ✅ Analytics & libraries
- ✅ Production hardening
- ❌ Dynamic scripts




</details>

## 5) Dynamic Inline Script CSP `Nonce`

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>
</br>

✔ What is a Nonce?
- Nonce = random, single-use token
- Generated fresh on every HTTP request
- Used for Dynamic inline scripts in CSP
- Random Byte genereate using `crypto.randomBytes(16).toString()`

✔ CSP with Nonce (Header)
```bash
Content-Security-Policy:
  script-src 'self' 'nonce-abc123';
```

✔ HTML Script with Nonce
```js
<script nonce="abc123">
  console.log("Secure inline script");
</script>
```

✔ Express Example (Dynamic Nonce)
- Generate nonce per request
- Attach nonce to CSP header
- Pass nonce to template (EJS/Pug)

```js
app.get("/", (req, res) => {
  // 1️⃣ Generate nonce (per request)
  const nonce = crypto.randomBytes(16).toString("base64");

  // 2️⃣ Set CSP header with nonce
  res.setHeader(
    "Content-Security-Policy",
    `default-src 'self'; script-src 'self' 'nonce-${nonce}'`
  );

  // 3️⃣ Send HTML with nonce applied
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>CSP Nonce Demo</title>
      </head>
      <body>
        <h1>Nonce without middleware 🔐</h1>

        <script nonce="${nonce}">
          console.log("✅ Allowed inline script");
        </script>

        <script>
          console.log("❌ This inline script will be blocked");
        </script>
      </body>
    </html>
  `);
});
```

✔ Hash vs Nonce
- Hash → static inline scripts
- Nonce → dynamic inline scripts (BEST for SSR apps)


</details>


</br>
</br>

<img src="https://www.animatedimages.org/data/media/562/animated-line-image-0415.gif" border='0' height="15px" width="100%" />

</br>

<center>

# **📝 Clickjacking & Cookie Security**

</center>

## 1) Clickjacking

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>

✔ What is Clickjacking?
- UI-based web attack
- User ko visually confuse karke
  - usse unintended action click karwa liya jata hai

✔ Prevention Method 1: X-Frame-Options
- Site iframe me load hi nahi hogi
- `X-Frame-Options: DENY`
-Options:
  - DENY
  - SAMEORIGIN

✔ Prevention Method 2: CSP (BEST)
- Recommended over X-Frame-Options
- Modern & flexible
```bash
Content-Security-Policy:
  frame-ancestors 'self';
```

✔ Interview Line 
"Clickjacking is a UI-based attack where users are tricked into clicking hidden or disguised elements, often using iframes."

</details>



## 2)  Domain Attribute in Cookies (Security)

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>
✔ What is Domain Attribute?
- `domain` attribute decides which domain or subdomains receive a cookie
- Browser checks domain match on every request

✔ How to Set Cookie

```js
res.cookie("sessionId", "abc123", {
  httpOnly: true,
  secure: true,
});
```

* Browser auto-scopes cookie
* Restricted to same domain only

✔ Shared Cookie Across Subdomains(.)

```js
res.cookie("sessionId", "abc123", {
  domain: ".example.com",
  httpOnly: true,
  secure: true,
});
```
* Available to all subdomains
* dont use (.) instead mention explictly Subdomain name




## ✔ Domain vs Path (IMPORTANT)

| Attribute | Controls                           |
| --------- | ---------------------------------- |
| Domain    | Which domain/subdomain gets cookie |
| Path      | Which URL path gets cookie         |


</details>



## 3)  Top-Level Navigation (Browser + Cookies)

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>

✔ What is Top-Level Navigation?
- User directly navigates to a page
- Browser loads a new document
- When a webpage is loaded directly in the main browser window/tab (the address bar URL).
- Not inside an iframe, embedded element, or popup.

✔ Examples (Top-Level Navigation)
- Typing URL in address bar
- Clicking `<a href="...">`
- `window.location = "..."`

✔ NOT Top-Level Navigation
- `fetch()` / `XMLHttpRequest`
- `<img src="...">`
- `<iframe src="...">`
- Background API calls

✔ Trust Model
- User-initiated navigation → more trust
- Background requests → less trust
- Top-level GET navigation → cookie SENT ✅
- Background request → cookie NOT sent ❌


✔ Security Angle
- **background requests** are prone to CSRF Attack


✔ Top-Level Navigation vs Background Requests

```
Action            | Cookie Sent (Lax)
------------------|------------------
<a href>          | ✅
Address bar       | ✅
window.location   | ✅
fetch()           | ❌
<img>             | ❌
<iframe>          | ❌
```

✔ Interview Line ⭐
"Top-level navigation is a user-initiated page load that browsers treat differently from background requests when sending cookies."



</details>


## 4) Self-Signed HTTPS Server in Node.js 

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>

✔ Why HTTPS is Important
- Encrypts data using TLS
- Prevents Man-in-the-Middle attacks
- Protects passwords, cookies, tokens
- Mandatory for Secure & SameSite=None cookies


✔ What is a Self-Signed Certificate?
- Certificate generated by you
- Not signed by a trusted CA
- Browser shows “Not Secure” warning
- Used ONLY for local development/testing
- Never use in production


✔ Generate Self-Signed Certificate

- Command:
```bash
openssl req -nodes -new -x509 -keyout key.pem -out cert.pem
```

- Files created:
  - `key.pem`  → Private key
  - `cert.pem` → Certificate


✔ Create HTTPS Server in Node.js

```js
import https from "https";
import fs from "fs";
import express from "express";

const app = express();

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

https.createServer(options, app).listen(443);
```

✔ Interview Line ⭐
"HTTPS uses TLS encryption and is mandatory for secure cookies and modern browser security features."


</details>

## 5) Understanding SameSite Cookie Attribute in Depth

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>

✔ What is SameSite Cookie Attribute?
* Decides whether cookies are sent with cross-site requests
* Helps protect against CSRF attacks

✔ Simple Definition
SameSite → browser decides cookie cross-site request me jayegi ya nahi

✔ Important Clarification
SameSite ≠ Same-Origin
SameSite works on **site level**, not origin level

✔ What is “Same-Site”?
* Based on registrable domain (eTLD+1)
* Subdomains are considered same-site

```
Example:
app.example.com
api.example.com
→ Same-site ✅ (example.com)
```


✔ SameSite=Strict
* Cookie sent ONLY for same-site requests
* Cross-site navigation ❌

✔ SameSite=Lax (DEFAULT)
* Cookie sent for top-level navigation (GET)
* Cookie NOT sent for background requests (POST, fetch, img)
* Best balance between security and usability

✔ SameSite=None
* Cookie sent in all cross-site requests
* Not Secure

</details>


## 6) Cross-Site Request Forgery (CSRF)

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>

✔ What is Cross-Site Request Forgery (CSRF)?
* CSRF → attacker tricks the browser into sending authenticated requests without user consent
* CSRF is a design-level vulnerability,not a bug in code.

✔ Core Reason Behind CSRF
* Browsers automatically attach cookies to requests


✔ Classic CSRF Example (Bank Case)

```html
* User logged in to bank.com
* Authentication cookie exists

Attacker page contains:
<img src="https://bank.com/transfer?to=hacker&amount=10000">


Browser behavior:
* Sees request to bank.com
* Automatically attaches cookies

Result:
* Money transferred without user knowing
```


✔ Where CSRF is Possible

* State-changing operations: POST, PUT , DELETE
* Sensitive actions: Money transfer, Password change, Email update, Logout ...etc

✔ Important Misconception ⚠️

* CSRF does NOT happen only with POST
* CSRF can happen with GET
* If GET changes state → bad design


</details>


## 7) POST + SameSite Lax (2-Minute Problem) 🤯

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

**What?**

* `SameSite=Lax` **normally blocks cross-site POST**
* **Exception:** Login ke baad **~2 minutes** tak browser **POST me bhi cookie bhej deta hai**

**Why?**

* UX / OAuth / redirect flows ko break hone se bachane ke liye

**Is it delay?**

* ❌ Browser wait nahi karta
* ✅ Ye **grace window** hota hai (recent login ke baad)

**Risk?**

* ⚠️ **CSRF possible** in first ~2 minutes after login
* Lax **alone is NOT enough**

**Attack flow (1 line):**

* User login → attacker site → auto POST → cookie sent → CSRF success

**Protection (Must-do):**

1. ✅ **CSRF Token (mandatory)**
2. 🔒 Sensitive actions → `SameSite=Strict`
3. 🔍 Check `Origin / Referer`
4. 🔐 Re-auth / OTP for critical actions


> *`SameSite=Lax` doesn’t fully prevent CSRF because browsers allow cookies on cross-site POST requests for a short (~2 min) window after login.*


</details>


## 8) CSRF Token

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>

✔ **What?**

* **CSRF Token** = a **secret, random value** known only to the **server and the legitimate client**
* Cookies are sent automatically ❌, **tokens must be sent manually**


✔ **Why?**

* Browsers automatically send cookies → CSRF becomes possible
* An attacker **cannot guess or read the token** → the attack fails


✔ **How? (Synchronizer Token Pattern)**

1️⃣ Server generates a token
2️⃣ Server securely sends it to the client
3️⃣ Client sends the token with **every state-changing request**
4️⃣ Server verifies the token


✔ **Simple Flow (One Look)**

* Generate: `randomBytes()`
* Send to client:

  * HTML hidden input (forms)
  * Header / API response (SPA)
* Client sends: `X-CSRF-Token`
* Server: compare token → allow or block request


✔ **Where to Store the Token?**

✅ Server-side session
✅ HttpOnly cookie + double submit (advanced)
❌ `localStorage` (XSS risk)



✔ **CSRF Token vs SameSite**

* Token: **Explicit verification, strong protection, SPA-friendly**
* SameSite: **Browser-enforced rule, partial protection**
  👉 **Production = use both**



✔ **Where to Apply CSRF Protection? (Important)**

✔️ POST
✔️ PUT
✔️ PATCH
✔️ DELETE
❌ GET (no state change)

</details>

---

<details>
  <summary>👉🏼 CODE IMPLEMENTATION:</summary>

<br/>

## 📌 Backend (Express – Node.js)

```js
// setup
import express from "express";
import crypto from "crypto";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// simple in-memory token (demo only)
let csrfToken = null;

// generate + send token
app.get("/form", (req, res) => {
  csrfToken = crypto.randomBytes(32).toString("hex");

  res.send(`
    <form method="POST" action="/submit">
      <input type="hidden" name="csrfToken" value="${csrfToken}" />
      <input type="text" name="data" />
      <button type="submit">Submit</button>
    </form>
  `);
});

// verify token
app.post("/submit", (req, res) => {
  if (req.body.csrfToken !== csrfToken) {
    return res.status(403).send("CSRF blocked ❌");
  }
  res.send("CSRF passed ✅");
});

// start server
app.listen(3000);
```

---

## 📌 Frontend (SPA / API Request)

```js
// token received from server
const csrfToken = "TOKEN_FROM_SERVER";

// send token manually
fetch("/api/update", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-CSRF-Token": csrfToken,
  },
  body: JSON.stringify({ data: "test" }),
});
```

---

## 📌 Backend (API Verification)

```js
app.post("/api/update", (req, res) => {
  if (req.headers["x-csrf-token"] !== csrfToken) {
    return res.status(403).json({ error: "CSRF blocked" });
  }
  res.json({ success: true });
});
```

</details>

---

</br>
</br>

<img src="https://www.animatedimages.org/data/media/562/animated-line-image-0415.gif" border='0' height="15px" width="100%" />

</br>

<center>

# **📝 DoS, Rate Limiting & Throttling (PRODUCTION SKILLS)**

</center>

## 1) Denial of Service (DoS) Attack

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>


✔ **What?**
* **DoS (Denial of Service)** = overwhelming a server so that **legitimate users can no longer be served**


✔ **Why?**
* Server resources are **limited**
* Too many requests → **CPU / memory / connections get exhausted** → application goes down


✔ **Simple Example (One Look)**

* Endpoint: `POST /login`
* Attacker: **10,000 requests per second**
* Result:

  * 💥 CPU spike
  * 💥 Database overload
  * 💥 Application DOWN


✔ **DoS vs DDoS (Quick)**

* **DoS**: single source, easier to block
* **DDoS**: multiple sources, harder to block, massive scale


✔ **Basic Defenses (High-Level)**

* Rate limiting
* Request size limits
* Timeouts
* Throttling


> *A Denial of Service attack makes an application unavailable by overwhelming its resources.*


</details>


## 2) Rate Limiting

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>
### 🧠 **Rate Limiting — Concise Remembering Notes (English)**

---

### **What?**

* **Rate Limiting** = allowing a **limited number of requests** from a user / IP / token **within a fixed time window**
* Normal users ✅, abusers/bots ❌

---

### **Why?**

* **First line of defense against DoS attacks**
* Reduces brute-force attempts, API abuse, and server overload


✔ **Where to Apply? (High-Risk Endpoints)**

✔️ `/login`
✔️ `/signup`
✔️ `/otp`
✔️ `/search`
✔️ `/password-reset`


✔ **Window Types**

⏱️ **Fixed Window**: Simple, but has boundary burst issue
🔄 **Sliding Window**: Smoother and more accurate


✔ **Required Add-on (Important)**

* HTTP Status: **`429 Too Many Requests`**

> *Rate limiting protects system resources by restricting how many requests a client can make within a given time period.*


✔ IMPLEMENTATION CODE :(Fixed Window)


```js
import express from "express";
import bcrypt from "bcrypt";

const app = express();
const PORT = 4000;

/*
  Simple CORS setup
  (Allows requests from any origin – demo only)
*/
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

/*
  Home route
*/
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

/*
  In-memory store to track requests per IP
  Structure:
  {
    "IP_ADDRESS": {
      startTime: Number,
      count: Number
    }
  }
*/
const rateLimitStore = {};

/*
  Rate limiter factory function
  windowSize        → time window in milliseconds
  maxRequests       → max allowed requests in that window
*/
function rateLimiter({ windowSize, maxRequests }) {
  return function (req, res, next) {
    const ip = req.ip;           // client IP
    const currentTime = Date.now();

    // First request from this IP
    if (!rateLimitStore[ip]) {
      rateLimitStore[ip] = {
        startTime: currentTime,
        count: 1,
      };
      return next();
    }

    const requestData = rateLimitStore[ip];

    // If time window has passed, reset counter
    if (currentTime - requestData.startTime > windowSize) {
      rateLimitStore[ip] = {
        startTime: currentTime,
        count: 1,
      };
      return next();
    }

    // Within same window → increase count
    requestData.count++;

    // If limit exceeded → block request
    if (requestData.count > maxRequests) {
      return res.status(429).json({
        error: "Too many requests. Please slow down.",
      });
    }

    next();
  };
}

/*
  Protected route with rate limiting
  Allows only 5 requests per minute per IP
*/
app.get(
  "/register",
  rateLimiter({ windowSize: 60_000, maxRequests: 5 }),
  (req, res) => {
    // Simulating expensive operation (password hashing)
    bcrypt.hashSync("123456", 14);

    res.json({ message: "Registered successfully" });
  }
);

/*
  Start server
*/
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

```


</details>

