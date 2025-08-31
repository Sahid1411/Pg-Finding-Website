import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    gender: {
        type:String,
        required:true  
    },


    password:{
        type:String,
        required:true
    },

    phone:{  
        type:Number,
        // required:true 
    },

    address:{
        type:String,
        // required:true 
    }, 

},
   { collection: "owner" } 
)

export default mongoose.model("Owner",ownerSchema)
