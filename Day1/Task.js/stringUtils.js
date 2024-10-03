function capitalizeFirstLetter(str){
    let cap=str.slice(0,1).toUpperCase();
    let res=cap+str.slice(1,str.length);
    return res;
}
function reverseString(str){
  let rev=str.split("").reverse().join("")
  return rev;
}
function countVowels(str){
    let pattern=/[aeiou]/gi;
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i].match(pattern)){
            count++;
        }
    }
    return count;
}
module.exports={
    capitalizeFirstLetter,
    reverseString,
    countVowels,
}