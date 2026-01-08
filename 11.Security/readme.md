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