import express from 'express';
// importing the Controller
import { newContact , getContactbyId , getAllContact, updateContactbyId, deleteContactById } from '../controllers/contact.js';
import { isAuthenticated } from '../middlewares/Auth.js';


// assign Router()
const router = express.Router();


// contact route
// desc : creating new contact 
// method : post
// endpoint : /api/contact/new
router.post('/new',isAuthenticated, newContact);

// find contact by id
// method : get
// endpoint : /api/contact/:id
router.get('/:id', getContactbyId ) 


// get all contact
// method : get
// endpoint : /api/contact/
router.get('/', getAllContact ) 



// update by id
// method : put
// endpoint : /api/contact/:id
router.put('/:id', updateContactbyId ) 


// delete by id
// method : delete
// endpoint : /api/contact/:id
router.delete('/:id', deleteContactById ) 


export default router;