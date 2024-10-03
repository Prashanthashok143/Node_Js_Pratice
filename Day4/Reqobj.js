const http=require("http");
const port=3000;
const url=require("url");
const data1={
    name:"Prashanth",
    role:"Software Developer"
}
const data2={
    name:"Prashanth",
    role:"Data Scientist"
}
const server=http.createServer((req,res)=>{
    console.log(req.headers.host); // localhost:3000
    // console.log(url.parse(req.url)) // req.url - used to get the path
     // console.log(url.parse(fullUrl))
    let fullUrl=`http://${req.headers.host}${req.url}`;
    let structuredUrl=url.parse(fullUrl);
  let path=structuredUrl.path
    if(path=="/home"){
        res.writeHead(200,{"content-Type":"application/json"})
        res.write(JSON.stringify({status:200,statusMessage:"Data retrieved Successfully",data1}));
    }else if(path=="/aboutus"){
        res.writeHead(200,{"content-Type":"application/json"})
        res.write((JSON.stringify({status:200,statusMessage:"Data retrieved Successfully",data2})))
    }else{
        res.writeHead(404)
        res.write("page not found")
    }
            res.end();
})
server.listen(port,()=>{
    console.log("server is running")
})