import {createClient} from 'redis'


// # create instane 

const client = new createClient({url:"redis://localhost:6379"})

// client have different kind of event 
await client.on('connect', async()=> {
    console.log('redis connected successfully')
    await client.set('user:location:city', 'pune' ) // nested storing


    const employee = {
    'dept' : 'electrical',
    'salary': 200,
    'duty-hrs' : 12
    }
    // noraml data object saving with type of STRING . and stringfying the object. THIS NOT HAVE MORE CONTROL 
    await client.set('user:user2',JSON.stringify(employee))


    // =========================== JSON DATA TYPE : HAVE MORE CONTROL ON EACH FIELD OF DATA
    // await client.json.set('user:user3',"$",employee)

    


})


//  when redis is ready then 
await client.on('ready', ()=>{console.log('Ready.....')})



// # connect the client
await client.connect()


//  redis when end
setTimeout(async()=>{
    await client.on('end', ()=>{console.log('Redis Disconnected')})
    await client.quit()
}, 50000)






