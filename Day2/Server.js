const http=require("http");
const port=3100;
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-Type":"text/plain"});
    res.end("Iam PRashanth");
})
server.listen(port,()=>{
    console.log("Iam Port 3100")
})