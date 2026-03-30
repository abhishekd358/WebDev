import { createClient,SCHEMA_FIELD_TYPE } from "redis";


// 1 = basic setup of creating client
const redisClient = createClient({url: process.env.REDIS_URL})

redisClient.on('connect', ()=> {console.log('redis connected')})


//  if any error
redisClient.on('error',console.error)

// now we connect the redis
await redisClient.connect()


// 2================  inseting the JSON data
await redisClient.json.set('cricket:', '$',{ team: 'CSK'})