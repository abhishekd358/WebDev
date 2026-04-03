import {createClient} from 'redis'



// create client
const client = createClient({url:"redis://localhost:6379"})

await client.connect()



// ============================
//  ithe mi  cursor value set karat aahe
let cursor = "0"

do {
    // destructe the key and cusrsor
    const result = await client.scan(cursor, {MATCH:'app:user:*', COUNT: 5})
    
    cursor = result.cursor 
    // console.log(result)
    console.log((result.keys))

    //  jab tak mera cursor 0 nahi hota tab tak hum above code run karenge
} while (cursor !== "0");



// quite from server
client.quit