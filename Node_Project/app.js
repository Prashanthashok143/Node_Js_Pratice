const express=require("express");
const categories=require("./categories.js");
const student=require("./students.js");
const mongoose=require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/node_project")  // under these db , categories , students doc will be create
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log(err));
const app=express();

app.use(express.json())
app.use(categories);
app.use(student);
app.listen(3000,()=>{
    console.log("server is running on 3000")
})

