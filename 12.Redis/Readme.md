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




## 3) STRING

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

</br>

## 1️⃣ Basic Commands
- `SET key value` → set value
- `GET key` → get value
- `DEL key` → delete key
- `EXISTS key` → check key present
- `SETNX key value → if key not exists then added

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
- MSET k1 v1 k2 v2
- MGET k1 k2

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
- select <db_number>
- Example: select 1
- dbsize → count keys in current DB

---

## 3️⃣ Dangerous Commands ⚠
- FLUSHDB → delete current DB keys
- FLUSHALL → delete all DB keys


## Namespacing

- Namespacing = structured keys using `:` (colon) for grouping.
- Format: `app:entity:id`  
- Example: `app:user:1`, `app:cart:123`, `app:otp:9876`


## Search / Pattern
- `SCAN 0 MATCH ecom:user:*`  
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




## 6)  

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