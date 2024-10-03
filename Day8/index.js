const http=require("http");
const fs=require("fs");
const path = require("path");
let obj={name:"Maheshwari"};
const server=http.createServer((req,res)=>{
    fs.readFile("./data.js","utf-8",(err,data)=>{
        if(err){
            res.write("error occured");
            res.end();
        }
        else{
           
         let parsedData=JSON.parse(data);
         let result=parsedData.find((value)=>value.name==obj.name);
         if(result){
            res.write("data already existed");
            res.end();
         }
         else{
            parsedData.push(obj);
            fs.writeFile("./data.js",JSON.stringify(parsedData),(err)=>{
                if(err){
                    res.write("error");
                    res.end();
                }else{
                    res.write("data added");
                    res.end();
                }
            })
         }
        
        
       
           

        }
    })
    
})
server.listen(1200,()=>{
    console.log("Server running on 1200")
})