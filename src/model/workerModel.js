const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const workerschema = new mongoose.Schema({
   name:{
    type:String,
    required:true,
    trim:true
   },
   jobTitle:{
    type:String,
        required:true,
        trim:true
   },
   workexperience:{
    type:Number
   },
   contactNumber:{
    type:Number,
    required:true,
   },
   email:{
    type:String,
    required:true,
   },
   password:{
    type:String  // * we will store hashed pasword of users in database
   },
   skills:{
    type:Array,
    required:true,
    minCount:1,
    trim:true
   },
   about:{   // * description about your works and experioence
    type:String,
    trim:true
   },
   profilePicture:{
    type:String,   // * we have to store original pic in amazon aws-s3 and link of that pic will store in here
},
address:{
    type:Array // * we can use cuurent address by linking google maps
},
works:{
    active:{
type:Array
    },
    pending:{
type:Array
    },
    completed:{
type:Array
    }
},
favourites:{
    type:Array // * here we can store favorites works 
},
earned:{
    type:Number,
    default:0  // * default case 0 or any joining bonus if we give 
},
feedback:{
    type:ObjectId,
    ref:'works'
} , //   * here we can give any feedback and user details also for feedback reference
wallet:{
    type:Number,
    default:0   // * we have to store wallet balance here
}
}, { timestamps: true })

module.exports = mongoose.model("worker",workerschema)