# 1️⃣ Types Of NoSql Databses:

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


<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

# 2️⃣ What is MongoDB


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



<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

# 3️⃣ JSON vs BSON


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



<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

# 4️⃣ MongoDB Architecture


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



<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

# 5️⃣ Creating Database and Collection 

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

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

# 6️⃣ Document Structure & Data Types

✔ Key = Field Name, Value = Field Value

✔ Supports nested objects & arrays

✔ Flexible schema → different documents can have different fields


✔ Common Data Types:
   - String → "Rahul"
   - Number → 22, 3.14
   - Boolean → true / false
   - Array → ["JS","React"]
   - Object → { city: "Delhi" }
   - Date → ISODate("2025-12-14T10:00:00Z")
   - ObjectId → unique _id
   - Null → null
   - Binary → BinData(...)


✔ `_id` Field:
   - Automatically created if not provided
   - Unique identifier for each document

✔ Interview One-Liner:

   "MongoDB documents are JSON-like objects stored in collections with flexible data types including String, Number, Boolean, Array, Object, Date, and ObjectId."


<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

# 7️⃣ _id Field (Auto ObjectId Explained)

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




### Read

- fetching specific key-value from the document 
    ```db.<collection_name>.find({}, {<specific_key>})```
    - **example** fetching only cars from India country: ```db.cars.find({}, {country:"India"})
    