// first import the express

import express from 'express';

// here we calls the express or we initialize the express

const app = express();

const port = 6500

app.listen(port, ()=>console.log('Server Running...!!!'))