import mongoose, { Model } from 'mongoose';


// now making the function

const UserSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, unique:true, required:true },
    age:{type:Number, min:15, max:100},
    createdAt :{
        type: Date,
        default: Date.now
    },
},{timestamps:true})


export const User = mongoose.model('User', UserSchema); // exporting UserSchema with User name