const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{
fs.mkdir(`${__dirname}/src/node_pratice`,{recursive:true},(err,data)=>{
    if(err){
        console.log("error");
        res.end();
    }
    else{
       
        console.log("directory created");
        res.end();
    }
})
})
server.listen(1300,()=>{
    console.log("server running on 1300")
})

// for removing files and directories
//fs.rm(`${__dirname}/src/node_pratice`,{recursive:true})