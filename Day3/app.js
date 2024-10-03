const http=require("http");
const port =4000;
const data=[
    { name: "Honda", color: "Blue", price: 100000 },
        { name: "Tvs", color: "black", price: 130000 }
]
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-Type":"application/json"});
    res.write(JSON.stringify(data));
    res.end();
})
server.listen(port,()=>{
    console.log("Done")
})