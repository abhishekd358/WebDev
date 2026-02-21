import redisClient from './parse-stringfy.mjs'


redisClient.SETJSON('doctor', {
    "qualification": "MBBS",
    "experience": 10,
    "fee": 20
})


console.log(await redisClient.GETJSON('doctor'))


