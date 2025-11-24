| Stream                     | Number | Meaning                                   |
| -------------------------- | ------ | ----------------------------------------- |
| `STDIN` (Standard Input)   | `0`    | Input (jo user type karta hai)            |
| `STDOUT` (Standard Output) | `1`    | Output (terminal me display hota hai)     |
| `STDERR` (Standard Error)  | `2`    | Errors ko alag stream me handle karta hai |




Redirection:
```
>    overwrite output to file
>>   append output to file
<    read file as input
2>   redirect error
&>   redirect output + error
```
Pipe (|):
→ Command ka output next command ka input.

Examples:
```
echo "hello world" | tr a-z A-Z       // HELLO WORLD 
```
```
echo "Another line" >> hello.txt
```


---

## 🔥 What Are Data Streams?

Terminal me 3 main data streams hoti hain:

| Stream                     | Number | Meaning                                   |
| -------------------------- | ------ | ----------------------------------------- |
| `STDIN` (Standard Input)   | `0`    | Input (jo user type karta hai)            |
| `STDOUT` (Standard Output) | `1`    | Output (terminal me display hota hai)     |
| `STDERR` (Standard Error)  | `2`    | Errors ko alag stream me handle karta hai |

Example:

```bash
echo "Hello"
```

Ye `STDOUT` stream me print hota hai.

Error example:

```bash
ls somethingThatDoesNotExist
```

Ye `STDERR` stream me jayega.

---

## 🚀 Redirection Operators (<, >, >>)

Redirection ka matlab: Output terminal pe na jaake kisi file me store ho.

### 1️⃣ Redirect STDOUT to a file → `>`

```bash
echo "Hello world" > hello.txt
```

⚠ Existing file pe overwrite hoga.

---

### 2️⃣ Append (add without deleting) → `>>`

```bash
echo "Another line" >> hello.txt
```

---

### 3️⃣ Read File as Input (STDIN) → `<`

```bash
wc -l < hello.txt
```

📌 Meaning: `hello.txt` ka content command ko input mai diya.

---

### 4️⃣ Redirect STDERR → `2>`

```bash
ls folderDoesNotExist 2> error.log
```

---

### 5️⃣ Redirect BOTH (STDOUT + STDERR) → `&>`

```bash
command &> output.log
```

---
