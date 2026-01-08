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