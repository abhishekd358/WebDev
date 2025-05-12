# 🌐 Server-Side Rendering with EJS (Embedded JavaScript)

## 📚 What is a Template Engine?

- A **template engine** helps render HTML pages with dynamic data.
- It allows embedding JavaScript inside HTML files.
- This is useful for **Server-Side Rendering (SSR)**.

---

## 🚀 What is SSR (Server-Side Rendering)?

- **SSR** means fetching data from a **database** or **user input** and rendering that data into HTML pages on the server before sending it to the browser.

---

## 🔧 Setting Up EJS Template Engine

1. Install EJS via npm:
  ```bash
   npm install ejs
````


2. `.ejs` files are stored inside the `views` folder by convention.

3. Render `.ejs` files in routes using the `.render()` method:

   ```javascript
   res.render('index.ejs', { obj });
   ```

   * No need for an absolute file path; just pass the `.ejs` file name.
   * The `obj` contains values you want to render dynamically in the EJS file.

---

## 📝 Example: `index.ejs`

```ejs
<body>
    <h1>Hey, Yoooo <%= obj.name %>!!!!! Now you learn how to render the .ejs Files</h1>
    <h4>Country of <%= obj.name %> is <%= obj.country %> </h4>
</body>
```

---

## 🛠️ EJS Syntax Guide

| Syntax      | Purpose     |
| ----------- | ----------- |
| `<%= %>`    | Output data |
| `<% for %>` | Looping     |
| `<% if %>`  | Conditions  |
| `<%# %>`    | Comments    |

---

## 🎨 Static Files (CSS, Images, Videos, JS)

### Why Static Files?

* Static files like **CSS**, **images**, and **JavaScript** cannot be directly linked without declaring them as static.
* Example: To apply external CSS to `index.ejs`, create a `public` folder and place `style.css` inside it.

---

## 🔒 Making Static Files Accessible

1. Use Express middleware to serve static files:

   ```javascript
   const path = require('path');
   const express = require('express');
   const app = express();

   app.use(express.static(path.join(__dirname, 'public')));
   ```

   * `public` is the conventional folder to store static assets.

---

## 📝 Example: Linking CSS in `index.ejs`

```html
<link rel="stylesheet" href="style.css">
```

> This will now correctly apply styles from `public/style.css`.

---

## ✅ Recommended Folder Structure

```
project/
│
├── public/
│   └── style.css
│
├── views/
│   └── index.ejs
│
├── app.js (or server.js)
└── package.json
```

---

## 🎉 Now You're Ready!

You’ve learned how to:

* Set up and render EJS templates.
* Pass dynamic data to EJS files.
* Serve static files like CSS and JS.

---

```
