const userModel=require("../models/userModel");

exports.getUsers=async(req,res)=>{
    try{
        const data = await userModel.find();
        res.status(200).send({message:"Data is fetched succesfully",data});
    }
    catch(e){
        res.send(401),send({message:e.message})
    }
}