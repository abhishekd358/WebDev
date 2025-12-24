
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


# 3) Side Effect Import i ES6

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>
- side effect import file run instantly

- syntax as follow
```c++
import 'file_name_that_wnat_to_execute_instantly'; // Side-effect import
import './user-model.js';
```

</details>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">


# 4) Mongoose Schema & Types

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>



**✔ What is Schema?**
- Blueprint of document structure
- Defines fields, types & validation
- Controls what data is allowed

**✔ What is Model?**
- Represents MongoDB collection
- Used for CRUD operations
- Created using `mongoose.model(name, schema)`

**✔ Ways to Create Schema**
1) Inline (simple, less control)

```c++
  const userSchema = {
  name: String,
  age: Number
}
```

2) Explicit (recommended)

```c++
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true }
}, {
  timestamps: true,
  strict: 'throw'
});
```

**✔ ObjectId Usage**
- Use `mongoose.Schema.Types.ObjectId`
- Common for referencing documents

```c++
parentId: {
  type: Schema.Types.ObjectId,  // Correct way
  required: function() { return this.age < 16 }  // Conditional requirement
}
```

**✔ Schema Field Options**

- `type`         → data type
- `required`     → must exist (Mongoose validation)
- `select`       → hide/show fields
- `unique`       → creates UNIQUE INDEX (DB-level)
- `default`      → auto value
- `enum`         → fixed allowed values like option in array
- `min`          → minimum number
- `max`          → maximum number
- `minlength`    → minimum string length
- `maxlength`    → maximum string length
- `match`        → regex validation
- `trim`         → remove spaces
- `lowercase`    → convert to lowercase
- `uppercase`    → convert to uppercase
- `immutable`    → cannot be changed after creation
- `index`        → creates index (non-unique)
- `sparse`       → index only non-null values
- `validate`     → custom validation function
- `alias`        → alternate field name



**✔ Schema Options**
- `timestamps` → adds createdAt, updatedAt
- `strict`: true → ignore extra fields
- `strict`: "throw" → error on extra fields
- `collection` → custom collection name
- `versionKey` → __v control



</details>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">



# 5) Thenable Object in JavaScript?

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>


**✔ What is a Thenable?**
- Any object that has a `.then()` method
- JavaScript treats it as Promise-like
- `await` works because `.then()` exists

**✔ Simple Definition**
Thenable → any object that contains a then() method

**✔ Core Rule ⚠️**
- JS checks ONLY for `.then()`
- Does NOT check `instanceof Promise`

✔ Basic Example
```c++
const obj = {
  then(resolve) {
    resolve("Hello");
  }
};
```

**✔ Basic Example with `await`**
```c++
const thenable = {
  then(resolve) {
    resolve(42);
  }
};

async function test() {
  const value = await thenable;
  console.log(value);
}

test();
```

**✔ How await Works Internally**
- Checks: does object have `.then()`?
- If yes → treats it like a Promise
- Calls `.then(resolve, reject)`

**✔ Promise vs Thenable**
- Promise → native JS object
- Thenable → any object behaving like Promise
- All Promises are thenables
- Not all thenables are Promises


**✔ Interview Line **
"A thenable is any object with a `then()` method that JavaScript treats like a Promise in async/await and promise chains."

</details>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">


# 6) Validator in Mongoose Schema

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>


**✔ What is a Validator?**
- Validator → rule that checks data before saving to DB

**✔ Syntax **

```js
validate:
  validator: function(value) { 
    return true/false 
  }
  message:"error msg"
```

**✔ Example (Concept)**

```
Age must be 18 or above
```

- Solution

```js
const userSchema = new mongoose.Schema({
  age: {
    type: Number,
    validate: {
      validator: function (num) {
        return num >= 18;
      },
      message: "Age must be 18 or above"
    }
  }
});
```


**✔ Important Facts** 

```
Validators run before save()
Validators run on create()
Validators DO NOT run on update by default
```


</details>
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">



# 7) `ref` and `populate()`

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

✔ What is ref?
- ref defines relationship between collections
- Tells ObjectId belongs to which model
- Used inside schema with ObjectId

✔ Example
User → Post (One user, many posts)

✔ User Schema
```js
const User = mongoose.model("User", {
  name: String
});
```

✔ Post Schema with ref
```js
const Post = mongoose.model("Post", {
  title: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});
```

---

✔ What is populate?
- Converts ObjectId into actual document
- Fetches related data
- Works like JOIN

✔ With populate
- `Post.find().populate("user")`

Output:
```js
{
  title: "Hello",
  user: {
    _id: "64ab...",
    name: "Rahul"
  }
}
```

✔ Populate Multiple Fields Selection from User Collection
- `Post.find().populate("user", "name email")`

</details>



<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">


# 4) Virtuals in Mongoose ?

<details>
  <summary>👉🏼 READ IN DETAILS:</summary>

**✔ What are Virtuals?**
- Virtuals are fields NOT stored in MongoDB
- They are calculated at runtime
- Available only in Mongoose document
- Used for derived / computed values


✔ Default Virtual
- Every document has `id`
- `id` = string version of `_id`

Example:

```js
user._id → ObjectId("...") //objectId
user.id  → "64ab..." //string 
```


✔ Creating Virtuals (Two Ways)

**Method 1: Schema Options (Recommended)**

```js
const userSchema = new mongoose.Schema({
  age: Number,
  hobbies: [String]
}, {
  virtuals: {
    isAdult: {
      get() {
        return this.age >= 18;
      }
    }
  }
});
```

**Method 2: schema.virtual()**

```js
userSchema.virtual("emailDomain")
  .get(function () {
    return this.email.split("@")[1];
  });
```


✔ Getter Virtual (Read-only)
- Returns computed value
- Does not change DB

✔ Setter Virtual (Write logic)
- Updates real fields
- Must call save()


Example:

```js
hobbiesString: {
  get() {
    return this.hobbies.join(", ");
  },
  set(val) {
    this.hobbies = val.split(", ");
  }
}
```

✔ Important Rules ⚠️
- Virtuals are NOT queryable
- Can't use in find(), sort(), filter
- Don't use arrow functions (need this)



</details>