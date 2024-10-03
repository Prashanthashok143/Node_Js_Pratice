const http=require("http");
const fs=require("fs");
const { json } = require("stream/consumers");
const { parse } = require("path");
const server=http.createServer((req,res)=>{
    if(req.method=="POST"){
        let body="";
     req.on("data",(chunk)=>{
    body+=chunk;
     });
     req.on("end",()=>{
       let userData=JSON.parse(body)
        fs.readFile("./Sample.js","utf-8",(err,data)=>{
            if(err){
                console.log("err")
                res.end();
            }else{ 
                const parsedData=JSON.parse(data);
            const verified=parsedData.find((value)=>value.name==userData.name)
            if(verified){
                res.write("data existed")
                res.end()
            }else{
                parsedData.push(userData)
                fs.writeFile("./Sample.js",JSON.stringify(parsedData),(err)=>{
                    if(err){
                        console.log("err")
                        res.end();
                    }else{
                        res.write("data updated");
                        res.end();
                    }
                })
               
                res.end();
            }
            }
        })
     })
    }else if(req.method=="DELETE"){
        let path=req.url.split("/")[1];
        fs.readFile("./Sample.js","utf-8",(err,data)=>{
            if(err){
                console.log("err")
                res.end();
            }else{ 
                const parsedData=JSON.parse(data);
               let dup= parsedData.filter((value)=>value.name!==path);
                fs.writeFile("./Sample.js",JSON.stringify(dup),(err)=>{
                    if(err){
                        res.write("error");
                        res.end();
                    }
                    else{
                        res.write("Remove Data");
                        res.end();
                    }
                })
            }})
       
    }else {
      res.end();
    }
})
server.listen(1300,()=>{
    console.log("Server running");
})