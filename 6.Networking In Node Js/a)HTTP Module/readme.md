# http module
- server make two **GET** request by default when it start:
    - 1. GET / (verify that request is http protocol or not through Headers)
    - 2. GET /favicon


# Status Code Categories
| Category | Range   | Meaning         |
| -------- | ------- | --------------- |
| **1xx**  | 100–199 | Information   |
| **2xx**  | 200–299 | ✔ Success       |
| **3xx**  | 300–399 | ↪ Redirection   |
| **4xx**  | 400–499 | ❌ Client Error  |
| **5xx**  | 500–599 | 💥 Server Error |
