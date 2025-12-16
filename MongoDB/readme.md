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
   - `Double` → 22.5, 3.14
   - `Int32` → 22

</br>

**⚠️ Unregular Use (Less Common / Special):**

* `Int64 (Long)` → NumberLong(9000000000)
* `Decimal128` → NumberDecimal("99.99")
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
   
   - **Limit / Skip / Sort / Count:**
       - `.limit(2)` → first 2 documents
       - `.skip(2)` → skip first 2 documents
       - `.sort({ age: -1 })` → descending
            - `-1` => Decending (higher to lower)
            - `+1` => Ascending(lower to higher)
   
   - Interview Line: "find() fetches multiple documents using queries, supports projection, limit, skip, sort, and returns a cursor."

---

## 📍 Cursor

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

---

## 📍 Projections

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

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">


# 1️⃣0️⃣ UPDATE

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

---
## 📍 findOneAndUpdate()

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
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

# 1️⃣1️⃣ DELETE

✔ DELETE = Remove documents from a collection

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

---

## 📍findOneAndDelete()


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

--- 

## 📍 drop() vs deleteMany()

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

---

## 📍 Soft Delete

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


<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">







<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

### Read

- fetching specific key-value from the document 
    ```db.<collection_name>.find({}, {<specific_key>})```
    - **example** fetching only cars from India country: ```db.cars.find({}, {country:"India"})




db.cars.find({engine:{$gt:1400}})


db.car.find({engine:{$and: [{$gt:1400}, {$lt:1498}]}})


$type
$size
$all



Cursor :
count
sort
limit
skip


# agggreagation

db.collecgtionName.aggregate(
   [
      {stage: 1},
      {stage: 2},
      {stage: 3},
      
   ]
)

Grouping
sortbycount
unwind



# variables
1) system

   -```$$<system_variable>```
   - example: $$NOW

2)user
   - Object.keys(this)


# Data modeling
document nesting level <100
size of document must be <16MB

- embedded Document
- reference Document
what is $lookup -> to left join the two collections


# schema validation
- applying validation or resctriction so user can not enter any useless data .

- constraint =

# index

- is a data structure
- uses binary tree




# Transactions

# Sharding

# Replications





.explain("executionStats")




-------------------- MONGODB UNIVERSITY


# DOCUMENT MODELS


# connection string 

2 type of connection string :

1) +SRV (default) : 
mognodb:[+srv]://[username:password@]host1:[port1][....hostN:[portN]]/[defaultAuthDB][?options]

@localhost:27017
2)


#  chainging port using --port <port_number>
# m0, m2, m5 clusters : maximum of 500 open connection


# load() method
# external editor : edit() 
         config.get()
         config.set('editor', 'visual studio')






```
onnecting to a MongoDB Database Using the MongoDB Shell
In this unit, you learned how to:

Define a connection string and how it is used to connect to a MongoDB cluster
Locate the connection string for an Atlas cluster
Identify the basic components of a standard connection string
Install the MongoDB Shell, or mongosh
Connect to a local MongoDB instance using mongosh
Connect to an Atlas cluster using mongosh
Troubleshoot MongoDB Atlas connection errors
Retrieve and insert a document using mongosh
Write and use a JavaScript function inside a mongosh session
Use the db.getSiblingDb() method to change databases within a script
Use the load() method to load and run a JavaScript file in mongosh
Use an external editor within mongosh
```