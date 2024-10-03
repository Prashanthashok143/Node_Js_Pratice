const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Skills")
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log(err));

  // schema

  const skillsSchema= new mongoose.Schema({
    name:String,
    phone:Number,
    skill1:String,
    skill2:String,
    skill3:String,
    rating:Number

  });

  // model 
  const skillsModel=mongoose.model("skills",skillsSchema);


  // update function

  async  function updateData(id){
    let details=await skillsModel.findById(id);
    if(!details){
        return false
    }else{
        details.name="Ashok Shanigarapu";
        details.rating=4.8
        const updatedDetails=await details.save();
        console.log(updatedDetails);
    }
  }
  updateData("66fcf99c3426c4c75a21f3a8");
