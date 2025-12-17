// this file now act a SHELL but in Javscript language

// creating a mongo client
import {MongoClient} from 'mongodb'


const client1 =await MongoClient.connect(process.env.DB_URL)

// console.log(client1);

//1️⃣ now we can use multiple mongodb command here 
const myDB =await client1.db().admin().listDatabases()
// console.log(myDB)

// 2️⃣ checking list of collection we have in particular db

const allCollections =await client1.db('AptDox').listCollections().toArray()
// console.log(myCollections);


// 3️⃣ getting specific collection

const myCollections =await client1.db('AptDox').collection('doctors')

// console.log(myCollections);

// ----------------------- CRUD --------------------

// 4️⃣ Reading all Document from the Doctors Collections
console.log(await myCollections.find().toArray())





// closing client 1 connections
client1.close()