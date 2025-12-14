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


<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

# 8️⃣ CREATE

- CREATE Operation = Insert new document(s) into a collection
- Collection auto-created on first insert if not exist
- Commands: ```insertOne()``` → single document, ```insertMany()``` → multiple documents

</br>

✔ **```insertOne()```**:
   - Inserts a single document

   - Syntax: 
   
   ```c++
   db.collection.insertOne({ key: value, ... })
   ```
   - `_id` auto-generated unless custom provided
   
   - Supports nested objects & arrays
   
   - **Returns**: ```{ acknowledged: true, insertedId: ObjectId(...) }```
   
   - Errors: duplicate `_id`, connection/server issues

</br>

✔ **```insertMany()```**:
   - Inserts multiple documents at once
   
   - Syntax: 
   ```c++
   db.collection.insertMany([ {...}, {...}, ... ], { ordered: true/false })
   ```
   
   - Supports nested objects & arrays
   
   - **Returns**: `{ acknowledged: true, insertedIds: [ObjectId(...), ...] }`
   
   - Ordered (default): stops at first error
   
   - Unordered (ordered: false): continues inserting remaining documents
   
   - Errors: duplicate `_id` in ordered mode stops insert; unordered skips errors
   
   - Interview Line: "insertMany() inserts multiple documents at once, supports nested objects, arrays, and ordered/unordered options."

</br>

✔ Best Practices:
   1. Prefer auto ObjectId unless custom needed
   2. Validate data before insert
   3. Use ordered: false for bulk inserts to skip errors
   4. Use meaningful field names
   5. Keep document size <16MB

✔ Common Errors:
   - Duplicate `_id` → **E11000**
   - Invalid data type if validation exists
   - Connection / server errors

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

# 9️⃣ READ

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
   
   - Limit / Skip / Sort:
       - `.limit(2)` → first 2 documents
       - `.skip(2)` → skip first 2 documents
       - `.sort({ age: -1 })` → descending
            - `-1` => Decending (higher to lower)
            - `+1` => Ascending(lower to higher)
   
   - Interview Line: "find() fetches multiple documents using queries, supports projection, limit, skip, sort, and returns a cursor."

---

## 📍 Query Operators

✔ **Comparison Operators:**
   - `$gt` → greater than
   - `$gte` → greater than or equal
   - `$lt` → less than
   - `$lte` → less than or equal
   - `$eq` → equal (optional)
   - `$ne` → not equal
   - Example: `{ age: { $gt: 22 } }`

</br>

✔ **Logical Operators:**
   - $or → either condition true
   - $and → both conditions true
   - Example: `{ $or: [ { age: 22 }, { name: "Riya" } ] }`

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

---

## 📍 Projections

✔ **Projection** = **Select which fields to show in query result**

✔ MongoDB version of SQL SELECT

✔ **Syntax:**
```c++
db.collection.find({ query }, { field: 1, field: 0, _id: 0 })
```

</br>

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

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">


# UPDATE

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


## 📍 Upsert

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

## 📍replaceOne()

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

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">


### Read

- fetching specific key-value from the document 
    ```db.<collection_name>.find({}, {<specific_key>})```
    - **example** fetching only cars from India country: ```db.cars.find({}, {country:"India"})
    
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">