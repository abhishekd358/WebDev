MVC : Dummping all code in to one file , we create different Folder and store our chuck of code in it .
    Model - Data Layer - where database Schema define
    View - Presentation Layer - we already Learn, .ejs File goes in it
    Controller - Logic Layer - Were we handle route functions of CRUD operation.

    for extra knowledge:
        Route - were we maintain our route passing function that we created in Controller for CRUD operation



Model:


-model is the Schema for the database.
-When we connected the mongoose we need to push data from user input to Database for that we need a Schema Data.
-All Schema(structure) of Data Write into the Model folder's file.
-Steps :
    1. create a Model Folder 
    2. inside it create a File Name .js name should be database kind related
    3. mongoose provide Schema() method were we declare our schema structure
    4. while exporting
            > export const <export_name> = mongoose.model(l)

example : >Model
            >User.js
                import mongoose, { Model } from 'mongoose';
                // now making the function
                const UserSchema = new mongoose.Schema({
                        name:{type:String, required:true },
                        email:{type:String, unique:true, required:true },
                        age:{type:Number, min:15, max:100},
                        createdAt :{
                                type: Date,
                                default: Date.now
                                }
                },{timestamps:true});
                export const User = mongoose.model('User', UserSchema); // exporting UserSchema with User name


- Here is the Properties of Schema 
type => data type
required => this filed not be empty, make mandatory
unique => no duplication
default => set default value
enum => restrict to specific value. example: enum : ['books','toys','electronics']
max => max value of the field number
min => min value of the field number
max => max length of the field string
min => min length of the field string
validate => custom validation function
timestamps => return time stamp




View:
    - as our model is ready . Now we take data from form and push into DB
    

