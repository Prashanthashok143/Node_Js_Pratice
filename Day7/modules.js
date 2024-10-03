const http=require("http");
const fs=require("fs");
const { stringify } = require("querystring");
const info=" Prashanth";
const arr1=[1,2,3]
const arr3=[7,8,9]
const server=http.createServer((req,res)=>{
fs.readFile("./Sample.txt","utf-8",(err,data)=>{
    if(err){
        res.write("Error Occured");
        res.end();
    }
    else{
        const finalData=data+info+arr1;
        fs.writeFile("./Sample.txt",finalData,(err)=>{
           if(err){
           res.write("error occured");
           res.end();
           }else{
            info
            res.write("data concateted");
            res.end();
           }
        })
        fs.readFile("./Sample.js","utf-8",(err,data)=>{
            if(err){
                res.write("error in sample.js")
            }
            else{
                
                const parsedata=JSON.parse(data);
                const res=parsedata.concat(arr3);

                
               
                fs.writeFile("./Sample.js",JSON.stringify(res),(err)=>{
                    if(err){
                        res.write("Error");
                        res.end();
                    }
                })
            }
        })
       
      
    }
})

})
server.listen(1100,()=>{
    console.log("Server is running on the port 1100")
})