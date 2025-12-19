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


await dirCollection.insertOne({name:"db", userName:"Alex"})

await userCollection.insertOne({name:"Alex",rooDirName:"db"})


// closing db connection
await client1.close()
console.log('Database Disconnected')