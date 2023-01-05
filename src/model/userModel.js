const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const userschema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },password:{
        type:String,
        required:true,     // * we can store hashed password in our database
        trim:true
    },
    profilePicture:{
        type:String,   // ! we have to store original pic in amazon aws-s3 and link of that pic will store in here
    },
    works:{
        type:ObjectId,
        ref:'works'
    }
   
}, { timestamps: true })

module.exports = mongoose.model("user",userschema)