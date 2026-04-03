// producer is who push the task in the queue

import {createClient} from 'redis';

// now ab hum connection set kar tha hu redis ka
const redisClient = createClient({url: "redis://localhost:6379"})

// redis ko connect karenge
await redisClient.connect()



//  phele mai ek LIST(QUEUE) namespace create kar tha hu Task ke liye 
// push karega worker task ko 
await redisClient.RPUSH('Task:', 'Notification:1')
await redisClient.RPUSH('Task:', 'Notification:2')
await redisClient.RPUSH('Task:', 'Notification:3')
await redisClient.RPUSH('Task:', 'Notification:4')
await redisClient.RPUSH('Task:', 'Notification:5')

console.log("all task added in queue!!!")






