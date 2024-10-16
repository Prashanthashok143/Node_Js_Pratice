const userModel=require("../models/userModel");
const bcrypt=require("bcrypt");


async function pwdValidate(input){
    try{
      const salt= await bcrypt.genSalt(10);
      return bcrypt.hash(input,salt)
    }
    catch(e){
      console.log(e)
    }
  }


  exports.register=async(req,res)=>{
    const {name,email,password}=req.body;
    if(!name || !email || !password){
        return res.status(404).send({message:"Please fill all the details"})
    }
    const emailValidate=await userModel.findOne({email});
    if(emailValidate){
        return res.status(404).send({message:"Email already exists"});
    }
   const encrypt=await pwdValidate(password);
    const User=new userModel({
        name:name,
        email:email,
        password:encrypt
    })
    await User.save();
    console.log(User)
    res.status(200).send({message:"Registered Successfully"});


}