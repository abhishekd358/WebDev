// this file now act a SHELL but in JavaScript language

// creating a mongo client
import { MongoClient } from 'mongodb';

// connect to mongodb
const client1 = await MongoClient.connect(process.env.DB_URL);

try {
  // 1️⃣ list all databases
  const myDB = await client1.db().admin().listDatabases();
  console.log("Databases:", myDB.databases.map(db => db.name));

  // -------------------------------------------------
  // 2️⃣ create database (MongoDB creates DB lazily)
  const testDB = client1.db('TestDB');

  // -------------------------------------------------
  // 3️⃣ create collection
  await testDB.createCollection('users');
  console.log("Collection created: users");

  // -------------------------------------------------
  // 4️⃣ list collections in TestDB
  const allCollections = await testDB.listCollections().toArray();
  console.log(
    "Collections:",
    allCollections.map(col => col.name)
  );

  // -------------------------------------------------
  // 5️⃣ getting specific collection
  const myCollections = testDB.collection('users');

  // ----------------------- CRUD --------------------

  // 6️⃣ CREATE

  // insert one document
  await myCollections.insertOne({
    name: "Alice",
    age: 25
  });

  console.log("One document inserted");

  // -------------------------------------------------
  // 7️⃣ READ

  // read all documents
  const users = await myCollections.find({}).toArray();
  console.log("All Users:", users);

  // read one document
  const oneUser = await myCollections.findOne({ name: "Alice" });
  console.log("One User:", oneUser);

  // -------------------------------------------------
  // 8️⃣ UPDATE

  await myCollections.updateOne(
    { name: "Alice" },
    { $set: { age: 26 } }
  );

  console.log("One document updated");

  // -------------------------------------------------
  // 9️⃣ DELETE

  await myCollections.deleteOne({ name: "Alice" });

  console.log("One document deleted");

} catch (error) {
  console.error("Error:", error);
} finally {
  // 🔚 closing client connection
  await client1.close();
  console.log("MongoDB connection closed");
}
