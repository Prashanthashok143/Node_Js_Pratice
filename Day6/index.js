const http=require("http");
const port=1000;
const Data=(req,res,next)=>{
    let body="";
    req.on("data",(chunk)=>{
        body+=chunk;
    })
    req.on("end",()=>{
        console.log(req.body)
        req.body=body;
        next();
    })
}
const server=http.createServer((req,res)=>{
    Data(req,res,()=>{
        res.writeHead(200,{"content-Type":"application/json"});
        res.write((req.body));
        res.end();
    })
})
server.listen(port,()=>{
    console.log("Running")
})