const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    Profile:String
})

const userModel=mongoose.model("userRegistration",userSchema);

module.exports=userModel;