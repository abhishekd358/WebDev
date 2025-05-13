import express from 'express';
// import the controllers
import { homeRoute , UserRegister , aboutRoute } from '../controllers/user.js';

// .Router() is method
const router = express.Router()

// here we define the end point
router.get('/', homeRoute);
router.get('/about', aboutRoute)
router.post('/form',UserRegister)

export default router;
