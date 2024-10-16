const express = require("express");
const app = express();
app.use(express.json())
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log(err));
  const familySchema=new mongoose.Schema({
     HeadofFamily:String,
     spouse:String,
     child1:String,
     child2:String,
  })
  const familyModel=mongoose.model("family_data",familySchema);
  app.post("/families",async(req,res)=>{
    const user =new familyModel({
      HeadofFamily:req.body.name,
      spouse:req.body.name,
      child1:req.body.child1,
      child2:req.body.child2,
    })
    await user.save();
    res.send({Success:"Data is inserted successfully"});
  })
  app.listen(9999,()=>{
    console.log("server is running on 9999")
  })
