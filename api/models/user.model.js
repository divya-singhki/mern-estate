 import mongoose from "mongoose";

 const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true, 
    },
    passoword:{
        type: String,
        required: true, 
    }

 },{timestamps: true});
    const user= mongoose.model('user',userSchema);
    export default user;