import express from 'express';

const app = express();

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// at home route we render form.ejs
app.get('/', (req, res)=>{
    res.render('form.ejs')
})

// at /form route we send the form inputed data when user post or submit
app.post('/form', (req, res)=>{
    const user = req.body

    // res.send(user)
    res.send(`Thank You ${user.UserName}!!! For Submitting Form. `)
}) 





const port = 1700
app.listen(port, ()=>console.log('Server Running on Port ', port, 'Successfully...'))