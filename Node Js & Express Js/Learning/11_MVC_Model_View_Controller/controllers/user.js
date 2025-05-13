
// first import the model here so from here we create data into DB

import {User} from '../models/User.js';


// home route define
export const homeRoute = async(req, res)=>{
    res.render('index.ejs')
}


// extra route to test 
export const aboutRoute = async (req, res) => {
    const userData = await User.find();
    res.send(userData)
}




export const UserRegister = async (req, res) => {
    try{
        // creating data means pushing data to the Database
        // store the user inputed json into user variable
        // this code stores the data into Database 
            let user = await User.create(req.body)

            // this basically shred the response to the end user p
            res.json({
                    message:'User Created Successfully',
                    newUser: user,
                    success:true,
            })
    }catch(error){
        res.json({
            message:error.message
        })
    }
    
}



