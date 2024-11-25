// in then() if part will be came , true one
// in catch() else part will be came, the false one
// overall if ---> then() ----> then() ---> then() ............................


const firstPromise = new Promise(function(resolve, reject){ // promises has a function to be passed with 'resolve' and 'reject' as parameters
            setTimeout(function(){     // passing async function
                console.log("Async function is called")
            }, 1000)
    })

firstPromise.then(function(){ // then method used when the true return is there
    console.log("promise is completed")
})



// ++++++++++++++++++++++++++++++++ resolve() : Method called +++++++++++++++++++++++++++++++++++++++++++++++++

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async function is called")
        resolve()  // resolve helps to pass the output to .then() .catch() methods
    }, 1000)
}).then(function(){
console.log("promise second is completed")
})


// ++++++++++++++++++++++++++++++++ cath(), finally() +++++++++++++++++++++++++++++++++++++++++++++++++

const thirdPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({studentId : 121, studentName: 'MoonEartha' })  // think like , some data is receving by the resolve method
    }, 1000)
})

thirdPromise.then(function(dataReceive){ // you can give any name to the data Receiver it paramaeter bro
    console.log(dataReceive.studentName)   // whaterver the response sending by the resolver() , can be accessible here in then() 
})



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const forthPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        flag = true 
        if(!flag){
            console.log('----forth -----')
            resolve({studentId : 121, studentName: 'MoonEartha' })  // think like , some data is receving by the resolve method
        }else{
            console.log('error: you now inside else')
        }
    }, 1000)
})

forthPromise.then(function(dataReceive){ // in then() if part will be came , true one
    console.log(dataReceive.studentName)  
}).catch(function(dataReceive){ // in catch() else part will be came, the false one
    console.log(dataReceive)
}).finally(function(){
    console.log('this is final statement')
    })



// ++++++++++++++++++++++++++++++++ try() and catch() using async function +++++++++++++++++++++++++++++++++++++++++++++++++


const fifthPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        flag = false
        if(!flag){

            resolve({studentId : 121, studentName: 'MoonEartha' })  // think like , some data is receving by the resolve method
        }else{
            console.log('error: you now inside else')
        }
    }, 1000)
})

async function GiveAnyName() { // this is the way to create async funtion
    // accessing the fifthPromise using variable name
    try{const response = await fifthPromise // promise is object not a function
    console.log(response)
    console.log(response.studentId)
    }catch(error){
        console.log(error)
    }
}
GiveAnyName() // also need to call






// +++++++++++++++++++++++API calling using fetch()+++++++++++++++++++++++++++++++++++++++++++++++++++

async function GiveAnyNameFunc() { // this is the way to create async funtion
    // accessing the fifthPromise using variable name
    try{
        const response = await fetch('https://api.github.com/users/hiteshchoudhary') // promise is object not a function
        const  data = await response.json() //convert to json file format
        console.log(data)
    }catch(error){
        console.log(error, 'Ohh! you found the Error')
    }
}
GiveAnyNameFunc() // also need to call



// method 2

fetch('https://api.github.com/users/hiteshchoudhary').then(
    function(responseOut){ // here responseOut is a response that is getting from the api and we give it name as responseOut
        return responseOut.json() // this return pass to next .then() method
    })
    .then(function(data){ // here the above .then() pass the result to next .then()
        console.log(data)
    })
    .finally(function(){
        console.log('final one')
    })



