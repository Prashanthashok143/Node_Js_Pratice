const express=require("express");
const router=express.Router();
const Joi=require("joi");
const mongoose=require("mongoose");

//Schema

const categoriesSchema=new mongoose.Schema({
    name:{type:String,required:true,minlength:3,maxlength:30}
})
// model
const categoriesModel=mongoose.model("categories",categoriesSchema);

const userSchema = Joi.object({
    name: Joi.string().min(3).max(30).required()
  });
router.get("/api/categories",async(req,res)=>{
    const categories=await categoriesModel.find();
    res.send(categories);

})
router.post("/api/categories",async(req,res)=>{
    const { error, value } = userSchema.validate(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
      }
    const category=new categoriesModel({
        name:req.body.name
    })   
     await category.save();
     res.send(category)

});
router.put("/api/categories/:id",async(req,res)=>{
    const { error } = userSchema.validate(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
      }
    const category=await categoriesModel.findByIdAndUpdate(req.params.id,{name:req.body.name},{new:true});
    if(!category) res.status(400).send("Data not found for that id");
    res.send(category)

})
router.delete("/api/categories/:id",async(req,res)=>{
    const category=await categoriesModel.findByIdAndDelete(req.params.id)
    if(!category) res.status(400).send("data not found for that id")
        res.send(category)
})
router.get("/api/categories/:id",async(req,res)=>{
    const category=await categoriesModel.find();
    res.send(category)
})

module.exports=router;
