let adminHandler=(req,res,next)=>{
if(req.query.user=="admin"){
next();
}else{
    res.send("Unauthorized access")
}
}
let userHandler=(req,res,next)=>{
if(req.query.user=="user"){
next();
}else{
    res.send("Unauthorized access")
}
}

module.exports={
    adminHandler,userHandler
}