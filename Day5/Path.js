const http=require("http");
const {books}=require("./Books.js")
const port=4000;
const server=http.createServer((req,res)=>{
    res.writeHead(200)
    const path=req.url;
    const pathArray=path.split("/");
    const book_name=pathArray[1];
    
    console.log(book_name)
   const Data=books.find(({name})=>(
   book_name==name
   ))
  if(book_name==""){
    res.write("welcome to book stall")
  }
  else if(!isNaN(book_name)){
    res.write("Enter a valid bookname")
  }
  else if(typeof(book_name)=="string" && Data){
    res.write("Book Details Matched");
  }
  else{
    res.write("Not Matched")
  }
  
    res.end();
})
server.listen(port,()=>{
    console.log("Iam Excuting Path")
})