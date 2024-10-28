const express=require("express");
const router=express.Router();
// const userControllers=require("../controllers/userController");
const {register}=require("../controllers/register");
const {login}=require("../controllers/login");
const {getUsers}=require("../controllers/getUsers");
const {verifyToken}=require("../middlewares/verifyToken")
const multer= require("multer");

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,__dirname)
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
});
const upload=multer({
    storage:storage
})
router.post("/register",upload.single("Profile"),register);
router.post("/login",login);
router.get("/users",verifyToken,getUsers) 
module.exports=router;