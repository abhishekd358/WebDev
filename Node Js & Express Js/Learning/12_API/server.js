import express from 'express';
// to parse the body without ejs file for that we have to import a bodyParser
import bodyParser from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/routes.js'


// DB connection 
mongoose.connect('mongodb+srv://email:password@cluster0.wuxv9he.mongodb.net/', {dbName: 'userApiDB'}).then(()=> console.log('DB connected Successfully')).catch((error)=>console.log(error))



const app = express()
// middleware
app.use(bodyParser.json()) 
app.use(express.json());





app.get('/', (req, res)=>{
    res.json({message :'Welcome'})
})


// Routes 
app.use('/api/user', userRouter)




const port = 1200;
app.listen(port, ()=>console.log('server running successfully on port', port))