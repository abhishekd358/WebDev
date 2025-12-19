import {MongoClient} from 'mongodb'

const client1 = new MongoClient('mongodb://127.0.0.1:27017')

await client1.connect()
console.log('Databases connected \n ------------------------------------');


// console.log(await client1.db())

// see what are databases
// console.log(await client1.db().admin().listDatabases())

// 1) creating a databases
const transactionDB = await client1.db('Transaction')


// validation of shcema for both the collections

const dirSchema = {
    validator:{
        $jsonSchema:{
            properties:{
                name:{bsonType:"string"}
            }
        }
    },
    validationLevel:"strict",
    validationAction:"error"
}

const userSchema = {
    validator:{
        $jsonSchema:{
            bsonType: "object",
            properties:{
                name:{bsonType:"string",minLength:3}
            }
        }
    },
    validationLevel:"strict",
    validationAction:"error"
}

// creating collection(directories and users) in Transaction Database
const dirCollection = await transactionDB.createCollection('directories',dirSchema)
const userCollection = await transactionDB.createCollection('users', userSchema)

// console.log(await client1.db().admin().listDatabases())



// =============================== Transaction =======================

// 1️⃣ to create transaction first create a Session
const session = client1.startSession()

try{
// 2️⃣ Now create A transaction using session 
session.startTransaction()

// ------------------------ 3️⃣ write Operations with session ---------------------
await dirCollection.insertOne({name:"db", userName:"Abhi"}, {session})

await userCollection.insertOne({name:"Abhi",rooDirName:"db"}, {session})

// 4️⃣ if success above write operation then COMMIT
await session.commitTransaction()
console.log("Transaction Commited successfully")

}catch(error){

// 5️⃣ If fails the write operation 
await session.abortTransaction()
console.log("Trasaction Fails")

} 

// 6️⃣ End session
session.endSession();


// closing db connection
await client1.close()
console.log('Database Disconnected')