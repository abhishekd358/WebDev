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



