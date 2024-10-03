// To include a module, use the require() function with the name of the module:
const{fun,File1,File2,Fun,x}=require("./index");
const {capitalizeFirstLetter,reverseString,countVowels} =require("../Day1/Task.js/stringUtils");
fun();
File1();
File2();
Fun.File3("Hello Iam File3")
console.log(x)
console.log(capitalizeFirstLetter("prashanth"));
console.log(reverseString("prashanth"));
console.log(countVowels("suoidea"));