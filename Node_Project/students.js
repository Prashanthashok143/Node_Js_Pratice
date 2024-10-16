const express=require("express");
const Joi=require("joi")
const mongoose=require("mongoose");
const router=express.Router();

//Schema
const studentSchema=new mongoose.Schema({
    name:{type:String,required:true,minlength:3,maxlength:25},
    age:{type:Number,required:true},
    phone:{type:Number,required:true},
    state:{type:String,required:true}
})

//model
const studentModel=mongoose.model("students",studentSchema);
const studentsValidate = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    age: Joi.number().integer().min(18).max(60).required(),
    phone: Joi.string().pattern(/^[0-9]{10}$/).required(),
    state: Joi.string().min(2).max(20).required()
  });
router.get("/api/students",async(req,res)=>{
    const student=studentModel.find();
    res.send(student);
})
router.post("/api/students",async(req,res)=>{
   const {error}= studentsValidate.validate(req.body)
   if(error) res.status(400).send(error.details[0].message)
    const student=new studentModel({
        name:req.body.name,
        age:req.body.age,
        phone:req.body.phone,
        state:req.body.state
    })
    await student.save();
    res.send(student)
})
router.put("/api/students/:id",async(req,res)=>{
    const {error}= studentsValidate.validate(req.body)
   if(error) res.status(400).send(error.details[0].message);
   const student=await studentModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
   student.save();
   res.send(student)
})
module.exports=router;

