# 🚀 **Middleware in Express?**

➡️ **Middleware = Request processing function**

### It receives 3 things:

1. **req** → request object
2. **res** → response object
3. **next** → a function to call the next middleware

- If you **don’t call `next()`**, the request stops there permanently.

This middleware runs **for every request**, no matter the route.


---

# 🔗 **Types of Middleware in Express**

## **1️⃣ Global Middleware (app.use)**

Runs for every request.

```js
app.use((req, res, next) => {
  console.log("Global middleware");
  next();
});
```

---

## **2️⃣ Route-Specific Middleware**

Runs only for a specific route.

```js
app.get('/user', (req, res, next) => {
  console.log("User route middleware");
  next();
}, (req, res) => {
  res.send("User data");
});
```

---

## **3️⃣ Built-in Middleware**

Provided by Express:

| Middleware           | Used For           |
| -------------------- | ------------------ |
| express.json()       | Parse JSON body    |
| express.urlencoded() | Parse form data    |
| express.static()     | Serve static files |

---

## **4️⃣ Third-Party Middleware**

Installed using npm:

* `cors` → enable CORS
* `helmet` → security
* `morgan` → logging
* `multer` → file upload
* `cookie-parser` → cookies

Example:

```js
const morgan = require("morgan");
app.use(morgan("dev"));
```

---

## **5️⃣ Error-Handling Middleware**

Special middleware with **4 parameters**:

```js
app.use((err, req, res, next) => {
    console.log("Error:", err);
    res.status(500).send("Something broke!");
});
```

Express only treats it as an error middleware if it has **four arguments**.

---

# 📝 **NOTES  (Important Revision Points)**

* Middleware = function with (req, res, next).
* Used to process requests before they reach route handlers.
* Must call `next()` to continue the pipeline.
* Types of middleware:

  * Global middleware (app.use)
  * Route-specific middleware
  * Built-in middleware (json, static, urlencoded)
  * Third-party middleware (cors, multer, morgan)
  * Error-handling middleware (has 4 args)
* Express runs middleware in the order they are defined.
* Middleware can:

  * Modify req/res
  * Stop the request
  * Validate data
  * Authenticate user
  * Perform logging
  * Handle errors

### 💥 IMP : In Express:

```js
app.use('/admin', middleware)
```

This middleware will run **for any request whose URL *begins with* `/admin`**, *before* routing even happens.

Examples of URLs that *will* trigger it:

* `/admin`
* `/admin/`
* `/admin/users`
* `/admin/settings/password`

Examples that *will NOT* trigger it:

* `/administrator`
* `/adm`
* `/user/admin` 

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"> 





# 📝 Static File in Express

**Topic: Serving Static Files in Express**

* Static files = files served "as-is" (HTML, CSS, JS, images, etc.).
* Express provides a built-in middleware → `express.static()`.
* Syntax:

  ```js
  app.use(express.static("folderName"));
  ```
* Express automatically maps files to URLs → no need to write routes.
* Static folder should be a dedicated directory like `public/`.
* You can use multiple static folders.
* You can set a URL prefix like:

  ```js
  app.use("/static", express.static("public"));
  ```
* Only the static folder’s contents are publicly accessible.
* Used for frontend assets, website UI, images, downloads, etc.




<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"> 


# 📝  Sending JSON Using Express

**Topic: Sending JSON using Express**

* JSON (JavaScript Object Notation) is used for API communication.
* Express method for sending JSON:

  ```js
  res.json(data)
  ```
* `res.json()` auto sets:

  * `Content-Type: application/json`
  * Converts object → JSON string
* Prefer `res.json()` over `res.send()` when returning API data.
* JSON can be:

  * Object
  * Array
  * Nested objects
  * Mixed data
* To send status + JSON:

  ```js
  res.status(200).json({...})
  ```
* JSON is the most common format for REST APIs and backend communication.



<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"> 


# 📝 **CORS (Cross-Origin Resource Sharing)** 

* Browsers enforce **Same Origin Policy (SOP)** for security.

* Different origin → Browser blocks request.

* CORS is a mechanism to allow communication between different origins.



* **Common CORS headers:**

  * `Access-Control-Allow-Origin`   → `origin` 
  * `Access-Control-Allow-Methods`  →  `methods`  
  * `Access-Control-Allow-Headers`  → `allowedHeaders`  
  * `Access-Control-Allow-Credentials`  → `credentials`  

* CORS issues happen **only in browsers**, not in Postman/cURL/Node.


<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

# 📝 **Preflight Request**
* Preflight Means -> OPTIONS request trigger automatically beofre other request to the server by browser to checks what are allowed like(header, method..etc) and what are not allowed.
* Preflight request = browser sends a **pre-check OPTIONS request** before the actual request.
* Browser asks server if specific methods/headers/origin are allowed.
* Preflight occurs when request is **non-simple**.
* Simple requests (no preflight):
  GET, HEAD, POST with simple content types.
* Non-simple requests (trigger preflight):
  PUT, PATCH, DELETE, custom headers, JSON content-type, credentials.
* In Express, CORS library automatically handles preflight:

  ```js
  app.use(cors())
  ```


<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

# 📝 REST API
* **API = Application Programming Interface**
* **REST = Representational State Transfer**
* A **REST API** is a API that follows a specific style/architecture called REST API.

## **REST: 6 Architectural Constraints**

### **1. Client–Server**

* Client (UI) and server (backend) are separate.
* Server handles logic; client handles display.

### **2. Stateless**

* Each request contains all required information.
* Server does NOT store session state.

### **3. Cacheable**

* Responses must indicate if they can be cached.
* Improves performance and reduces load.

### **4. Uniform Interface** *(most important)*

* Use standard HTTP methods (GET/POST/PUT/DELETE).
* Resource-based URLs (no action verbs).
* Consistent request/response format (JSON/XML).

### **5. Layered System**

* Client doesn’t know if it's talking to the real server or a layer (proxy, load balancer, etc.).

### **6. Code on Demand (optional)**

* Server can send executable code to the client (rarely used).

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">



# 📝 **COOKIES**

### ⚠️ Cookies & Security

| Issue                            | Solution                    |
| -------------------------------- | --------------------------- |
| XSS attack steals cookies        | Use **HttpOnly**            |
| Man-in-the-middle steals cookies | Use **Secure + HTTPS**      |
| CSRF attack                      | Use **SameSite=Lax/Strict** |



**NOTES:**

* Cookies are small pieces of data stored in the **browser**.
* Used to maintain **state** because HTTP is **stateless**.
* Browser automatically sends cookies in every request to the server.

* Cookie attributes:

  * `Expires` / `Max-Age` → lifespan
  * `HttpOnly` → secure, JS cannot access (ONLY SET BY SERVER not from browser)
  * `Secure` → HTTPS only
  * `SameSite` → prevents CSRF
  * `Path` → route where cookie works
* Types:

  * Session cookies
  * Persistent cookies
  * HttpOnly cookies
  * Secure cookies
* Express:

  * Set cookie → `res.cookie(name, value, options)`
  * Read cookie → `req.cookies` (needs cookie-parser)
  * Clear cookie → `res.clearCookie(name)`
* Cookies are essential for authentication flows.

### Unified Comparison Table
| Feature / Action                | Server                                           | Browser JavaScript   |
| ------------------------------- | ------------------------------------------------ | -------------------- |
| Set cookie                      | ✅ Yes                                            | ✅ Yes (non-HttpOnly) |
| Read cookie                     | ❌ Cannot read (server receives only via request) | ✅ Yes (non-HttpOnly) |
| Update cookie                   | ✅ Yes                                            | ✅ Yes (non-HttpOnly) |
| Delete cookie                   | ✅ Yes                                            | ✅ Yes (non-HttpOnly) |
| Set HttpOnly                    | ✅ Yes                                            | ❌ No                 |
| Read HttpOnly cookie            | ❌ No                                             | ❌ No                 |
| Modify HttpOnly cookie          | ❌ No                                             | ❌ No                 |
| Delete HttpOnly cookie          | ❌ No                                             | ❌ No                 |
| Set Secure                      | ✅ Yes                                            | ❌ No                 |
| Set SameSite                    | ✅ Yes                                            | ❌ No                 |
| Set Path                        | ✅ Yes                                            | ❌ No                 |
| Set Domain                      | ✅ Yes                                            | ❌ No                 |
| Set Max-Age/Expires             | ✅ Yes                                            | ❌ No                 |
| Cookies auto-sent with requests | Browser does it                                  | Browser does it      |






<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">


# 🧾 **Understanding Different Types of Form Data**

When a browser sends form data to a server, it does so in different **Content-Types**.
These define *how* the data is encoded and how the backend should parse it.


## In Short:

### 1. `application/x-www-form-urlencoded`  (default)

- Fields separated by `&`  
  Example: `name=John&age=30`
- File data **not** sent, only filenames
- Use in Express:

  ```js
  express.urlencoded({ extended: false })
  ```


### 2. `multipart/form-data`

* Fields separated by boundaries like `--WebKitFormBoundary`
* File data is sent as **binary** along with fields
* Used for **file uploads**
* Handled in Express using **Multer** middleware



### 3. `text/plain`

* Fields separated by new lines (`\n`)
* File data **not** sent, only filenames
* Use in Express:

  ```js
  express.text()
  ```

---

### 4. `application/json`

* Data sent as a **JSON string**
* Use in Express:

  ```js
  express.json()
  ```

## Read IN DETAILS: 

<details>
  <summary>📌 READ IN DETAILS:</summary>

---

### 🌟 **1️⃣ application/x-www-form-urlencoded**

➡️ **Most common form submission type**

➡️ Used for plain text inputs (login forms, search bars)

This is what HTML forms use by default:

```html
<form method="POST">
```

Or explicitly:

```html
<form method="POST" enctype="application/x-www-form-urlencoded">
```

### Format:

```
username=rahul&password=12345
```

### How to parse in Express:

```js
app.use(express.urlencoded({ extended: true }));
```

---

### 🌟 **2️⃣ multipart/form-data**

➡️ Used for **file uploads**

➡️ Required when using `<input type="file">`

```html
<form enctype="multipart/form-data">
```

### Important:

* Express **cannot parse this format**
* You MUST use **Multer**

```js
const multer = require("multer");
app.post("/upload", upload.single("photo"), (req, res) => {});
```

---

### 🌟 **3️⃣ application/json**

➡️ Used by modern frontend frameworks (React, Vue, Angular)
➡️ Used by APIs, AJAX calls, fetch(), axios()

Example payload:

```json
{
  "username": "rahul",
  "password": "12345"
}
```

### How to parse in Express:

```js
app.use(express.json());
```

### Note:

This triggers **CORS preflight**, because it is “non-simple”.

---

### 🌟 **4️⃣ text/plain**

➡️ Very simple raw text
➡️ Rarely used in modern APIs
➡️ Sometimes used for debugging

Example:

```
Hello this is plain text
```

### Express parsing:

Express **does NOT** parse this by default.

You must add body-parser:

```js
app.use(express.text());
```

---

### 🌟 **5️⃣ application/octet-stream**

➡️ Used for raw binary data
➡️ Used for streaming, video uploads, blobs

Example:

* Uploading a video file as a binary stream
* Uploading large files without form-data

### Express does NOT parse this automatically.

You must use:

* Raw body parser
* Or custom stream handling

```js
app.use(express.raw({ type: 'application/octet-stream' }));
```

---

### 🌟 **6️⃣ application/xml / text/xml**

➡️ Used by old SOAP systems
➡️ Some payment gateways still use it

Express cannot parse XML by default.

Need external package:

```
npm install body-parser-xml
```

---

### 🌟 **Important Comparison Table**

| Content-Type                          | Purpose                     | Express Support         |
| ------------------------------------- | --------------------------- | ----------------------- |
| **application/x-www-form-urlencoded** | Regular form inputs         | ✔️ express.urlencoded() |
| **multipart/form-data**               | File uploads                | ❌ Needs Multer          |
| **application/json**                  | API requests, frontend apps | ✔️ express.json()       |
| **text/plain**                        | Raw text                    | ✔️ express.text()       |
| **application/octet-stream**          | Binary data                 | ✔️ express.raw()        |
| **application/xml**                   | Legacy XML APIs             | ❌ Need XML parser       |

---

### 🧠 **Which Form Type Should You Use?**

| Task                       | Best Form Data Type          |
| -------------------------- | ---------------------------- |
| Login form                 | x-www-form-urlencoded / JSON |
| React/Angular API requests | JSON                         |
| Upload image               | multipart/form-data          |
| Upload video stream        | octet-stream                 |
| Old systems (SOAP)         | XML                          |
| Simple message             | text/plain                   |

---


</details>





