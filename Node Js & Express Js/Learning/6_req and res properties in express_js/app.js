// first we create a server using express

import express from 'express';

const app = express();


// ======================= res Methods(response) ==============================================            
// creating .get 
app.get('/', (req, res)=>{
    

    // 1. .status : set the http status code
        res.status(200);  
    
    // 2. .sendStatus(code) : this method set and send status code
        // req.sendStatus(401)

    
    // 3. .json() : it use to send the JSON format response 
        res.json({
            name: 'RollX',
            address : 'unknown',
            age : 29,
        });


})


app.get('/header', (req, res)=>{
    // 4. .set(filed, value) : it use for custom headers
        res.set('x-powered-by', 'Node.js')
    });

app.get('/about', (req, res)=>{
    // 5. .send()   : use to send the response to browser
    res.send('THis One About Route.')
    });



    // ======================= req Methods(request) ==============================================

app.get('/user/:id', (req, res)=>{

    // 1. .params : fetch and return parameter that in the url of the browser
        // localhost:1200/user/28    
    const UserId = req.params.id;
    res.send(`the userId is ${UserId} `) //the userId is 28

});



app.get('/search/', (req, res)=>{

    // ======================= req Methods(request) ==============================================
        // 2. .query : fetch query in the url of the browser   value after /serach?q=
        // localhost:1200/search?q=animal  

        const queryValue = req.query.q;
        res.send(`the query is ${queryValue} `)  // the query is animal    
})


app.get('/', (req, res)=>{

    // ======================= req Methods(request) ==============================================
        // 3. body : returns the server data on particaular route in json format
            // as in first '/'  route we create a json and store in server this .body method return that

        const JsonData = req.body;
        res.send(`the query is ${JsonData} `)   
})



app.get('/head', (req, res)=>{

    // ======================= req Methods(request) ==============================================
        // 4. .headers : returns the header

        const headerValue = req.headers['user-agent'];
        res.send(`the query is ${headerValue} `)   
})



app.get('/contact', (req, res)=>{

    // ======================= req Methods(request) ==============================================
        // 5. .method : returns the which method used for this route

        const ContactMethod = req.method;
        res.send(`the query is ${ContactMethod} `)   
})


app.get('/blog', (req, res)=>{

    // ======================= req Methods(request) ==============================================
        // 6. .url : returns the url or the route

        const urlName = req.url;
        res.send(`the query is ${urlName} `)   
})






const port = 1200
app.listen(port, ()=>console.log(`Server Running on ${port}`))