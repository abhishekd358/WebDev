import express from 'express';
// to parse the body without ejs file for that we have to import a bodyParser
import bodyParser from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user_routes.js'
import contactRouter from './routes/contact_routes.js'
import dotenv from 'dotenv'
dotenv.config();

// DB connection 
mongoose.connect(process.env.DB_URI, {dbName: 'userApiDB'}).then(()=> console.log('DB connected Successfully')).catch((error)=>console.log(error))



const app = express()
// middleware
app.use(bodyParser.json()) 
app.use(express.json());





app.get('/', (req, res)=>{
    res.json({message :'Welcome'})
})


// Routes 
app.use('/api/user', userRouter)
app.use('/api/contact', contactRouter)



const port = process.env.PORT;
app.listen(port, ()=>console.log('server running successfully on port', port))