import {createClient} from 'redis'

const redisClient = createClient()

redisClient.on('connect', ()=>console.log('Redis Running.......'))
redisClient.on('ready', ()=> console.log('❤ SETJSON & GETJSON applying ❤'))

redisClient.SETJSON = async(key, value) =>{
    return  await redisClient.set(key, JSON.stringify(value))
}

redisClient.GETJSON = async(key) =>{
    return JSON.parse(await redisClient.get(key))
}



redisClient.connect()



setTimeout(() => {
    console.log(' redis stopped')
    redisClient.quit()
    
}, 5000);


export default redisClient;


