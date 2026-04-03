import { createClient } from "redis";

const redisClient = createClient({url:"redis://localhost:6379"})
redisClient.on('error', (err)=>{console.log("redis close",err)})
redisClient.on('end', ()=>{console.log("redis connection disconnetedd")})
await redisClient.connect()

// ================= WOrker
//  har task lega FIFO ; or process kar ke POP karega

//  ek ko mai har like kuch interval ke baad raun kar ta hu for real experience
const range = await redisClient.LRANGE("Task:", 0, -1)
// console.log(range)


setInterval(async()=>{
    const result = await redisClient.LPOP("Task:")
    // console.log(result)
    console.log(`✅ ${result}`)
    
    
    // jab mere Task queu ke andar kuch nahi hai . to quite kar denge
    const range = await redisClient.LRANGE("Task:", 0, -1) 
    if (range.length == 0){
       console.log("🙌🏼===== All Notification Send ====🙌🏼")
        
    //     hum redis colge kar denge
       await redisClient.quit()
    }



}, 1000)


