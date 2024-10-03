const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("Iam normal")
})
app.get("/home",(req,res)=>{
    res.send("Iam home")
})
app.post("/post",(req,res)=>{
    res.send("Iam post")
})
app.delete("/delete",(req,res)=>{
    res.send("Iam delete")
})
app.put("/put",(req,res)=>{
    res.send("Iam put")
})

app.listen(3000,()=>{
    console.log("Server running on 3000")
})