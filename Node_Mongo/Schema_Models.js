const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Skills")
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log(err));

  //Schema

  const skillsSchema=new mongoose.Schema({

    // validation
    name:{type:String,required:true},
    Phone:Number,
    skill1:{type:String,required:true},
    skill2:{type:String,required:true},
    skill3:{type:String,required:true},
    rating:{type:String,required:true},
  })

  

  // Model

  const skillsModel=mongoose.model("skills",skillsSchema);

async function skillsData() {
      
  const Skills=new skillsModel({
    name:"venkatanarsaiah Shanigarapu",
    Phone:9542788395,
    skill1:"Fullstack",
    skill2:"Python",
    skill3:"java",
    rating:3.8,

   
  })

   try {
  const result=  await Skills.save();
  console.log(result)
 
  // await Skills.validate()
  // instead of these , we can use await Skills.validate() to validate the errors
   } catch (error) {
    console.error(error.message)
   }
}
skillsData();