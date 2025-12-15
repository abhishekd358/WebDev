## 1 Intro to Databases

<details>
  <summary>📌 READ IN DETAILS:</summary>

```
Database
-> Structured collection of data
-> Fast storage + fast retrieval

Why Database
-> Handle large data
-> Fast search
-> Multiple users
-> Secure & reliable

ISAM(Indexed Sequential Access Method)
->Early method of storing data using indexes for faster sequential access
-> IBM (1960s)
-> Developer handled everything

DBMS
-> Software to manage database
-> CRUD operations
-> Examples: MySQL, MongoDB

Protocol
Databases use their own protocols over TCP to talk to clients:
-> MongoDB: Wire Protocol
-> MySQL: Protocol
```
</details>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## 2 Type of Databases

<details>
  <summary>📌 READ IN DETAILS:</summary>

#### **2 Main Types of Databases:**

1️⃣ Relational (SQL):
   - Uses tables (rows & columns)
   - Fixed schema
   - Relations via primary/foreign keys
   - Fully ACID compliant
   - Examples: MySQL, PostgreSQL, Oracle, SQL Server
   - Optimized for complex queries

2️⃣ Non-Relational (NoSQL):
   - Stores data as JSON / key-value / document
   - Flexible schema
   - Relations via object references
   - Not fully ACID
   - Good for distributed systems & big data
   - Examples: MongoDB, DynamoDB, Cassandra, Redis

✔ MongoDB Specifics:
   - Document-oriented (JSON-like)
   - JSON query language (JS friendly)
   - Flexible fields per document
   - Perfect for Node.js / MERN stack
   - Asynchronous, scalable, flexible

✔ Interview One-Liner:
   "Relational databases use structured tables with fixed schema, whereas NoSQL databases use flexible document-based storage like MongoDB, ideal for modern web apps."

</details>


<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">