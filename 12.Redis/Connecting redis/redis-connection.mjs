import {createClient} from 'redis'



const redisClient = createClient({url:"redis://localhost:6379"})

//  connect event
redisClient.on("connect", ()=>console.log('Redis connected successfully on 6379'))

// ready event
redisClient.on('ready',() =>console.log("Redis ready to use"))


// end event
redisClient.on("end", () =>console.log("Redis connection closed"))

// error event
redisClient.on("error", (err) =>console.error("Redis error:", err))



redisClient.connect()


setTimeout(() => {
    console.log('Disconnecting the redis.....')
    redisClient.quit()
}, 2000);



