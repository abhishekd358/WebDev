
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {type:String, require:true},
    email: {type:String},
    phone: {type:String, require:true},
    type: {type:String, require:true},
    // here we getting id from the User DB and storing in user , work as primary key for cookies base login
    user: {type: mongoose.Schema.Types.ObjectId}
})

export const ContactDB = mongoose.model("contacts", contactSchema); // contacts -> collection Name , ContactDB -> reference variable for DB management