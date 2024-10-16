const epxress = require("express");
const app = epxress();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
app.use(epxress.json());

// DB connection
mongoose
  .connect("mongodb://localhost:27017/PasswordDcrypt")
  .then(() => console.log("db is connected"))
  .catch((err) => console.log(err));


  //Schema 

  const pwdSChema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
  })

  //Model

  const pwdModel=mongoose.model("userDetails",pwdSChema);


  // dcrypt function
async function PasswordDcrypt(input) {
  try {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(input, salt);
  } catch (err) {
    console.log(err);
  }
}

app.post("/password", async (req, res) => {
  let pwd = req.body.password;
  let encrypt = await PasswordDcrypt(pwd);
  const pwdData=new pwdModel({
    name:req.body.name,
    email:req.body.email,
    password:encrypt
  })
  await pwdData.save()
 
  res.send({pwdData});
});
app.listen(3000, () => {
  console.log("Server running on 3000");
});
