const express=require("express");
const mongoose=require("mongoose");
const router=require("./routes/routes");
const app=express();
app.use(express.json());
app.use(router)

mongoose.connect("mongodb://localhost:27017/Register").then(()=>console.log("DB is connected")).catch((err)=>console.log(err))

app.listen(2000,()=>{
    console.log("Server is running on 2000")
})
