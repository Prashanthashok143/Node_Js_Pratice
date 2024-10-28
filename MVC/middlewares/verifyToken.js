const jwt=require("jsonwebtoken")
const Secret_Key="PrashanthShanigarapu";
const userModel=require("../models/userModel")
exports.verifyToken=async(req,res,next)=>{
    const token=req.headers["authorization"];
    const token_arr=token.split(" ")
   
    if(!token){
        return res.status(401).send({message:"there is no token fetched"})
    }
    jwt.verify(token_arr[1],Secret_Key,async(err,decode)=>{
        if(err){
            return res.status(401).send({message:"unauthorized access"})
        }

        try{
            const user=await userModel.find({_id:decode.id});
            if(!user){
                return res.status(401).send({message:"unauthorized user"})
            }
            req.user=user;
            next();
        }
        catch(err){
            res.status(500).send({message:err.message})
        }
    })
}

