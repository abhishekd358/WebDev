## 1) Intro to Databases

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

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

## 2) Type of Databases

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

### ** Main Types of Databases:**

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


## 3) Types Of NoSql Databses:

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>


✔ NoSQL databases are divided into 4 main types based on data model & use case.

✔ 1) Document-Based (MongoDB)
   - Data stored as JSON/BSON documents
   - Flexible schema, nested objects, arrays
   - BEST for MERN stack, web apps, APIs

✔ 2) Key-Value (Redis)
   - Data = key → value
   - Extremely fast
   - Used for caching, sessions, OTPs
   - Not suitable for complex queries

✔ 3) Column-Based (Cassandra)
   - Data stored in columns (not rows)
   - Handles huge data & high write load
   - Used in analytics, big data, IoT

✔ 4) Graph Database (Neo4j)
   - Data stored as nodes & relationships
   - Best for relationship-heavy data
   - Used in social networks, recommendations, fraud detection

</details>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">



## 4) What is MongoDB

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>


✔ MongoDB is a document-based NoSQL database.

✔ Data is stored in JSON-like (BSON) documents instead of tables.

✔ Data Structure:
   MySQL   → Database → Table → Row → Column
   MongoDB → Database → Collection → Document → Field


✔ Key Features:
   - Horizontally scalable
   - Schema-less (flexible structure)
   - High performance (fast read/write + indexing)

✔ MongoDB vs SQL (Core Difference):
   - Tables → Collections
   - Rows → Documents
   - Columns → Fields

✔ Interview Line:

   "MongoDB is a document-based NoSQL database ideal for scalable web applications."


</details>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## 5) JSON vs BSON


<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>

✔ MongoDB looks like JSON externally but stores data internally in BSON.

✔ JSON (JavaScript Object Notation):
   - Human-readable
   - Lightweight
   - Limited data types (no Date, no Binary)
   - Slower for large data

✔ BSON (Binary JSON):
   - Binary format (machine-friendly)
   - Supports rich data types: Date, Binary, Int32/Int64, ObjectId
   - Faster read/write
   - Efficient storage
   - Used internally by MongoDB

✔ Key Concept:
   - Write JSON → MongoDB converts it to BSON automatically
   - JSON = Human language, BSON = Machine language

✔ Interview Line:

   "MongoDB stores data internally in BSON, a binary representation of JSON for performance."

</details>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## 6) MongoDB Architecture


<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>


✔ MongoDB Architecture = Client → Server → Database → Collection → Document

✔ Components:
   - Server (mongod): Handles requests, stores data
   - Client (mongosh / Compass / Node driver): Sends queries
   - Database: Logical container of collections
   - Collection: Stores documents, no fixed schema
   - Document: Smallest data unit, JSON-like
   - Cluster: Group of servers (nodes) providing:
       • High availability (replica sets)
       • Horizontal scaling (sharding)
       • Fault tolerance

✔ Query Flow:
   1. Client sends query
   2. Server/Cluster receives request
   3. Executes on database → collection → documents
   4. Returns data to client

✔ Interview Line:

   "MongoDB architecture consists of client, server, database, collection, and document; clusters (replica sets/shards) provide high availability and scalability. Data is stored internally in BSON."


</details>


<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## 7) Mongo Shell In Details

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

### What is Mongo Shell?
- mongosh = MongoDB Shell (CLI client)
- Uses MongoDB Wire Protocol (TCP), **NOT HTTP**
- **Built on Node.js** - contains embedded Node.js runtime
- Works even without installing external Node.js
- Default connects to: **mongodb://localhost:27017** i.e **127.0.0.1:27017**

### Key Features
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


## 8) MongoDB Server 

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

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

## 9) Databases, Collections, Documents

<details>
  <summary>👉🏼 READ IN DETAILS</summary>

</br>


✔ Creating a Database:
   - `use <db>` → select or temporarily create database
   - Database created permanently on first document insert
   - List all databses: `show dbs`

✔ Creating a Collection:
   - `db.createCollection("<name>")` → optional, can auto-create on first insert
   - List all collections: `show collections`

✔ Inserting First Document (auto-creates DB & collection):
   ```js
   db.users.insertOne({
     name: "Rahul",
     age: 22,
     skills: ["JS","React"]
   })
   ```
✔ Tips:

- Database name = lowercase, no spaces
- Collection = plural (users, posts)
- _id auto-generated
- First insert auto-creates DB & collection

</details>


<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## 10) CREATE

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

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




<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## 11) READ

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>

✔ READ Operation = Retrieve documents from a collection

</br>

✔ **```findOne()```**:

   - Fetches first matching document
   
   - Syntax: 
   ```c++
   db.collection.findOne({ query }, { projection })
   ```
   - **Query** => filter 
   
   - **Projection** => fields to show/hide
   
   - Example: ```db.users.findOne({ name: "Rahul" })```
   
   - **Nested field query**: ```db.users.findOne({ "address.city": "Delhi" })```
   
   - Returns single document or null
   
   - Interview Line: "findOne() fetches the first document matching a query and allows projection."

</br>

✔ **```find()```**:

   - Fetches all matching documents
   
   - **Syntax**: 
   
   ```c++
   db.collection.find({ query }, { projection })
   ```
   
   - Returns cursor (pointer to documents)
   
   - **Convert to array**: `.toArray()`
   
   - Nested field query: `db.users.find({ "address.city": "Delhi" }).toArray()`
   
   - Projection: ```db.users.find({ skills: "React" }, { name:1, skills:1, _id:0 }).toArray()```
   
   - **Limit / Skip / Sort / Count:**
       - `.limit(2)` → first 2 documents
       - `.skip(2)` → skip first 2 documents
       - `.sort({ age: -1 })` → descending
            - `-1` => Decending (higher to lower)
            - `+1` => Ascending(lower to higher)
   
   - Interview Line: "find() fetches multiple documents using queries, supports projection, limit, skip, sort, and returns a cursor."

</details>

### 📝 Cursor
<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>

* **Cursor (MongoDB):**

  * A cursor is a pointer to the result set returned by a query
  * Created automatically when using `.find()`
  * Retrieves documents in batches instead of all at once
  * Improves performance and memory usage

* **Iterating Cursor:**

  * `.forEach()` → loop through all documents
  * `.hasNext()` → check if more documents exist
  * `.next()` → fetch the next document

* **Convert Cursor to Array:**

  * `.toArray()` → convert all results into an array (loads all data into memory)

* **Limit / Skip / Sort / Count:**

  * `.limit(2)` → first 2 documents
  * `.skip(2)` → skip first 2 documents
  * `.sort({ age: -1 })` → descending order by age

    * `-1` → Descending (higher to lower)
    * `+1` → Ascending (lower to higher)
  * `.count()` → count number of documents in cursor

* **Cursor Control:**

  * `.noCursorTimeout()` → prevent cursor from timing out
  * `.close()` → manually close the cursor

* **Batching:**

  * `.batchSize(10)` → fetch 10 documents per batch

</details>

### 📝 Query Operators

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>

✔ **Comparison Operators:**
   - `$gt` → greater than
   - `$gte` → greater than or equal
   - `$lt` → less than
   - `$lte` → less than or equal
   - `$eq` → equal (optional)
   - `$ne` → not equal
   - Example: `{ age: { $gt: 22 } }`

</br>

✔ ** type of Data:**
    - `$type` → to query base on Data Type

</br>

✔ **Logical Operators:**
   - `$or` → either condition true
   - `$and` → both conditions true
   - Example2: `{ $or: [ { condtion:1 },{ condtion:2 }, { name: "Alexander" } ] }`

</br>

✔ **Array Operators:**
   - $in → value exists in array
   - $nin → value not in array
   - Example: `{ skills: { $in: ["React","Node"] } }`

</br>

✔ **Existence Operator:**
   - $exists → check if field exists or missing
   - Example: `{ address: { $exists: true } }`

</br>

✔ **Nested Queries:**
   - Query nested objects or array fields
   - Example: `db.users.find({ "address.city": "Delhi" })`

</br>

✔ Interview Line:
   "MongoDB query operators like $gt, $lt, $in, $or, $and, $exists allow filtering documents with powerful conditions, including nested fields and arrays."

</details>


### 📝 Projections

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>

✔ **Projection** = **Select which fields to show in query result**

✔ MongoDB version of SQL SELECT

✔ **Syntax:**
```c++
db.collection.find({ query }, { field: 1, field: 0, _id: 0 })
```

</br>i

✔ **Rules:**
   - `1` → include field
   - `0`→ exclude field
   - Cannot mix include (1) & exclude (0) together
     (Exception: _id can be excluded)

</br>

✔ **_id Field:**
   - Included by default
   - Use _id: 0 to hide


</br>

✔ Interview Line:
   "Projection in MongoDB allows selecting specific fields to include or exclude in query results."

</details>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">


## 12) UPDATE

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>

✔ UPDATE = **Modify existing documents in a collection**

</br>

✔ **Methods:**
   - `updateOne()`  → updates first matching document

```c++
   db.collection.updateOne(
       { filter },
     { updateOperator },
     { options }
   )
```
- `updateMany()` → updates all matching documents

```c++
   db.collection.updateMany(
     { filter },
     { updateOperator },
     { options }
   )
```

</br>

✔ ⚠️ **Important Rule:**
   - Direct value update NOT allowed
   - Always use update operators

  ```
  ❌ { age: 23 } //wrong way
  ✔ { $set: { age: 23 } } //right way 
```

</br>

✔ **Common Update Operators:**
   - `$set`   → update/add field
   - `$inc`   → increment number
   - `$unset` → remove field
   - `$push`  → add item to array
   - `$pull`  → remove item from array
   - `upsert` → update or insert

</br>

✔ Examples:
   - Update single field: `{ $set: { age: 23 } }`
   - Update multiple fields: `{ $set: { age: 24, city: "Delhi" } }`
   - Increment: `{ $inc: { age: 1 } }`
   - Remove field: `{ $unset: { city: "" } }`
   - Nested field: `{ $set: { "address.city": "Mumbai" } }`

✔ Result Object:
   - **matchedCount**  → documents found
   - **modifiedCount** → documents updated

</br>

✔ Interview Line:
   "MongoDB updates modify existing documents using update operators like $set via updateOne or updateMany."

</details>

### 📝 Upsert

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>


✔ UPSERT = Update + Insert
   - **Document exists** → UPDATE
   - **Document not exists** → INSERT

✔ **Used with:**
   - updateOne()
   - updateMany()
   - replaceOne()

✔ **Upsert Syntax:**
```c++
   db.collection.updateOne(
     { filter },
     { $set: { field: value } },
     { upsert: true }
   )
```

✔ Interview Line:
   "Upsert performs update or insert in one operation."

</details>

### 📝 replaceOne()

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>

✔ **replaceOne():**
   - Replaces FULL document
   - Update operators NOT allowed
   - _id remains same
   - Old fields removed if not included

</br>

✔ **Syntax:**
```c++
   db.collection.replaceOne(
     { filter },
     { fullDocument },
     { upsert: true } // optional
   )
```

</br>

✔ **updateOne vs replaceOne:**
   - `updateOne` → partial update (safe)
   - `replaceOne` → full replace (risky)

</br>

✔ **Real-Life Analogy:**
   - updateOne = edit profile
   - replaceOne = delete & recreate profile with same ID

✔ Interview Line:
   "Upsert performs update or insert in one operation, while replaceOne replaces the entire document except _id."

</details>

### 📝findOneAndUpdate()

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>

```findOneAndUpdate()``` → perform action + return affected document

 **findOneAndUpdate():**
   - Finds first matching document
   - Updates it
   - Returns old or updated document

   **Syntax:**
   ```c++
     db.collection.findOneAndUpdate(
       { filter },
       { updateOperator },
       { options }
     )
   ```

   **Example:**
   ```c++
     db.users.findOneAndUpdate(
       { name: "Aman" },
       { $set: { age: 26 } },
       { returnNewDocument: true }
     )
   ```
</details>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">




## 13) DELETE

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>

✔ DELETE = Remove documents from a collection


### ✅ NOTE :
- `$unset` → Use to delete the field/column from the document 

</br>

✔ **Methods**:
   - `deleteOne()`  → deletes first matching document
   - `deleteMany()` → deletes all matching documents

</br>

✔ **Syntax**:
```c++
   db.collection.deleteOne({ filter })

   db.collection.deleteMany({ filter })
```

</br>

✔ ⚠️ **Important Rule:**
   - Filter carefully
   - Wrong filter → data loss
   - {} in deleteMany() → deletes entire collection documents

</br>

✔ **Examples:**

1️⃣ deleteOne():
```c++
db.users.deleteOne({ name: "Rahul" })

db.users.deleteOne({ _id: ObjectId("64f1a2b3c456def7890abc12") })
```
2️⃣ deleteMany():
```c++
db.users.deleteMany({ city: "Delhi" })
db.users.deleteMany({ age: { $lt: 18 } })
db.users.deleteMany({})   // VERY DANGEROUS
```

✔ **Result Object:**
   `{
     acknowledged: true,
     deletedCount: <number of docs deleted>
   }`

✔ **Best Practices:**
   - Test filter with find() before delete
   - Prefer `_id` for safe deletion
   - Avoid **{ }** unless absolutely sure
   - Use deleteMany only when bulk removal required

</br>

✔ Interview Line:
   "MongoDB DELETE operations remove documents using deleteOne() or deleteMany() based on filter conditions. Use cautiously to prevent data loss."

</details>


### 📝findOneAndDelete()

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>


 **findOneAndDelete():**
   - Finds first matching document
   - Deletes it
   - Returns deleted document

   Syntax:
   ```c++
     db.collection.findOneAndDelete({ filter })
   ```
   Example:
   ```c++
     db.users.findOneAndDelete({ name: "Rahul" })
   ```
   Output:
   ```
     {
       value: { _id: ObjectId("..."), name: "Rahul", age: 23 },
       ok: 1
     }
   ```
</br>

✔ Interview Line:
   "findOneAndUpdate() and findOneAndDelete() perform the operation and return the affected document, ideal for real-time apps."

</details>

### 📝 drop() vs deleteMany()

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>

✔ Purpose:
   - Both remove data from collection
   - Behavior differs

</br>

✔ **deleteMany():**
   - Deletes matching documents
   - Collection remains
   - Syntax:
     `db.users.deleteMany({})`
   - Return: `{ acknowledged, deletedCount }`

</br>


✔ **drop():**
   - **Deletes entire collection**
   - Collection removed from DB
   - Syntax:`db.users.drop()`
   - Notes:
     * Permanent delete
     * Returns true/false
     * Collection gone → structure gone
   - Risky → use carefully

</br>


✔ Interview Line:
   "deleteMany() deletes documents but keeps the collection, whereas drop() removes the entire collection from the database."

</details>

### 📝 Soft Delete

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>

✔ **Purpose:**
   - Soft Delete = logically delete data
   - Data stays in DB, user doesn’t see it
   - Safer than hard delete

</br>

✔ **Implementation:**

1️⃣ Mark as deleted:
```c++
db.users.updateOne(
  { _id: ObjectId("...") },
  { 
    $set: { 
      isDeleted: true,
      deletedAt: new Date()
    } 
  }
)
```


</br>

✔ **Soft vs Hard Delete:**

| Feature       | Soft Delete | Hard Delete |
| ------------- | ----------- | ----------- |
| Data recover  | ✅           | ❌           |
| Audit / logs  | ✅           | ❌           |
| Risk          | Low         | High        |
| Companies use | ✅           | ❌ (rare)    |

</br>

✔ Interview Line:
   "Soft delete is preferred over hard delete using flags like `isDeleted` to preserve data and enable recovery."
</br>

</details>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">


## 14) Data Structure and Data Types

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>
Document Structure & Data Types

✔ Key = Field Name, Value = Field Value

✔ Supports nested objects & arrays

✔ Flexible schema → different documents can have different fields

### Note: 
 - normal `Number` data type is convert to `Int32`
 - Long Number i.e `NumberLong` is convert to `Int64`

✔ **Common Data Types:**
   - `String` → "Rahul"
   - `Number` → 22, 3.14
   - `Boolean` → true / false
   - `Array` → ["JS","React"]
   - `Object` → { city: "Delhi" }
   - `Date` → ISODate("2025-12-14T10:00:00Z")
   - `ObjectId` → unique _id
   - `Null` → null
   - `Binary` → BinData(...)
   - `Double` → for Float Numbers (22.5, 3.14)
   - `Int32` → 22

</br>

**⚠️ Unregular Use (Less Common / Special):**

* `Int64 (Long)` → NumberLong(9000000000)
* `Decimal128` →High Precision value ex:- NumberDecimal("99.99")

* `Timestamp` → Timestamp(1690000000, 1)
* `RegularExpression` → /^Rahul/i
* `JavaScript` → function() { return x + 1 }
* `JavaScriptWithScope` → Code("x + y", { y: 5 })
* `UUID` → UUID("550e8400-e29b-41d4-a716-446655440000")
* `MinKey` → MinKey()
* `MaxKey` → MaxKey()
* `Symbol` → Symbol("test") (deprecated)
* `Undefined` → undefined (deprecated)

</br>


✔ `_id` Field:
   - Automatically created if not provided
   - Unique identifier for each document

✔ Interview One-Liner:

   "MongoDB documents are JSON-like objects stored in collections with flexible data types including String, Number, Boolean, Array, Object, Date, and ObjectId."

</details>




<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">


## 15) _id Field (Auto ObjectId Explained)

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>

✔ `_id` field:
   - Default **primary key**
   - Automatically created for every MongoDB document
   - Uniquely identifies each document

✔ ObjectId:
   - **12-byte** unique identifier
   - Structure:
        - 4 bytes → timestamp (seconds since epoch)
        - 5 bytes → random value (machine + process)
        - 3 bytes → incrementing counter

✔ Custom `_id`:
   - Allowed (e.g., "_id": "user_101")
   - If provided, MongoDB won’t generate ObjectId
   - ObjectId recommended for consistency

✔ Real-Life Analogy:
   - `_id` = National ID / Passport number

✔ Interview Line:

   "**_id** is a unique identifier automatically generated for each MongoDB document, usually an ObjectId, but **can be customized if needed**."

</details>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## 16) Where Mongodb Store Data Locally?  

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>

- when mongoDB server run Locally then the Data store in `C:\data\db\` path 

- Folder must exist before starting MongoDB
- If missing → MongoDB server error

- Data stored in BINARY format
- Not human-readable (not text/JSON)

**✔ Custom Data Directory**
- MongoDB allows custom storage location
- Command:
  `mongod --dbpath <C:\custom\folder>`


✔ Interview Line
"MongoDB stores data as binary files on disk, by default in C:\data\db, and the storage path can be customized using --dbpath."

</details>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## 17)🤯 MongoDB Configuration using `mongod.cfg`

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>

✔ What is mongod.cfg?
- Configuration file for MongoDB server
- Controls server behavior (storage, network, logs, port)
- Used mainly when MongoDB runs as a SERVICE

</br>

✔ Config File Location (Windows)
- Found in: Windows Services → MongoDB Server → Properties
- Example:
  `mongod.exe --config "C:\Program Files\MongoDB\Server\8.0\bin\mongod.cfg"`

</br>

✔ Important Config Options
- storage.dbPath → database file location
- systemLog.destination → file / console logs
- net.bindIp → allowed IP addresses
- net.port → server port (default 27017)

</br>

✔ Run MongoDB with Custom Config
- Command:
  `mongod --config <your_custom_path>`

</br>

✔ Network Configuration
- Default: bindIp = 127.0.0.1 (localhost only)
- Allow remote access:
  net:
    bindIp: 0.0.0.0
- Port can also be changed from 27017

</br>

✔ Multiple MongoDB Servers
- Possible using:
  - Different dbPath
  - Different ports
  - Different config files


</br>

✔ Interview Line
"MongoDB server behavior is configured using mongod.cfg, which defines dbPath, port, bind IP, and logging, especially when running MongoDB as a service."

</details>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## 18) 🤯 Accessing MongoDB Server from Anywhere  

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>

✔ Goal
- Access MongoDB server from outside local machine
- From another PC, mobile, or anywhere in the world
- Find IPv4 and IPv6 of your device using cmd: `ipconfig`

✔ Bind IP Configuration
- Default: 127.0.0.1 (localhost only)
- For remote access:
  net:
    bindIp: 0.0.0.0        # All IPv4
    ### or
    bindIp: [::],0.0.0.0     # IPv6 + IPv4

✔ IPv6 Requirement
- Global (internet) access requires IPv6
- **Enable in config:**
  net:
    `ipv6: true`
- Or start server with:
  `mongod --ipv6`


✔ Global Access using IPv6
- Connection string format:
  mongodb://[IPv6_address]:27017
- Square brackets are mandatory



✔ Key Takeaway
- bindIp + ipv6 = remote MongoDB access
- IPv6 enables global connectivity
- MongoDB works over TCP like any server

✔ Interview Line
"MongoDB can be accessed remotely by configuring bindIp and enabling IPv6, allowing global connections over TCP port 27017."

</details>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## 19)🤯 Running .js script file as a CMD file to MongoSH  

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>

- we using javascript file as a initiator to MongoSH to run different query when our Mongod server is running  

```c++
mongosh <your_script_name>.js
```

- Inside the JS file, now you can write Query of mongo like (use db, CRUD, show ....etc)

</details>


<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">




## 20) MongoDB Driver 

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>

✔ MongoDB Driver
- MongoDB provides official drivers for many languages
- Node.js driver install:
  `npm install mongodb`

✔ MongoClient
- `mongoClient` is used to connect Node.js with MongoDB
- Imported from "mongodb" package
- Manages connection pooling internally

✔ Connecting to MongoDB
- Create client using connection string
- Use `client.connect()` to establish connection
- If DB name not provided → connects to "test" database by default

✔ Access Database
- Get database reference:
  `const db = client.db("database_name")`

✔ Access Collection
- Get collection:
  `const collection = db.collection("collection_name")`

✔ Read Data
- Fetch documents:
  `collection.find().toArray()`
- find() returns cursor → convert to array

✔ List Collections
- List all collections in a database:
  `db.listCollections().toArray()`

✔ Admin Operations
- Access admin database:
  `client.db().admin()`
- List all databases:
  `admin.listDatabases()`

✔ Connection Lifecycle
- Connection stays open until:
  `client.close()`
- Real apps use ONE shared connection (connection pool)


✔ **Interview Line**
"In Node.js, MongoDB is accessed using the official MongoDB driver via MongoClient, which manages connection pooling and database operations."

</details>

### Implementing the CRUD using Mongodb Node Js Driver

<details>
  <summary>👉🏼 Implementation :</summary>

- create a .js file
- run `npm init -y`
- install `npm i mongodb`

```ts
// this file now act a SHELL but in JavaScript language

// creating a mongo client
import { MongoClient } from 'mongodb';

// connect to mongodb
const client1 = await MongoClient.connect(process.env.DB_URL);

try {
  // 1️⃣ list all databases
  const myDB = await client1.db().admin().listDatabases();
  console.log("Databases:", myDB.databases.map(db => db.name));

  // -------------------------------------------------
  // 2️⃣ create database (MongoDB creates DB lazily)
  const testDB = client1.db('TestDB');

  // -------------------------------------------------
  // 3️⃣ create collection
  await testDB.createCollection('users');
  console.log("Collection created: users");

  // -------------------------------------------------
  // 4️⃣ list collections in TestDB
  const allCollections = await testDB.listCollections().toArray();
  console.log(
    "Collections:",
    allCollections.map(col => col.name)
  );

  // -------------------------------------------------
  // 5️⃣ getting specific collection
  const myCollections = testDB.collection('users');

  // ----------------------- CRUD --------------------

  // 6️⃣ CREATE

  // insert one document
  await myCollections.insertOne({
    name: "Alice",
    age: 25
  });

  console.log("One document inserted");

  // -------------------------------------------------
  // 7️⃣ READ

  // read all documents
  const users = await myCollections.find({}).toArray();
  console.log("All Users:", users);

  // read one document
  const oneUser = await myCollections.findOne({ name: "Alice" });
  console.log("One User:", oneUser);

  // -------------------------------------------------
  // 8️⃣ UPDATE

  await myCollections.updateOne(
    { name: "Alice" },
    { $set: { age: 26 } }
  );

  console.log("One document updated");

  // -------------------------------------------------
  // 9️⃣ DELETE

  await myCollections.deleteOne({ name: "Alice" });

  console.log("One document deleted");

} catch (error) {
  console.error("Error:", error);
} finally {
  // 🔚 closing client connection
  await client1.close();
  console.log("MongoDB connection closed");
}

```
</br>

</details>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">


## 21) Cursor

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>


  * A cursor is a pointer to the result set returned by a query
  * Created automatically when using `.find()`
  * Retrieves documents in batches instead of all at once
  * Improves performance and memory usage

* **Iterating Cursor:**

  * `.forEach()` → loop through all documents
  * `.hasNext()` → check if more documents exist
  * `.next()` → fetch the next document

* **Convert Cursor to Array:**

  * `.toArray()` → convert all results into an array (loads all data into memory)

* **Limit / Skip / Sort / Count:**

  * `.limit(2)` → first 2 documents
  * `.skip(2)` → skip first 2 documents
  * `.sort({ age: -1 })` → descending order by age

    * `-1` → Descending (higher to lower)
    * `+1` → Ascending (lower to higher)
  * `.count()` → count number of documents in cursor

* **Cursor Control:**

  * `.noCursorTimeout()` → prevent cursor from timing out
  * `.close()` → manually close the cursor

* **Batching:**
- MongoDB returns documents in batches, not all at once.
- Batch size controls how many docs are returned per network request.

  * `.batchSize(10)` → use to make how much document element fetch from server in 1 call over the network (fetch 10 documents per batch)

</details>



<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">


## 22) Why MongoDB **ObjectId** Is Not a String

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>


### **1. Storage Efficiency**
- A **string representation** of ObjectId (e.g., `"507f1f77bcf86cd799439011"`) takes **24 bytes** (UTF-8 encoding).
- The **binary ObjectId** takes only **12 bytes**.
- **Savings**: **50% less storage and network traffic**.

### **2. Binary Format (BSON)**
- MongoDB stores and transfers data in **BSON** (Binary JSON), not plain JSON.
- ObjectId is a **BSON data type**, stored as a **12-byte binary value**.
- When transferred over the network, only the **12-byte binary data** is sent, not a string.

### **3. Components of ObjectId**
ObjectId is a **12-byte binary value** divided into:

| Bytes | Purpose |
|-------|---------|
| **4 bytes** | **Timestamp** (seconds since Unix epoch) |
| **5 bytes** | **Host identifier** (hash of machine hostname) |
| **3 bytes** | **Incrementing counter** (unique within process) |

This structure ensures **uniqueness** and **sortability by creation time**.


### **Working with ObjectId in Node.js**

### **Creating an ObjectId**
```javascript
import { ObjectId } from 'mongodb';
const oid = new ObjectId(); // Generates a new ObjectId
```

### **ObjectId Internals**
- ObjectId is a **class** in the MongoDB driver.
- The actual binary data is stored in a **`buffer`** property.
- Example:
  ```javascript
  const oid = new ObjectId('507f1f77bcf86cd799439011');
  console.log(oid.buffer); // <Buffer 50 7f 1f 77 bc f8 6c d7 99 43 90 11>
  ```


### **Useful ObjectId Methods**
| Method | Purpose |
|--------|---------|
| **`toString()`** | Converts to 24-character hex string |
| **`equals(otherId)`** | Compares two ObjectIds |
| **`getTimestamp()`** | Returns creation date |
| **`ObjectId.isValid(string)`** | Checks if a string is a valid ObjectId |

Example:
```javascript
console.log(ObjectId.isValid('507f1f77bcf86cd799439011')); // true
console.log(ObjectId.isValid('invalid')); // false
```



**Key Takeaway**: ObjectId is stored and transferred in **binary format** for **efficiency**. It’s a **class instance** in Node.js with useful methods for comparison, validation, and timestamp extraction. Always use **`.equals()`** for comparison and **`ObjectId.isValid()`** for validation.


</details>


<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">



## 23) `command({})`, `runCommand({})` in Mongodb

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>

- **MongoDB commands** are essentially requests sent to the MongoDB server to perform various operations.
- **Commands vs. Methods**:
  - Methods like `find()`, `insertOne()`, `updateOne()` are convenient abstractions that internally run commands.
  - Using `db.runCommand()` (in Shell) or `db.command()` (in Node.js driver) allows direct execution of raw commands, offering more power and flexibility.

---

### 🔧 **How to Run Commands in Different Environments**

| Environment | Method | Description |
|-------------|--------|-------------|
| **Mongo Shell** | `db.runCommand({ commandName: value })` | Interactive, best for administration and debugging |
| **Node.js Driver** | `db.command({ commandName: value })` | Returns a Promise, used in application code |

> ✅ Both methods work similarly, just with slight syntax differences.

---

### 📁 **Common Commands Examples**

| Command | Description | Example (Shell) | Requires Admin? |
|---------|-------------|----------------|-----------------|
| **listDatabases** | Lists all databases | `db.runCommand({ listDatabases: 1 })` | ✅ Yes (must be run in admin database) |
| **listCollections** | Lists collections in current database | `db.runCommand({ listCollections: 1 })` | ❌ No |
| **create** | Creates a new collection | `db.runCommand({ create: "collectionName" })` | ❌ No |
| **dropDatabase** | Drops the current database | `db.runCommand({ dropDatabase: 1 })` | ❌ No |
| **hostInfo** | Shows server host information | `db.runCommand({ hostInfo: 1 })` | ❌ No |
| **serverStatus** | Shows server status and metrics | `db.runCommand({ serverStatus: 1 })` | ✅ Yes |




### Node.js Driver → `db.command({})`

```js
// get all collections
await db.command({ listCollections: 1 })
```

```js
// get database stats
await db.command({ dbStats: 1 })
```

```js
// find documents
await db.command({
  find: "users",
  limit: 5
})
```

---

### Mongo Shell → `db.runCommand({})`

```js
// get all collections
db.runCommand({ listCollections: 1 })
```

```js
// database stats
db.runCommand({ dbStats: 1 })
```

```js
// find documents
db.runCommand({
  find: "users",
  limit: 5
})
```
</details>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">


## 24) Schema

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>

✔ What is Schema Design?
- Planning document structure before storing data
- Decide fields, data types, nesting, defaults

✔ Schema-less ≠ Structure-less
- MongoDB allows flexibility
- But production apps NEED discipline

✔ Why Schema Design is Important
- Prevents messy data
- Improves readability
- Easier maintenance
- Better performance & validation

✔ Good Schema Example

```js
{
  _id: ObjectId,
  name: String,
  email: String,
  password: String,
  role: "user" | "admin",
  isDeleted: Boolean,
  createdAt: Date
}
```

✔ Schema Design vs Data Modeling
- Data Modeling → collections & relationships
- Schema Design → document-level structure

✔ Interview One-Liner
"MongoDB is schema-less, but schema design is essential for building scalable and maintainable applications."

</details>

### 📝: Implementation of schema in mongoSH & mongoClient

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>

MongoDB allows **schema validation** using **`$jsonSchema`** to enforce structure even though it’s schema-less.

- `$jsonSchema`:
  - is a international standard
  - Defines strict structure, data types, and rules for documents.
  - Supports nested validation.



---

### 1️⃣ **Create Collection with Schema (mongoSH and Node js Driver)**
-  implementation is same for mongoSH and mongodb mongoClient

```js
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email"],
      properties: {
        name: { bsonType: "string" },
        email: { bsonType: "string" },
        age: { bsonType: "int", minimum: 18 }
      },
      additionalProperties: false/true
    }
  },
  validationLevel: "strict",
  validationAction: "error"
});
```


✔ Enforces structure at DB level
✔ Invalid inserts will fail



### 3️⃣ **Common BSON Types**

```js
string, int, long, double, decimal
bool, date, objectId
array, object, null
```

✔ BSON ≠ JSON
✔ MongoDB stores data in **binary (BSON)**




### 4️⃣ Changing Existing schema 

- only use `callMod` field

```js
await db.command({
  collMod: "users",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email"],
      properties: {
        name: { bsonType: "string" },
        email: { bsonType: "string" },
        status: { enum: ["active", "inactive", "pending"] }
      }
    }
  },
  validationLevel: "moderate"
});

```

### ⚡ **Interview One-Liner**

> MongoDB supports schema validation using `$jsonSchema` to enforce structure, data types, and constraints at the database level.

</details>

### 📝: validator, validationLevel and validationAction

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>

### 1️⃣ Validator (Schema Validation)

- Rules applied on a collection to validate documents
- Ensures correct structure & data types
- Defined using `$jsonSchema` or query expressions

Example:

```
validator: {
  $jsonSchema: {
    bsonType: "object",
    required: ["name", "age"],
    properties: {
      name: { bsonType: "string" },
      age: { bsonType: "int", minimum: 18 }
    },
    additionalProperties: true/false
  }
}
```

</br>

- `validator` → rules
- `required` → must fields
- `properties` → field types
- `additionalProperties` → extra fields allowed?
- `validationLevel` → when rules apply
- `validationAction` → what happens on fail


### 2️⃣ validationLevel

- "`strict` validation poore documents fields ke types ko check karta hai, jabki `moderate` sirf updated fields type ko validate karta hai."

- Decides **which documents** are validated

Options:
- `strict` (default)

* Validate **all inserts & updates**

- `moderate`

* Validate only **new or updated fields**
* Old invalid data allowed

Example:

```
validationLevel: "strict"
```



### 3️⃣ validationAction

- Decides **what happens when validation fails**

Options:
- `error` (default)

* if first error or anything wrong see in validation it directly fails

- `warn`

* even validation rule fail it run and save warning in server logs
* Log warning in server logs

Example:

```
validationAction: "error"
```



### All Together (Create Collection)

```
db.createCollection("users", {
  validator: { $jsonSchema: { bsonType: "object" } },
  validationLevel: "strict",
  validationAction: "error"
})
```


### One-Line Memory Notes

```
validator        → rules
validationLevel  → when rules apply
validationAction → what to do on fail
```



### Interview Line

"validator defines rules, validationLevel controls scope, and validationAction controls behavior on failure."

</details>


### 📝: finding invalid Schema documents in MongoDB

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>

**✔ Problem**
- Large collections → manual checking impossible
- Need automated way to find documents not following schema validation
- MongoDB supports schema validation using `$jsonSchema`

</br>

**✔ What are Invalid / Non-Compliant Documents?**
- Documents that exist in collection
- But do NOT satisfy validation rules
- Data is valid JSON, but violates schema

</br>

**✔ Method 1: Mongo Shell (mongosh)**

1) Count Invalid Documents
  `db.users.validate()`

Important fields in output:
- `nInvalidDocuments`
- `nNonCompliantDocuments`
- warnings (if schema violations exist)

2) Find Actual Invalid Documents
- Get schema from collection metadata
- Use `$nor` + `$jsonSchema`

Example:
```js
  const schema =
    db.getCollectionInfos({ name: "users" })[0]
      .options.validator.$jsonSchema;

  db.users.find({ $nor: [{ $jsonSchema: schema }] })
```

**✔ Method 2: Node.js Driver**

1) Validate collection
  `await db.command({ validate: "users" })`

2) Get schema
```js
  const info = await db.listCollections({ name: "users" }).toArray();
  const schema = info[0].options.validator.$jsonSchema;
```
3) Find invalid documents
```js
  db.collection("users")
    .find({ $nor: [{ $jsonSchema: schema }] })
```



✔ Useful Operators
- `$jsonSchema `→ applies schema rules
- `$nor` → finds documents NOT matching schema

✔ Interview Line
"MongoDB can detect non-compliant documents using collection validation and `$jsonSchema` queries with `$nor`."

</details>

### 📝Embedding vs Referencing


<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>
✔ Embedding
- Related data stored inside the SAME document
- Faster reads (single query)
- Best for small, limited, rarely changing data
- One-to-few relationships

Example:
User → Address
Blog → Limited comments

✔ Referencing
- Related data stored in SEPARATE collections
- Linked using ObjectId references
- Better for large, growing, frequently updated data
- One-to-many / many-to-many relationships

Example:
User → Orders
Product → Reviews

✔ Key Differences
Embedding:
- Very fast read
- Data duplication possible
- Limited scalability (document size limit)

Referencing:
- Needs extra query / lookup
- No duplication
- Highly scalable

✔ Performance Rule
- Read-heavy + small data → Embed
- Write-heavy + large data → Reference

✔ Hybrid Approach (Most Used)
- Embed small info
- Reference large or shared data
- Real-world apps ALWAYS use hybrid modeling

✔ MERN App Example
Order:
- userId → referenced
- items → embedded

✔ Interview Line
"Embedding improves read performance by storing related data in the same document, while referencing improves scalability by storing data in separate collections using ObjectIds."

</details>


<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">


## 25) Transaction

 
### 1️⃣ What is a Transaction?
<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>

- A **transaction** in a database is a sequence of write operations(INSERT,UPDATE,DELETE) performed as a single unit of work. 

- Transactions ensure **ACID (Atomicity, Consistency, Isolation, and Durability)** properties, which are essential for maintaining data integrity.

- INSERT, UPDATE, and DELETE operations are part of the transaction. 
- However, a **READ operation (SELECT or FIND)** does not need to be part of the transaction, as it does not modify data.

### **ACID Properties**

1. **Atomicity**: All operations within a transaction are treated as a single unit. Either all of them execute successfully, or none of them are applied.
2. **Consistency**: Transactions ensure that the database remains in a valid state before and after execution.
3. **Isolation**: Transactions operate independently without interfering with each other.
4. **Durability**: Once a transaction is committed, changes are permanently saved in the database, even in the case of a system failure.

---

### **How Transactions Work in Databases?**

1. A transaction starts when an **INSERT, UPDATE, or DELETE** operation is initiated.
2. All operations inside the transaction are executed.
3. If all operations succeed, the transaction is **committed**.
4. If any operation fails, the transaction is **rolled back**, and no changes are applied.
</details>


### 2️⃣ Implementation of Transaction with Nodejs Drivers or MongoSH
<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>

✔ What are Transactions?
- Group of operations executed as ONE unit
- Either ALL succeed or ALL fail (Atomicity)
- Used when multiple collections must stay consistent

✔ Prerequisite
- Transactions require Replica Set
- Standalone MongoDB ❌ not supported
- MongoDB Atlas ✔ enabled by default

✔ Common Error
"Transaction numbers are only allowed on a replica set member"

✔ Replica Set Setup (Local)
1) Enable replica set in `mongod.cfg`
   replication:
     `replSetName: "myreplicaset"`

2) Start MongoDB
3) Initialize:
   `rs.initiate()`
4) Check:
   `rs.status()`

✔ Connection String
`mongodb://localhost:27017/dbname?replicaSet=myreplicaset`

✔ Transaction Flow (IMPORTANT)
1) startSession()
2) startTransaction()
3) Perform DB operations (PASS session)
4) commitTransaction() on success
5) abortTransaction() on error
6) endSession()


✔ Interview Line
"MongoDB transactions provide ACID guarantees across multiple documents and collections using sessions and replica sets."


</details>

### 3️⃣ Code 
<details>
  <summary>👉🏼 READ IN DETAILS :</summary>
</br>

```js
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/bankdb?replicaSet=myreplicaset";
const client = new MongoClient(uri);

async function runTransaction() {
  await client.connect();

  // Create Session
  const session = client.startSession();

  try {
    // 1️⃣ Start transaction
    session.startTransaction();

    const db = client.db("bankdb");
    const users = db.collection("users");
    const accounts = db.collection("accounts");

    // 2️⃣ Operation 1: Insert User
    const userResult = await users.insertOne(
      { name: "Rahul", createdAt: new Date() },
      { session }
    );

    // 3️⃣ Operation 2: Insert Account
    await accounts.insertOne(
      {
        userId: userResult.insertedId,
        balance: 1000
      },
      { session }
    );

    // 4️⃣ Commit transaction
    await session.commitTransaction();
    console.log("Transaction committed successfully");

  } catch (error) {
    // ❌ If any error → rollback
    await session.abortTransaction();
    console.log("Transaction aborted");

  } finally {
    // 5️⃣ End session
    session.endSession();
    await client.close();
  }
}

runTransaction();

```


</details>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## 26) ACID

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>


**ACID** is a set of properties that guarantee **reliable and consistent database transactions**.

👉 **ACID = Atomicity, Consistency, Isolation, Durability**

MongoDB supports **ACID transactions** (from v4.0+) using **replica sets**.

### 1️⃣ **Atomicity**

* A transaction is treated as **one single unit**
* Either **all operations succeed** or **all fail**

* If any operation inside a transaction fails, **entire transaction is rolled back**


### 2️⃣ **Consistency**

* Database moves from **one valid state to another**
* Data must follow **schema rules, constraints, and business logic**

### 📖 In MongoDB:

* Schema validation (`$jsonSchema`)
* Unique indexes
* Transactions ensure rules are not broken


### 3️⃣ **Isolation**

* Transactions execute **independently**
* One transaction cannot see **partial changes** of another

### 📖 In MongoDB:

* Uses **snapshot isolation**
* Reads inside a transaction see a **consistent snapshot**

### 4️⃣ **Durability**

* Once a transaction is committed, data is **permanently saved**
* Data survives **crashes or power failure**

### 📖 In MongoDB:

* Uses **replica sets**
* Writes are confirmed by **majority nodes**


### ⚠️ **Important Notes (Exam / Interview)**

* ACID transactions require **Replica Set**
* Standalone MongoDB ❌ does NOT support transactions
* MongoDB Atlas ✔ supports ACID by default
* Transactions can span **multiple collections**

---

### 📝 **One-Line Definitions (Memorize)**

* **Atomicity:** All operations succeed or fail together
* **Consistency:** Data remains valid after transaction
* **Isolation:** Transactions don’t interfere with each other
* **Durability:** Committed data is never lost



### ✅ **Key Takeaways**

* MongoDB is **NoSQL + ACID**
* ACID is achieved using **transactions**
* Best for **financial and critical operations**


</details>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">


## 27) Backup and Restore

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>

### `mongodump` Command

The `mongodump` command is used to create a backup of a MongoDB database. It extracts data from a running MongoDB instance and stores it in a BSON format.

### Syntax

```sh
mongodump [options]
```

### Common Options

| Option                              | Description                                                               |
| ----------------------------------- | ------------------------------------------------------------------------- |
| `--host <hostname>`                 | Specifies the MongoDB server (default: `localhost`).                      |
| `--port <port>`                     | Specifies the port to connect to MongoDB (default: `27017`).              |
| `--db <database>`                   | Dumps a specific database.                                                |
| `--collection <collection>`         | Dumps a specific collection within a database.                            |
| `--out <path>`                      | Specifies the output directory for the backup (default: `dump/`).         |
| `--gzip`                            | Compresses the output with gzip.                                          |
| `--archive=<filename>`              | Dumps the data into a single archive file instead of separate BSON files. |
| `--authenticationDatabase <dbname>` | Specifies the authentication database for login credentials.              |
| `--username <username>`             | Specifies the username for authentication.                                |
| `--password <password>`             | Specifies the password for authentication.                                |
| `--query <query>`                   | Dumps documents matching the query (in JSON format).                      |

### Examples

1. **Dump all databases**

```sh
mongodump --out /backup/mongo/
```

2. **Dump a specific database**

```sh
mongodump --db mydatabase --out /backup/mongo/
```

3. **Dump a specific collection**

```sh
mongodump --db mydatabase --collection users --out /backup/mongo/
```

4. **Dump with authentication**

```sh
mongodump --db mydatabase --username admin --password secret --authenticationDatabase admin --out /backup/mongo/
```

5. **Dump data in gzip format**

```sh
mongodump --db mydatabase --gzip --out /backup/mongo/
```

6. **Dump data to a BSON archive file**

```sh
mongodump --db mydatabase --archive=/backup/mongo/mongodb_backup.bson
```

7. **Dump data to a gzip archive file**

```sh
mongodump --db mydatabase --archive=/backup/mongo/mongodb_backup.gz --gzip
```

---

### `mongorestore` Command

The `mongorestore` command is used to restore data from a BSON backup created by `mongodump`.

### Syntax

```sh
mongorestore [options] <path>
```

### Common Options

| Option                              | Description                                                      |
| ----------------------------------- | ---------------------------------------------------------------- |
| `--host <hostname>`                 | Specifies the MongoDB server (default: `localhost`).             |
| `--port <port>`                     | Specifies the port to connect to MongoDB (default: `27017`).     |
| `--dir <path>`                      | Specifies the input directory for the backup (default: `dump/`). |
| `--db <database>`                   | Restores to a specific database.                                 |
| `--collection <collection>`         | Restores a specific collection.                                  |
| `--drop`                            | Drops existing collections before restoring.                     |
| `--gzip`                            | Restores from a gzip-compressed dump.                            |
| `--archive=<filename>`              | Restores from a single archive file.                             |
| `--authenticationDatabase <dbname>` | Specifies the authentication database for login credentials.     |
| `--username <username>`             | Specifies the username for authentication.                       |
| `--password <password>`             | Specifies the password for authentication.                       |


### Examples

1. **Restore all databases from a dump directory**

```sh
mongorestore --dir /backup/mongo/
```

2. **Restore a specific database**

```sh
mongorestore --db mydatabase /backup/mongo/mydatabase/
```

3. **Restore a specific collection**

```sh
mongorestore --db mydatabase --collection users /backup/mongo/mydatabase/users.bson
```

4. **Restore with authentication**

```sh
mongorestore --db mydatabase --username admin --password secret --authenticationDatabase admin /backup/mongo/mydatabase/
```

5. **Restore and drop existing collections before restoring**

```sh
mongorestore --db mydatabase --drop /backup/mongo/mydatabase/
```

6. **Restore from a BSON archive file**

```sh
mongorestore --archive=/backup/mongo/mongodb_backup.bson
```

7. **Restore from a gzip archive**

```sh
mongorestore --gzip --archive=/backup/mongo/mongodb_backup.gz
```

</details>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## 28) Import and Export

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>


### `mongoexport` Command

The `mongoexport` command is used to export data from a MongoDB database into a readable format such as JSON or CSV.

### Syntax
```sh
mongoexport [options]
```

### Common Options
| Option | Description |
|---------|-------------|
| `--host <hostname>` | Specifies the MongoDB server (default: `localhost`). |
| `--port <port>` | Specifies the port to connect to MongoDB (default: `27017`). |
| `--db <database>` | Exports data from a specific database. |
| `--collection <collection>` | Exports data from a specific collection. |
| `--out <filename>` | Specifies the output file name. |
| `--type <json or csv>` | Specifies the export format (JSON or CSV). Default is JSON. |
| `--fields <field1,field2>` | Specifies fields to include (only for CSV export). |
| `--query <query>` | Exports only documents matching the query (JSON format). |
| `--jsonArray` | Outputs JSON as an array instead of separate objects. |
| `--authenticationDatabase <dbname>` | Specifies the authentication database. |
| `--username <username>` | Specifies the username for authentication. |
| `--password <password>` | Specifies the password for authentication. |

### Examples

1. **Export a collection to a JSON file**
```sh
mongoexport --db mydatabase --collection users --out users.json
```

2. **Export a collection to a CSV file**
```sh
mongoexport --db mydatabase --collection users --type=csv --fields name,email,age --out users.csv
```

3. **Export data with a query filter**
```sh
mongoexport --db mydatabase --collection users --query '{"age": {"$gte": 25}}' --out users.json
```

4. **Export data with authentication**
```sh
mongoexport --db mydatabase --collection users --username admin --password secret --authenticationDatabase admin --out users.json
```

5. **Export JSON as an array**
```sh
mongoexport --db mydatabase --collection users --jsonArray --out users.json
```

---

### `mongoimport` Command

The `mongoimport` command is used to import data into a MongoDB database from JSON or CSV files.

### Syntax
```sh
mongoimport [options] <file>
```

### Common Options
| Option | Description |
|---------|-------------|
| `--host <hostname>` | Specifies the MongoDB server (default: `localhost`). |
| `--port <port>` | Specifies the port to connect to MongoDB (default: `27017`). |
| `--db <database>` | Specifies the database to import into. |
| `--collection <collection>` | Specifies the collection to import data into. |
| `--file <filename>` | Specifies the input file. |
| `--type <json or csv>` | Specifies the import format (JSON or CSV). Default is JSON. |
| `--fields <field1,field2>` | Specifies field order for CSV imports. |
| `--jsonArray` | Indicates that the input JSON is an array. |
| `--drop` | Drops the collection before importing new data. |
| `--authenticationDatabase <dbname>` | Specifies the authentication database. |
| `--username <username>` | Specifies the username for authentication. |
| `--password <password>` | Specifies the password for authentication. |

### Examples

1. **Import a JSON file into a collection**
```sh
mongoimport --db mydatabase --collection users --file users.json
```

2. **Import a CSV file into a collection**
```sh
mongoimport --db mydatabase --collection users --type=csv --headerline --file users.csv
```

3. **Import JSON data as an array**
```sh
mongoimport --db mydatabase --collection users --jsonArray --file users.json
```

4. **Import data with authentication**
```sh
mongoimport --db mydatabase --collection users --username admin --password secret --authenticationDatabase admin --file users.json
```

5. **Drop existing collection before importing**
```sh
mongoimport --db mydatabase --collection users --drop --file users.json
```

</details>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">


## 29) Authentication & Authorization

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>

### Authentication vs Authorization
- Authentication → Who you are (login)
- Authorization → What you can do (permissions)

### Default MongoDB Behavior
- Authentication is DISABLED by default
- Anyone with IP + port can access full DB


### Enabling Authentication
- Using flag:
  `mongod --auth`

- Using config file (mongod.cfg):
  `security:
    authorization: enabled`

### Admin User (First Step)
- Must be created BEFORE auth blocks access
- Created in admin database
- Uses root role

</br>

 **use admin**

```js
  db.createUser({
    user: "admin",
    pwd: "password",
    roles: [{ role: "root", db: "admin" }]
  })
```

### Login (Authenticate)
  `db.auth("admin", "password")`

### Creating App Users
- Create users with least privilege

</br>

 **use appDB**

```js
  db.createUser({
    user: "appUser",
    pwd: "pass",
    roles: [{ role: "readWrite", db: "appDB" }]
  })
```

### Read-Only User
- Can only read data

```js
  db.createUser({
    user: "readonly",
    pwd: "pass",
    roles: [{ role: "read", db: "appDB" }]
  })
```

### Common Built-in Roles
- `read` → read only
- `readWrite` → read + write
- `dbAdmin` → DB structure, no data access
- `userAdmin` → manage users
- `dbOwner` → full DB control
- `root` → full server control


### Connection String
- Same DB:
  `mongodb://user:pass@localhost:27017/appDB`

- Different auth DB:
  `mongodb://user:pass@localhost:27017/appDB?authSource=admin`

### Managing Users
- View users:
  `db.getUsers()`

- Update roles (REPLACES old roles):

```js
  db.updateUser("user", {
    roles: [{ role: "readWrite", db: "appDB" }]
  })
```

- Delete user:
  `db.dropUser("user")`

### Logout
  `db.logout()`

### Node.js Connection
- Use same auth connection string
- MongoClient handles authentication automatically

### Best Practices
- Always enable auth in production
- Use least privilege principle
- Never use root user in applications
- Separate admin & app users

### Interview Line
"Authentication verifies user identity, while authorization controls access using roles. MongoDB uses role-based access control (RBAC)."

</details>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">


## 30 Indexes

### 📝 What is Indexes ?

<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>
✔ Index
- Index = shortcut for fast data search
- Avoids scanning every document
- Similar to book index page

✔ Without Index
- MongoDB performs COLLECTION SCAN(`COLLSCAN`)
- Checks every document one by one
- Slow for large data

✔ With Index
- MongoDB searches in index first(`IXSCAN`)
- Directly jumps to required document
- Very fast query performance

✔ How Index Works
- Stores field value + pointer to document
- Data stored in sorted structure
- MongoDB uses B-Tree internally

✔ Default Index
- MongoDB auto-creates index on _id
- Unique and fast by default


✔ Trade-off
- Read operations become fast
- Write operations slightly slow (index maintenance)

✔ Interview Line
"MongoDB index improves query performance by avoiding full collection scans and enabling faster lookups."
</details>



### 📝 Common index method


<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>

**NOTE**
- `1` for ascending 
- `-1` for descending 

</br>

**✔ `createIndex()`**
- Creates an index on a field
- Improves query performance

Syntax:
```js
db.collection.createIndex({ field: 1 })   // Ascending
db.collection.createIndex({ field: -1 })  // Descending
```

Example:
`db.users.createIndex({ email: 1 })`

------------------------------------------------

**✔ `getIndexes()`**
- Shows all indexes of a collection
- Used to verify existing indexes

Example:
`db.users.getIndexes()`

------------------------------------------------

**✔ `dropIndex()`**
- Removes a specific index
- Use when index is no longer needed

Syntax:
`db.collection.dropIndex({ field: 1 })`

Example:
`db.users.dropIndex({ email: 1 })`

------------------------------------------------

**✔ `dropIndexes()`**
- Removes all indexes except `_id`
- Dangerous in production

Example:
`db.users.dropIndexes()`

------------------------------------------------

</details>


### 📝 Type of Indexes


<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>

**✔ Single Field Index**

- Index on one field
- Most common index
- Fast search on single field

Example:
```c++
db.users.createIndex({ email: 1 })
```

Query:

```c++
db.users.find({ email: "a@gmail.com" })
```
--------------------------------

**✔ Compound Index**

- Index on multiple fields
- Field order matters
- Best for filter + sort queries

Example:
```c++
db.orders.createIndex({ name: 1, age: -1 })
```

Query:

```c++
db.orders.find({ name: "Rakesh" }).sort({ age: -1 })
```
--------------------------------

**✔ Multikey Index**
- Used for array fields
- MongoDB auto-creates multikey index
- One index entry per array element

Document:
```c++
{ name: "Laptop", tags: ["electronics", "gaming"] }
```
Example:
```c++
db.products.createIndex({ tags: 1 })
```

Query:
```c++
db.products.find({ tags: "gaming" })
```
--------------------------------

**✔ Text Index**
- Used for text search
- Supports `$text` and `$search`
- Only ONE text index per collection

Example:
```c++
db.posts.createIndex({ title: "text", content: "text" })
```
Query:
```c++
db.posts.find({ $text: { $search: "mongodb" } })
```
--------------------------------

**✔ Unique Index**
- Prevents duplicate values
- Common for email, username
- Duplicate insert → error

Example:
```c++
db.users.createIndex({ email: 1 }, { unique: true })
```
Insert:
```c++
db.users.insertOne({ email: "a@gmail.com" }) ❌ (if already exists)
```
--------------------------------

**✔ Sparse Index**
- Index only documents where field exists
- Ignores missing fields
- Useful for optional fields

Example:
```c++
db.users.createIndex({ phone: 1 }, { sparse: true })
```
Query:
```c++
db.users.find({ phone: "9999999999" })
```
--------------------------------

**✔ TTL Index**
- Auto deletes documents after time
- Used for sessions, OTPs, logs

Example:
```c++
db.sessions.createIndex(
  { createdAt: 1 },
  { expireAfterSeconds: 3600 }
)
```
Meaning:
Document auto delete after 1 hour

--------------------------------

**✔ Hashed Index**
- Used mainly for sharding
- Ensures even data distribution
- Not for range queries

Example:
```c++
db.users.createIndex({ userId: "hashed" })
```
--------------------------------

**✔ Index Rule**
- Index improves read performance
- Too many indexes slow inserts & updates
- Always index based on query pattern

--------------------------------


</details>


### `explain()`


<details>
  <summary>👉🏼 READ IN DETAILS :</summary>

</br>

**✔ `explain()`**
- Used to analyze query performance
- Shows how MongoDB executes a query
- Helps detect slow queries

**✔ Syntax**
`db.collection.find(query).explain()`

**✔ Explain Modes**
1. `queryPlanner`
   - Shows chosen query plan
   - Which index MongoDB plans to use

2. `executionStats` (MOST IMPORTANT)
   - Actual execution details
   - Time taken and documents scanned

3. `allPlansExecution`
   - Shows all query plans MongoDB tried

**✔ Key Fields to Check (executionStats)**
- `nReturned` → documents returned
- `totalDocsExamined` → documents scanned
- `totalKeysExamined` → index entries scanned
- `executionTimeMillis` → time taken

**✔ COLLSCAN vs IXSCAN**
- COLLSCAN → full collection scan (slow ❌)
- IXSCAN → index scan (fast ✅)

</details>


