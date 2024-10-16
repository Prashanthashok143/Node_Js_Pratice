const userModel=require("../models/userModel");
const bcrypt=require("bcrypt");

async function comparePwd(input,hashedPwd){
    try{
        return await bcrypt.compare(input,hashedPwd)
    }
    catch(e){
        console.log(e)
    }
}


exports.login=async(req,res)=>{
    const{email,password}=req.body;
    if(!email || !password){
        return res.status(404).send({message:"Please fill all the fields"})
    }
    const emailValidate=await userModel.findOne({email});
    if(!emailValidate){
        return res.status(404).send({message:"Email not exits"})
    }
   const pwdCompare=await comparePwd(password,emailValidate.password);
   if(!pwdCompare){
    return res.status(404).send({message:"password not matched"})
   }
   res.send({message:"Login suucessfully"})
}