const express=require("express");
const app=express();
let nameValidater=(req,res,next)=>{
    if(req.query.name){
        if(/^[a-zA-Z]+$/.test(req.query.name)){
            next();
        }else{
            res.send("Validate name is required");
        }
    }else{
        res.send("Name is required")
    }
}
app.get("/",(req,res)=>{
    console.log(req.query) // object
    res.send(req.query) // empty object
})
app.get("/ab?c",(req,res)=>{               // b is optional
    res.send("server abc is running")
})
app.get("/cd+e",(req,res)=>{               // d is 1 or more
    res.send("server cde is running")
})
app.get("/ef*g",(req,res)=>{               // after f any character is accepted
    res.send("server efg is running")
})
app.get(/.*script$/,nameValidater,(req,res)=>{               // after f any characters is accepted
    res.send(req.query)
})
app.listen(1000,()=>{
    console.log("Server running on 1000")
})