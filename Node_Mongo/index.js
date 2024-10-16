const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt=require("bcrypt");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose
  .connect("mongodb://localhost:27017/Register")
  .then(() => console.log("DB is connected"))
  .catch((e) => console.log(e));

//Schema
const detailSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
//Model
async function PasswordDcrypt(input){
    const salt=await bcrypt.genSalt(10);
    return bcrypt.hash(input,salt);
}
 async function validatePassword(input,hashedPassword){
    try{
        return await bcrypt.compare(input,hashedPassword)
    }
    catch(e){
        console.log(e)
    }
 }
const detailsModel = mongoose.model("Signup", detailSchema);

app.post("/register", async(req, res) => {
  const { name, email, password } = req.body;
  if(!name || !email || !password){
    return res.send({message:"Please fill all the details"});
  }
  const emailValidate=await detailsModel.findOne({email});
  if(emailValidate){
    return res.status(404).send({message:"Email already exsitied"});
  }
  const encrypt=await PasswordDcrypt(password)
  
  const Users = new detailsModel({
    name: name,
    email: email,
    password: encrypt,
  });
 await Users.save();
 res.send("registered successfully")
});

app.post("/login",async(req,res)=>{
    const{email,password}=req.body;
    if(!email || !password){
        return res.status(404).send({message:"Required all creditionals"})
    }  
    const dataFromDB=await detailsModel.findOne({email});
    if(!dataFromDB){
      return res.status(404).send({message:"Email not exsits"});
    }
   const ispassword=await validatePassword(password,dataFromDB.password);
   if(!ispassword){
    return res.status(404).send({message:"Password not exists"})
   }
   res.send("Login Successfully")
})

app.listen(1000, () => {
  console.log("Server is running 1000");
});
