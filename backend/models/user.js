const mongoose  =  require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    
    phone:{
        type:String
    },
    website:{
        type:String
    },
    photo:{
        type:String
    }
   
    
})

module.exports = mongoose.model("User",userSchema);