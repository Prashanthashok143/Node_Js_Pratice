console.log("Iam Common JS Module File1");
function File1(){
    console.log("Iam File1 Function")
}

// Module : A set of functions we want to include in your application.
//By default Modules will protect the functions and varibales form leakage
console.log(module.exports) // It is an Object
module.exports={
    fun:File1, // key : fun and value : File1
    File1, // key and value is File1
}