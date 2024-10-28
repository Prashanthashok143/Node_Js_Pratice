const jwt=require("jsonwebtoken");
const str="PrashanthAshok";
const secret_key="Phshdh2";
const encoded_str=jwt.sign(str,secret_key);
console.log(encoded_str)
const decoded_str=jwt.verify(encoded_str,secret_key);
console.log(decoded_str)