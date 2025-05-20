import express from 'express';
// importing the Controller
import { userRegistration, userLogin } from '../controllers/user.js';



// assign Router()
const router = express.Router();


// user register route
// method : post
// route : /api/user/register 
router.post('/register', userRegistration);

// user login route
// method : post
// route : /api/user/login
router.post('/login', userLogin) 



export default router;