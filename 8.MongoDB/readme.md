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


## 3 Mongo Shell In Details

<details>
  <summary>📌 READ IN DETAILS:</summary>

## What is Mongo Shell?
- mongosh = MongoDB Shell (CLI client)
- Uses MongoDB Wire Protocol (TCP), **NOT HTTP**
- **Built on Node.js** - contains embedded Node.js runtime
- Works even without installing external Node.js
- Default connects to: **mongodb://localhost:27017** i.e **127.0.0.1:27017**

## Key Features
### 1. Node.js Environment
- JavaScript REPL like Node.js
- Node core modules available (fs, os, path, http)
- process object available
- Better syntax highlighting than Node REPL

### 2. Mongodb Node Environment Behaviors
- **Promises auto-resolve** in console (shows result, not Promise object)
- Undefined values don’t print
-  **Can run .js files**: `mongosh --nodb app.js`

### 3. Server Management
- Can start HTTP servers inside mongo shell
- Use `process.exit()` to stop
- Has **exit** function variable to quit shell

### Important Commands:

- `mongosh --nodb` → # enable Node.js interpreter without connecting to DB
- `.editor` → multi-line editor
- `exit` → quit shell

### MongoDB-Specific Variables (when connected):
- db → current database (object)
- show → list DBs / collections (function)
- use → switch database (function)
- it → iterate cursor 

### Cool Fact:
- mongosh (~109MB) = Node.js runtime + MongoDB client
- Can be used as JS interpreter without Node.js
- Built using Node.js for client-side functionality

### Interview Line:
"mongosh is a Node.js-based MongoDB shell that connects via MongoDB wire protocol and allows executing JavaScript with database commands."


</details>






<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">


## 4 MongoDB Server 

<details>
  <summary>📌 READ IN DETAILS:</summary>

</br>

✔ MongoDB Server
- mongod = MongoDB server (stores actual data)
- Mogodb Server build using C++,along with other languages. 
- Data is stored on server, NOT in shell

</br>

✔ Components Installed
- `mongod` → database server (C++)
- `mongosh` → command-line client
- MongoDB Compass → GUI tool

</br>

✔ **MongoDB Server :**
- Server runs on: `localhost:27017`
- Uses **TCP** protocol
- Default DBs:
  - **admin**
  - **config**
  - **local**

</br>

✔ Common Issues in MongoDB Server
- Create folder manually (Windows):
  `C:\data\db`
- Add MongoDB `/bin` to system **PATH**


</br>

✔ Networking
- MongoDB uses TCP (not HTTP)
- Can run on custom IP/Port
- Supports remote connections (IPv4 / IPv6)

</br>

✔ Interview Line
“mongod is the MongoDB server process that stores data, while mongosh is a client used to interact with the server.”

  
</details>




<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## 5 Databases, Collections, Documents

<details>
  <summary>📌 Empty:</summary>

</details>


<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## 6 CREATE

<details>
  <summary>📌 READ IN DETAILS:</summary>

</br>

- CREATE Operation = Insert new document(s) into a collection
- Collection auto-created on first insert if not exist
- `_id` auto-generated unless custom provided

- **After insert Returns**: `{ acknowledged: true, insertedIds: [ObjectId(...), ...] }`

- Supports nested objects & arrays

</br>

✔ **```insertOne()```**:
   - Inserts a single document

   - Syntax: 
   
   ```c++
   db.collection.insertOne({ key: value, ... })
   ```
   
</br>

✔ **```insertMany()```**:
   - Inserts multiple documents at once
   
   - Syntax: 
   ```c++
   db.collection.insertMany([ {...}, {...}, ... ], { ordered: true/false })
   ```
   
- Ordered (default): stops at first error
   
- Unordered (ordered: false): continues inserting remaining documents
   
- Errors: duplicate `_id` in ordered mode stops insert; unordered skips errors

</details>