import {MongoClient} from 'mongodb'


const client1 = new MongoClient("mongodb://127.0.0.1:27017/")

const db=client1.db()
// showing all databases
// console.log(await db.admin().listDatabases())


// accessing students collections
const studentsCollection = await client1.db('Students').collection('students')

console.log(await studentsCollection.find().toArray())



// command 
// sh-> runCommand