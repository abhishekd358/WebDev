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

