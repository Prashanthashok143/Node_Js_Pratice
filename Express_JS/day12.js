const express=require("express");
const app=express();
const {adminHandler,userHandler} =require("./middlewares")
// app.use("/admin",(req,res,next)=>{
//     if(req.query.user=="admin"){
//         next();
//     }else{
//         res.status(404).send("Unauthorized access")
//     }
// })
// app.use("/user",(req,res,next)=>{
//     if(req.query.user=="user"){
//         next();
//     }else{
//         res.status(404).send("Unauthorized access")
//     }
// })

app.get("/home",(req,res)=>{
    throw new Error("Iam an error OK !!")
})

app.get("/admin/home",adminHandler,(req,res)=>{
    res.status(200).send("Welcome to home of admin")
})
app.get("/admin/services",adminHandler,(req,res)=>{
    res.status(200).send("Welcome to services of  admin")
})
app.get("/user/home",userHandler,(req,res)=>{
    res.status(200).send("Welcome to home of user")
})
app.get("/user/services",userHandler,(req,res)=>{
    res.status(200).send("Welcome to services of user")
})
 ///// we should the universal error at last of all api's
app.use("/",(err,req,res,next)=>{
    if(err){
     res.status(500).send("Something was occur, Please Verify it")   
    }
})
app.listen(1111,()=>{
    console.log("Server is Running on 1111")
})