
# 1) Introduction to Mongoose

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>
  
✔ **Mongoose**

* ODM library for MongoDB + Node.js
* Adds structure on top of MongoDB

✔ **ODM (Object Document Mapper) vs ORM (Object Relational Mapper)**

* ODM → Used with NoSQL Document DBs
* ORM → Used with Relational Databases (SQL)

Examples

```
R = ORM = Rows
D = ODM = Documents
```

✔ **Why Mongoose**

* Schema-based data modeling
* Built-in validation
* Easier CRUD operations
* Middleware (hooks) support

✔ **Install**

```bash
npm install mongoose
```

✔ **Connect to MongoDB**

```js
mongoose.connect("mongodb://localhost:27017/mydb")
```


✔ **Schema**

* Defines structure of document
* Controls data types
* Supports validation

Example:

```js
{ name: String, age: Number }
```

✔ **Model**

* Model = MongoDB collection
* Created from schema

Example:

```js
mongoose.model("User", schema)
```

✔ **Collection Naming**

* Auto lowercase + plural
  User → users
* Custom name possible

✔ **Insert Data**

* `create()` inserts document
* Returns saved document

Example:

```js
User.create({ name: "Anurag" })
```

✔ **Default Fields**

* `_id` → MongoDB
* `__v` → Mongoose (versioning)

✔ **Interview Line**
"Mongoose is an ODM that provides schema, validation, and models for MongoDB."

</details>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">