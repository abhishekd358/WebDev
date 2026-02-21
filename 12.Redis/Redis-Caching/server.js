import express from 'express'

// ------------------------------------ 3) import redisClient and save the data to redis for cahce
import {createClient} from 'redis'

const redisClient = createClient()

redisClient.on('connect', ()=>{console.log('redis connected')})

// connecting the redis
redisClient.connect()







const app = express()
// ---------------------------------  1)
// we first fetching the data from api and then we cached into Redis

// function to fetch user data
async function getData(id){
    try {
        const response =await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
       
        return await response.json()
        
    } catch (error) {
        console.log(error.message)
    }
    
}

// -------------------------------------------------- 2) Route to call the api for data 

app.get('/user/:id', async (req, res)=>{
    const id = req.params.id

    // ----------------------------------------- 5) check in redis before we call api
    const userData = JSON.parse(await redisClient.get(`userData:user:${id}`))
    // console.log(userData)

    // if redis have the data
    if(userData){
        return res.json({message:"Data from Redis Cache", data:userData})
    }

    // if not data then we make a fetch call to api and save data to cache

    else{
        const userData = await getData(id)
        // console.log(userData)
        res.json({message: "Data from the Api call", data:userData})
        await redisClient.set(`userData:user:${id}`, JSON.stringify(userData))
        //  setting expiray
        await redisClient.expire(`userData:user:${id}`, 10)
        return 
    }
})









app.listen(4000, ()=>{
    console.log('Server Running on 4000')
})