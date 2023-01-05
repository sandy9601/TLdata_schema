const mongoose = require("mongoose")

const worksschema = new mongoose.Schema({
    worktype:{
        type:String
    },
    photo:{
        type:String    // * we have to store picture of the work detail in one of cloud services e i amazon aws-s3-
    },
    jobdescription:{
        type:String
    },
    location:{
        type:String    // * we have to store location of the work detail we can also sync with using google maps
    },
    price:{
        type:Number
    }
   
}, { timestamps: true })

module.exports = mongoose.model("works",worksschema)