const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Skills")
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log(err));

  //Schema

  const skillsSchema=new mongoose.Schema({
    name:{type:String,require:true},
    Phone:Number,
    skill1:{type:String,require:true},
    skill2:{type:String,require:true},
    skill3:{type:String,require:true},
    rating:{type:String,require:true},
  })

  

  // Model

  const skillsModel=mongoose.model("skills",skillsSchema);

async function skillsData() {
      
  const Skills=new skillsModel({
    name:"Prashanth Shanigarapu",
    Phone:9542788305,
   
  })


  const result= await Skills.save();
  console.log(result);
}
skillsData();