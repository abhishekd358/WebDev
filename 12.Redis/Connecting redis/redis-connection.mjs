import {createClient} from 'redis'



const redisClient = createClient({url:"redis://localhost:6379"})

const employee = {
    'dept' : 'electrical',
    'salary': 200,
    'duty-hrs' : 12
}

//  connect event
await redisClient.on("connect", async()=>{console.log('Redis connected successfully on 6379')
     redisClient.set('city', 'abhi')
     redisClient.set('employee', JSON.stringify(employee))
    console.log(JSON.parse(await redisClient.get('employee')))
})



// ready event
// redisClient.on('ready',() =>console.log("Redis ready to use"))

// end event
redisClient.on("end", () =>console.log("Redis connection closed"))

// error event
// redisClient.on("error", (err) =>console.error("Redis error:", err))



await redisClient.connect()


setTimeout(() => {
    console.log('Disconnecting the redis.....')
    redisClient.quit()
}, 10000);



