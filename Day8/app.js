const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{
    if(req.method=="POST"){
       
        let body="";
        req.on("data",(chunk)=>{
        body+=chunk
        })
        req.on("end",()=>{
            fs.writeFile("./data.js",body,(err)=>{
                if(err){
                    res.write("error occured");
                    res.end();
                }else{
                    res.writeHead(200,{"content-type":"application/json"})
                    res.write(JSON.stringify(body));
                    res.end();
                }
            })
          
        })
       
    }else{
        res.writeHead(404,{"content-type":"application/json"})
        res.write("Invalid Method");
        res.end();
    }
})
server.listen(1300,()=>{
    console.log("Server running on 1300")
})