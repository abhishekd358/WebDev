import { createServer } from 'http'
import express from 'express'

const app = express()

// Route-Specific Middleware
// Runs only for a specific route.
app.get('/',
    (req, res, next)=>{
        console.log('middleware 1')
        next()
        res.end('HTTP\n\nfrom the 1')
    },
    
    (req, res, next)=>{
        res.write("HTTP\n\nfrom 2")
    }
)









app.listen(8000, ()=>console.log('Server Started on port'))


