const http=require("http");
const port =4000;
const successMessage="Success";
const statusCode=200;
const data={
    
    name:"Prashanth",age:22
}
const response={
    message:successMessage,
    status:statusCode,
    data:data
}

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-Type":"application/json"})
    res.write(JSON.stringify([response]));
    res.end("It eod server");
})
server.listen(port,()=>{
console.log("Iam running on port ",port)
})