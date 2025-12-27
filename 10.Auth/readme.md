# 1) Side Effect Import i ES6

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

1. **Definition of State in Authentication**  
   - **State** = data or information.
   - **Stateful** = server changes state (stores/removes data) when user logs in/out.
   - **Stateless** = server does **not** change any state; only provides a token (e.g., JWT).

2. **Gym Analogy**  
   - **Stateless Gym**: Member gets an ID card with expiry date. No internal record is kept. Can’t revoke access before expiry.
   - **Stateful Gym**: Member gets an ID, but gym keeps a register. Can revoke membership if member misbehaves.

3. **Drawbacks of Stateless Auth**  
   - No control over active sessions.
   - Cannot log out users before token expiry.
   - Cannot block malicious users immediately.
   - Stolen tokens remain valid until expiry.

4. **Drawbacks of Stateful Auth**  
   - More server load (storing sessions).
   - Slightly slower (needs to check session DB).

5. **JWT (JSON Web Token) Discussion**  
   - JWT is **stateless by design**.
   - Often misused for client-server auth; better suited for **server-to-server** auth.
   - Using refresh tokens makes it **stateful/hybrid**.
   

6. **Recommendation**  
   - Use **stateful auth** (session-based) for control and security.
   - Use **stateless** only if you trust all users and scalability is critical.



### **Key Takeaways:**
- **Stateful**: Server stores session data → more control, can revoke access.
- **Stateless**: No server storage → less control, but more scalable.
- **JWT**: Often misused; refresh tokens make it stateful anyway.
- **Hybrid approach**: Common in practice (JWT + refresh token).

</deatils>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">