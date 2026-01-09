# 1) Intro to Security in Node.js

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>
✔ What is Web Security?
- Protect web apps from unauthorized access & attacks
- Prevent data theft, misuse, account hijacking

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

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">



# 2) Using `.env` File in Node.js (Native Way)

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

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

# 3) SQL Injection & NoSQL Injection 

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

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">




# 4) Schema-Based Data Validation with Zod

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



<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">
      
# 5) Same-Origin Policy (SOP) 

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

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">


# 6) XSS (Cross-Site Scripting) 

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
2. Inject <script>
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

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">