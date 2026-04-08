## 1) What is Redis?

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>

- Redis = In-memory key-value database
- Stores data in RAM
- Full form: REmote DIctionary Server
- Supports persistence (RDB, AOF)
- Best for temporary & frequently accessed data

## Why Fast?
- RAM based (no disk I/O)
- Single-threaded event loop
- O(1) key lookup (complexity)
- Written in C
- No thread locking / no context switching

## Redis vs MongoDB
- MongoDB → Disk-based, durable
- Redis → RAM-based, super fast
- Redis does NOT replace MongoDB
- Used to improve performance

## 4️⃣ Persistence
- RDB → Snapshot at intervals
- AOF → Logs every write
- Default risk: data loss if no persistence
- Mostly used for temporary data

## Core Use Cases (MERN)
- Caching
- Session store
- Rate limiting
- OTP with TTL
- Pub/Sub (real-time chat)

## Logical Databases
- 16 DBs by default
- `select <db_number>`
- `dbsize`
- In production → usually single DB + key namespacing

## 🎤 Interview Line
>Redis is single-threaded to avoid locking and context switching overhead and maximize in-memory performance.


</details>


<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">



## 2) Data Types

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>


### 1) Strings

* Simplest type (text or binary data)
* Max size: 512MB
* Used for: counters, cache, session data
* Commands:
  `SET`, `GET`, `MSET`, `MGET`, `SETEX`, `GETSET`,
  `INCR`, `INCRBY`, `DECR`, `DECRBY`,
  `APPEND`, `STRLEN`

---

### 2) Lists

* Ordered collection of strings
* Can push/pop from both ends
* Used for: queues, task lists
* Commands:
  `LPUSH`, `RPUSH`, `LPOP`, `RPOP`,
  `BLPOP`, `BRPOP`,
  `LRANGE`, `LLEN`, `LINDEX`, `LSET`, `LTRIM`

---

### 3) Sets

* Unordered collection of unique strings
* No duplicates
* Used for: tags, unique visitors
* Commands:
  `SADD`, `SREM`, `SMEMBERS`, `SISMEMBER`,
  `SCARD`, `SPOP`,
  `SUNION`, `SINTER`, `SDIFF`

---

### 4) Sorted Sets (ZSets)

* Unique strings with a score (sorted by score)
* Used for: leaderboards, rankings
* Commands:
  `ZADD`, `ZREM`, `ZRANGE`, `ZREVRANGE`,
  `ZRANK`, `ZREVRANK`,
  `ZSCORE`, `ZINCRBY`, `ZCARD`,
  `ZRANGEBYSCORE`

---

### 5) Hashes

* Key-value pairs inside a key
* Used for: storing objects (like user profiles)
* Commands:
  `HSET`, `HGET`, `HMSET`, `HMGET`,
  `HGETALL`, `HDEL`, `HEXISTS`,
  `HINCRBY`, `HLEN`, `HKEYS`, `HVALS`

---

### 6) Bitmaps

* Bit-level operations on strings
* Used for: tracking flags (online/offline)
* Commands:
  `SETBIT`, `GETBIT`, `BITCOUNT`, `BITOP`, `BITPOS`

---

### 7) HyperLogLog

* Probabilistic unique count
* Uses very little memory
* Used for: counting unique visitors
* Commands:
  `PFADD`, `PFCOUNT`, `PFMERGE`

---

### 8) Streams

* Log-like data structure
* Used for: messaging, event sourcing
* Commands:
  `XADD`, `XREAD`, `XREADGROUP`,
  `XGROUP`, `XACK`, `XDEL`,
  `XRANGE`, `XREVRANGE`, `XLEN`


</details>


<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">




## 3) BASIC CMD , STRING CMD, TTL CMD

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>

## 1️⃣ Basic Commands
- `SET key value` → set value
- `GET key` → get value
- `DEL key` → delete key
- `EXISTS key` → check key present
- `SETNX key value` → if key not exists then added

---

## 2️⃣ Expiry / TTL (Very Important 🔥)
- `SET key value EX 60` → set with expiry
- `EXPIRE key 30` → add expiry
- `TTL key` → remaining time
- `PERSIST key` → remove expiry

👉 Used in OTP, sessions, tokens

---

## 3️⃣ Counters (Rate Limiting Core)
- `INCR key` → +1
- `DECR key` → -1
- `INCRBY key n`
- `DECRBY key n`

---

## 4️⃣ String Operations
- `APPEND key value` → Value ke end me add
- `STRLEN key` → Length check
- `GETRANGE key start end` → Substring
- `SETRANGE key offset value` → Replace part of string

---

## 5️⃣ Multiple Keys set and get
- `MSET k1 v1 k2 v2`
- `MGET k1 k2`

</details>


<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">




## 4) Redis Database Management & Namespacing

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>

## 1️⃣ Multiple Databases
- 16 logical DBs (0–15)
- Default DB = 0
- Same Redis instance
- Separate key spaces only
- `redis.conf` file create and change as you want number* of db.


---

## 2️⃣ Switch Database
- `select <db_number>`
- Example: select 1

## DB SIZE CHECK
- `dbsize` → count keys in current DB

---

## 3️⃣ Dangerous Commands ⚠
- `FLUSHDB` → delete current DB keys
- `FLUSHALL` → delete all DB keys


## Namespacing

- Namespacing = structured keys using `:` (colon) for grouping.
- Format: `app:entity:id`  
- Example: `app:user:1`, `app:cart:123`, `app:otp:9876`


## Search / Pattern
- `SCAN <db_no> MATCH <key>` → Example: `SCAN 0 MATCH ecom:user:*`  
- `KEYS ecom:product:*` *(avoid KEYS in prod)*


</details>


<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">



## 5) Connecting Redis in Node.js

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>

- 1️⃣ redis (Official – Recommended ✅)
- 2️⃣ ioredis

- install `npm install redis`

### implemenation
```js
import { createClient } from "redis";

const redisClient = createClient({
  url: "redis://localhost:6379",
});

// =========== ALL EVENT
redisClient.on("connect", () =>
  console.log("Redis connected successfully on 6379")
);

redisClient.on("end", () =>
  console.log("Redis connection closed")
);

redisClient.on("error", (err) =>
  console.error("Redis error:", err)
);

const employee = {
  dept: "electrical",
  salary: 200,
  "duty-hrs": 12,
};
// =========== run when connect event happen
async function main() {
  await redisClient.connect();

  await redisClient.set("city", "abhi");
  // we make stringfy the js Object
  await redisClient.set("employee", JSON.stringify(employee));

  const data = await redisClient.get("employee");
  console.log(JSON.parse(data));

  setTimeout(async () => {
    console.log("Disconnecting the redis.....");
    await redisClient.quit();
  }, 10000);
}

main();
```


</details>


<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">




## 6) Creating getJSON() and setJSON() Utility Methods

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>

- setJSON & getJSON are utility function
- help to not repeat and parse and stringfy again again

### Implementation

- `redisService.mjs` (JSON helper functions)

```js
import { createClient } from "redis";

const redisClient = createClient({
  url: "redis://localhost:6379"
});

redisClient.on("connect", () =>
  console.log("Redis Running.......")
);

redisClient.on("ready", () =>
  console.log("❤ Redis Ready ❤")
);

redisClient.on("error", (err) =>
  console.error("Redis Error:", err)
);


// ============================UTITLITY METHODS
export const setJSON = async (key, value) => {
  return await redisClient.set(key, JSON.stringify(value));
};

export const getJSON = async (key) => {
  const data = await redisClient.get(key);
  return data ? JSON.parse(data) : null;
};

// connect once
await redisClient.connect();

export default redisClient;

```

### use of methods
```js
import { SETJSON, GETJSON } from "./redisService.mjs";

await SETJSON("doctor", {
  qualification: "MBBS",
  experience: 10,
  fee: 20
});

console.log(await GETJSON("doctor"));
```


</details>


<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">



## 7)  RedisJSON

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>

- Redis module to store & query JSON natively
- Works with structured data (not raw string)
- Uses JSONPath for field access

---

### Set JSON
- `JSON.SET key $ '{json}'`
- `$` = root

### Get JSON
- `JSON.GET key` → full document
- `JSON.GET key $.field` → specific field

### Delete Field
- `JSON.DEL key $.field`

### Increment Number
- `JSON.NUMINCRBY key $.field value`

### Array Ops
- `JSON.ARRAPPEND key $.arr value`
- `JSON.ARRPOP key $.arr`
- `JSON.ARRLEN key $.arr`

---

### JSONPath Basics
- `$` → root
- `$.name` → field
- `$.obj.field` → nested field
- `$[0]` → first array element
- `$..name` → recursive search



</details>


<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">



## 8) Redis VS MongoDB Speed

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>

```
Redis:

✔ Data RAM me
✔ No disk I/O
✔ O(1) lookup
✔ Simple key access

MongoDB:

✔ Disk read
✔ Index lookup
✔ Query parsing
✔ More overhead

```

</details>


<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">




## 9) Redis for Caching

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>

### FLOW
```
1️⃣ Check Redis
2️⃣ If found → return
3️⃣ If not found → Fetch from Mongo
4️⃣ Store in Redis
5️⃣ Return response
```

### Implementation Code

```js
app.get("/user/:id", async (req, res) => {
  const userId = req.params.id;
  const key = `app:user:${userId}`;

  try {
    // 1️⃣ Check Cache (Redis)
    const cachedUser = await redisClient.get(key);

    if (cachedUser) {
      return res.json({
        source: "redis",
        data: JSON.parse(cachedUser)
      });
    }

    // 2️⃣ Fetch from MongoDB
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 3️⃣ Store in Redis (5 minutes TTL = 300 seconds)
    await redisClient.set(
      key,
      JSON.stringify(user),
      { EX: 300 }
    );

    // 4️⃣ Return Response
    return res.json({
      source: "mongo",
      data: user
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
});
```


</details>


<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">





## 10) Redis For Session Store

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>

### Basic Flow
```
Login →
Generate sessionId →
Store in Redis with TTL →
Send sessionId to browser (cookie) →
Protected routes check Redis session
```

### Implementation code

```js
import express from "express";
import { createClient } from "redis";
import cookieParser from "cookie-parser";
import crypto from "crypto";

const app = express();
app.use(express.json());
app.use(cookieParser());

/* ---------------- Redis Setup ---------------- */

const redisClient = createClient();

redisClient.on("connect", () => {
  console.log("✅ Redis Connected");
});

redisClient.on("error", (err) => {
  console.error("Redis Error:", err);
});

await redisClient.connect();

/* ---------------- Login Route ---------------- */

app.post("/login", async (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ message: "Username required" });
  }

  // 🔥 Secure session ID using crypto
  const sessionId = crypto.randomUUID();

  const sessionData = {
    username,
    loginTime: Date.now(),
  };

  // Store session in Redis with TTL (30 minutes)
  await redisClient.set(
    `session:${sessionId}`,
    JSON.stringify(sessionData),
    { EX: 1800 } // 1800 sec = 30 minutes
  );

  // Send session ID in cookie
  res.cookie("sessionId", sessionId, {
    httpOnly: true,
    sameSite: "strict",
  });

  res.json({ message: "Login successful" });
});

/* ---------------- Protected Route ---------------- */

app.get("/dashboard", async (req, res) => {
  const sessionId = req.cookies.sessionId;

  if (!sessionId) {
    return res.status(401).json({ message: "Not logged in" });
  }

  const session = await redisClient.get(`session:${sessionId}`);

  if (!session) {
    return res.status(401).json({ message: "Session expired or invalid" });
  }

  const user = JSON.parse(session);

  res.json({
    message: "Welcome to dashboard",
    user,
  });
});

/* ---------------- Logout Route ---------------- */

app.post("/logout", async (req, res) => {
  const sessionId = req.cookies.sessionId;

  if (sessionId) {
    await redisClient.del(`session:${sessionId}`);
  }

  res.clearCookie("sessionId");

  res.json({ message: "Logged out successfully" });
});

/* ---------------- Start Server ---------------- */

app.listen(4000, () => {
  console.log("🚀 Server running on port 4000");
});
```

</details>


<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">



## 11) Search and Indexing

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

- Search and Indexing work with `HASH` and `JSON`

### What is Redis Search

- Redis Search is a module that enables:

- ✔ Full-text search
- ✔ Filtering
- ✔ Indexing
- ✔ Sorting
- ✔ Fuzzy search


### What is an Index?

- index is an optimized data structure created to make searches fast. 

- syntax

```bash
FT.CREATE <idx_name> 
ON <JSON / HASH>
PREFIX <no_of_namespace> <namespaces> 
SCHEMA 
$.<on_which_field_index> AS <alias_name> <TYPE> 
```

- Example
```bash
FT.CREATE productIdx 
ON JSON 
PREFIX 1 product: 
SCHEMA 
$.name AS name TEXT 
$.category AS category TAG 
$.price AS price NUMERIC
```


### Search Query Examples

#### Text Search
```FT.SEARCH productIdx "iphone"```

#### Filter by Category
```FT.SEARCH productIdx "@category:{mobile}"```

#### Numeric Price Range
```FT.SEARCH productIdx "@price:[0 50000]"```



</br>


</details>





### Implement Searching and Index in Node.js

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>

### ✅ Create Index

```js
await client.ft.create(
  "productIdx",
  {
    name: {
      type: "TEXT",
      SORTABLE: true
    },
    category: {
      type: "TAG"
    },
    price: {
      type: "NUMERIC"
    }
  },
  {
    ON: "JSON",
    PREFIX: "product:"
  }
);
```

### ✅ Insert Data

```js
await client.json.set("product:1", "$", {
  name: "iPhone 14",
  category: "mobile",
  price: 80000
});

await client.json.set("product:2", "$", {
  name: "Samsung M34",
  category: "mobile",
  price: 20000
})
```

### ✅ Search Query
```js
// Text Search
const result = await client.ft.search("productIdx", "iphone");
```

</details>



### All Methods of Search Query

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>

### 1️⃣ Basic Text Search

```bash
FT.SEARCH idx:products "iphone"
```


### 2️⃣ Exact Match (TAG Field)
- ✔ Used for filtering
- ✔ Case-sensitive (by default)

```bash
FT.SEARCH idx:products "@category:{mobile}"
```


### 3️⃣ Numeric Range Query `[min max]`

```bash
FT.SEARCH idx:products "@price:[10000 50000]"
```

### 4️⃣ AND Query `q1 q2`

```bash
FT.SEARCH idx:products "iphone samsung"
```


### 5️⃣ OR Query `q1 | q2`

```bash
FT.SEARCH idx:products "iphone | samsung"
```


### 6️⃣ NOT Query `-query`

- ✔ Exclude keyword

```bash
FT.SEARCH idx:products "-iphone"
```


### 8️⃣ Prefix Search (Wildcard) `word*`

- ✔ Autocomplete-like behavior

```bash
FT.SEARCH idx:products "iph*"
```


### 9️⃣ Fuzzy Search (Spelling Mistakes) `%word%`

- ✔ Handles typos 

```bash
FT.SEARCH idx:products "%iphon%"
```


### 1️⃣1️⃣ Sorting `SORTBY`

- ✔ Sort by numeric/text field

```bash
FT.SEARCH idx:products "*" SORTBY price ASC
```



###  1️⃣2️⃣ Pagination `LIMIT`

- ✔ Offset + count
- (skip first 10, get next 20)


```bash
FT.SEARCH idx:products "*" LIMIT 10 20
```

### 1️⃣3️⃣ Return Specific Fields `RETURN`

- ✔ Optimize response size

```bash
FT.SEARCH idx:products "*" RETURN 2 name price
```



### 1️⃣5️⃣ Aggregation `AGGREGATE`

- ✔ Count products per category

```bash
FT.AGGREGATE idx:products "*" GROUPBY 1 @category REDUCE COUNT 0
```



### 1️⃣6️⃣ Phrase Search `\ "word" \`

- ✔ Exact phrase match

```bash
FT.SEARCH idx:products "\"iphone 14\""
```



</details>



<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">



## 12) SCAN and KEYS 

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>


### Problem – KEYS Command

```bash
KEYS app:user:*
```



### ❌ What’s the Problem?

* It scans the **entire database**
* It is a **blocking operation**
* **Synchronous call**

In large datasets:

👉 Server freezes
👉 APIs slow down
👉 Production crashes 💣


---


### 🚀 2️⃣ Solution – SCAN Command

- `SCAN` = Non-blocking iteration

Meaning:

✔ Returns data in chunks
✔ Does NOT block the server
✔ Safe for production


```bash
SCAN cursor
```

### Cursor Concept

* SCAN returns a **cursor**
* Until cursor = `"0"` → keep iterating
- When cursor becomes `0` → iteration complete

- Iteration Example
```bash
SCAN 0
SCAN 23
SCAN 56
.
.
.
SCAN 0 -> STOP Scanning
```


### SCAN with `MATCH`

```bash
SCAN 0 MATCH app:user:*
```

👉 Filters keys using a pattern

### SCAN with `COUNT`

```bash
SCAN 0 COUNT 10
```

👉 Returns approximately 10 keys (not guaranteed)


### 💻 Node.js Implementation (Production)

```js
  // import createClient
  // create clientwith redis server
  // connect
  
  let cursor = "0";
  let keys = [];

  do {
    const result = await client.scan(cursor, {
      MATCH: pattern,
      COUNT: 10
    });

    cursor = result.cursor;
    keys.push(...result.keys);

  } while (cursor !== "0");

```

</br>


</details>


<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">



## 13) Sets 

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

- A collection of unique values (no duplicates allowed and unordered)

### Example:

```text
["user1", "user2", "user3"]
```


#### SADD (Add Value)

```bash
SADD users user1
```


####  SMEMBERS (Get All Members)

```bash
SMEMBERS users
```

#### SISMEMBER (Check if Exists)

```bash
SISMEMBER users user1
```


#### SREM (Remove Value)

```bash
SREM users user1
```



#### SCARD (Count Elements)

```bash
SCARD users
```


#### SINTER (Intersection)

```bash
SINTER set1 set2
```

#### SUNION (Union)

```bash
SUNION set1 set2
```

#### SDIFF (Difference)

```bash
SDIFF set1 set2
```


#### Interview Question

**Q: Why are Redis Sets used for a followers system?**

**Answer:**
Because Sets automatically enforce uniqueness, allow fast membership checks, and support efficient operations like intersection for finding mutual connections.


</details>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## 14) HASH

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

- Redis hash are map/Dictionary
- store field-value pairs
- no nested allowed .(Only stringify allowed but avoid)


#### HSET (set field)
```bash
HSET user:1 name Yabi age 23 city Pandora
```


#### HGET (get field one)
```bash
HGET user:1 name
```


#### HGETALL (get all field)
```bash
HGETALL user:1
```

#### HDEL (delete field)
```bash
HDEL user:1 age
```

#### HKEYS (get all keys)

```bash
HKEYS user:1
```

#### HVALS (get all values)

```bash
HVALS user:1
```

#### HEXISTS (exists field)
```bash
HEXISTS user:1 name
```


#### INTERVIEW

- Q: Why use Redis Hash instead of storing JSON as a string?

```txt
Because Hash allows field-level updates and retrieval without rewriting the entire object, which improves performance and efficiency.
```

</details>


<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## 15) Pub/Sub 

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>


#### Redis Pub/Sub – Key Points

* Pub/Sub = real-time messaging system
* Publisher → sends message
* Subscriber → listens to channel
* Messages are **instant but not stored**

### (Subscriber)

```bash
SUBSCRIBE chat
```

### (Publisher)

```bash
PUBLISH chat "Hello World"
```


### MERN Use Case – Chat App

#### Send Message

```js
await publisher.publish("chat:room1", JSON.stringify({
  user: "Abhi",
  message: "Hello"
}));
```


#### Receive Message

```js
subscriber.subscribe("chat:room1", (msg) => {
  const data = JSON.parse(msg);
  console.log(data);
});
```



#### Real-World Architecture

```text
User → WebSocket → Redis Pub/Sub → Other Users
```


#### Interview Question

**Q: What is the main limitation of Redis Pub/Sub?**

**Answer:**
Messages are not stored, so if a subscriber is offline, it will miss the message.



</details>


<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">















