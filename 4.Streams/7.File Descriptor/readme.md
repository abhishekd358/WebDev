

# File Descriptor (FD):
- A number assigned by OS to open files/sockets/devices.

## Default FD:
- 0 → STDIN
- 1 → STDOUT
- 2 → STDERR

## More files start from FD = 3.


| Type                                | Syntax Example            | Blocking?                          | When to Use                                        |
| ----------------------------------- | ------------------------- | ---------------------------------- | -------------------------------------------------- |
| **Sync (xxxSync)**                  | `fs.writeFileSync()`      | ⛔ Yes (Blocks Event Loop)          | Small scripts, config writing, one-time operations |
| **Callback Async (xxx)**            | `fs.writeFile()`          | 🔄 No (Non-Blocking)               | Older Node style, backward compatibility           |
| **Promise Async (fs.promises.xxx)** | `fs.promises.writeFile()` | 🔄 No (Non-Blocking) ✔ Recommended | Modern applications, backend servers               |



## Node FS APIs come in:
- Sync (blocking) (Low Level)
- Async callbacks  (High Level)
- Async promises  High-level (Modern)

- 1) Sync (xxxSync) → fs.writeFileSync() → blocking → Small scripts, config writing, one-time operations
- 2) Callback Async (xxx) → fs.writeFile() → non-blocking  → Older Node style, backward compatibility
- 3) Promise Async (fs.promises.xxx) → fs.promises.writeFile() → non-blocking → Modern applications, backend servers

## Node.js Low-Level File Operations:

fs.openSync(path, mode)
fs.readSync(fd, buffer, offset, length, position)
fs.writeSync(fd, data)
fs.closeSync(fd)

## Common Modes:
-   + => add extra mode(reading/writing)
- 'r'   → read only
- 'r+' → read/write
- 'w'  → write (overwrite)
- 'w+' → read/write overwrite
- 'a'  → append
- 'a+' → read + append
- 'x'  → fail if exists (safe mode)



- fs.open() → FD milta hai

- fs.read() → specified bytes read

- fs.close() → FD release