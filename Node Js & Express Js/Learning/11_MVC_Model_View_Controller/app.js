import express from 'express';

import mongoose from 'mongoose';
import router from './routes/userRoutes.js';

// Making connection
mongoose.connect('mongodb+srv://<email>:<password>@cluster0.wuxv9he.mongodb.net/', {dbName:'UserDB'}).then(()=>console.log('Connection Done!!!')).catch((error)=>console.log(error));



const app = express();
// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


// // rendering the Views
// app.get('/', (req, res)=>{
//     res.render('index.ejs')
// })

app.use('/',router)

const port = 1200;


app.listen(port, ()=>console.log('Server Running On Port ',port))