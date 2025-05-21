import express from 'express';
// import the User Model
import { User } from '../models/User.js' 
import bcrypt from 'bcryptjs'
// import jwt
import jwt from 'jsonwebtoken';




export const userRegistration = async (req, res)=>{
    //1------------ trial check code ------------------
            // const data = req.body
            // res.send(data)
            // console.log(data)
    // 7 - body should be passed compulsory
    if(req.body === undefined){
        return res.json({message: 'body should be required', success: false})
    }

    // 2-if we want to post name, email, password first we capture from req.body
    const {name, email, password} = req.body;
    // res.json({message:'user created sucessfully...!!!',name, email, password, success:true})
    // 3-now this data should be store on DB // now configure the connection 

    // 4- while pushing data to DB first check that no field should be empty
    if(name == "" || email == "" || password == ""){
        return res.json({message:'All fields are required', success: false})
    }

    // 5 - while pushing to DB , check that is the email enterd is already exist in DB or Not if yes return 'email exists'

    const userDB = await User.findOne({email}); // finding with email
        // console.log(userDB)
        // if email exist
        if (userDB){
            return res.json({message:'user email already exists!!!', success: false})
        }
    
    // 8 - when we passing the password to DB we need to hash before pushing it to DB
        const hashPassword = await bcrypt.hash(password, 10)

    // 6- if email not exist and in all other case we going to push data to DB
    const userdata = await User.create({
        name,
        email,
        password : hashPassword
    })

    res.json({message:'user created sucessfully...!!!',userdata, success:true})
}






// user login controller
export const userLogin = async (req, res) => {
    // 1 - for testing the route is working or not
    // res.json({message: 'Login Route'})     
    
    // 2 -- body must be passed while making call to login
    if (req.body === undefined){
        return res.json({message:'body is required', success: false})
    }

    // 3-- first the userfield name and email in body should not be empty
      const {email, password} = req.body
      if(email == "" || password == ""){
        return res.json({message:'All field are mandatory', success:false})
      }

    // 4 --- first check email exist or not
    const userExists = await User.findOne({email});
    // console.log(userExists)


            // if not exists
            if(!userExists){
                return res.json({message:"email not exists.", success:false})
            }

    // 5 ---- check the password 
            // compare the password hash values of Database.password and the user entered password
            const correctPassword = await bcrypt.compare(password, userExists.password)

            // if password wrong 
            if(!correctPassword){
                return res.json({message:"user password incorrect!.", success:false})
            }


            // 7---- we use JWT for storing the user data in cookies , so user not require to login again and again
                // jwt.sign(payload, secretOrPrivateKey, [options, callback])
                const token = jwt.sign({userId:userExists._id}, process.env.JWT_SECRET, {expiresIn:'2h'}) // expire the token in 2hour and secret key use for token verfication when it further anywhere used

    //6---- if all above cases passed then user log In
    res.json({message:`${userExists.name} login successfully!.`,token, success:true})

}