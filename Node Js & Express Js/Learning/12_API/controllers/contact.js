import { ContactDB } from "../models/Contact.js";


// create new contact
export const newContact = async (req, res) => {
    if(req.body === undefined){
            return res.json({message: 'body should be required', success: false})
        }
    
        // 2-if we want to post name, email, phone,type first we capture from req.body
        const {name, email, phone, type} = req.body;
        // res.json({message:'user created sucessfully...!!!',name, email, password, success:true})
        // 3-now this data should be store on DB // now configure the connection 
    
        // 4- while pushing data to DB first check that no field should be empty
        if(name == "" || phone == "" || type == ""){
            return res.json({message:'name, phone, type fields are required', success: false})
        }
    
        // 4- if email not exist and in all other case we going to push data to DB
        const savedContact = await ContactDB.create({
            name,
            email,
            phone,
            type,
            user:req.verifiedGlobalVar
        })
    
        res.json({message:'contact saved sucessfully...!!!',savedContact, success:true})
    
}



// get all contact 
export const getAllContact = async (req, res) => {
        const contactAllData =   await ContactDB.find()
        // console.log(contactAllData)
        if (!contactAllData){
            return res.json({message:"contact not found", success:false})
        }
    
        res.json({message:'All contact',contactAllData, success:true})
    
}




// get contact by id
export const getContactbyId = async (req, res) => {
        // getting the id from the body using .params
        const _id = req.params.id

        const contactData =   await ContactDB.findById({_id})
        // console.log(contactData)
        if (!contactData){
            return res.json({message:"contact not found", success:false})
        }
    
        res.json({message:'your contact details of id',contactData, success:true})
    
}



// get update contact by id
export const updateContactbyId = async (req, res) => {
        //  we take user input through body for update
        const {name, email, phone, type} = req.body

        // getting the id from the body using .params
        const _id = req.params.id
        
        const contactData =   await ContactDB.findByIdAndUpdate({_id},{
            name,
            email,
            phone,
            type,
        }, {new:true})
        // console.log(contactData)
        if (!contactData){
            return res.json({message:"contact not found", success:false})
        }
    
        res.json({message:'your contact details of id',contactData, success:true})
    
}


// delete contact by id

export const deleteContactById = async (req, res) => {

    // getting the id from the body using .params
        const _id = req.params.id

        const contactData =   await ContactDB.findByIdAndDelete({_id})
        // console.log(contactData)
        if (!contactData){
            return res.json({message:"contact not found", success:false})
        }
    
        res.json({message:'your contact deleted', success:true})
    
}