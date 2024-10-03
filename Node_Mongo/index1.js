const express = require("express");
const app = express();
const {dbHandler}=require("./db.js");
const {  mongoose } = require("mongoose");
dbHandler();
const postSchema=new mongoose.Schema({});
const dbData=mongoose.model("posts",postSchema);
app.get("/home",async(req,res)=>{
    try{
        const posts=await dbData.find();
        res.json(posts)
    }catch(err){
        res.status(404).send("data not found")
    }
})

app.listen(3000, () => {
  console.log("Server is running");
});
