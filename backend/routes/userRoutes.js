const express=require("express");
const router=express.Router();
const User=require("../models/User");

router.post("/",async(req,res)=>{
try{
const user=new User(req.body);
await user.save();
res.json(user);
}
catch(err){
res.status(500).json(err);
}
});

router.get("/",async(req,res)=>{
try{
const users=await User.find();
res.json(users);
}
catch(err){
res.status(500).json(err);
}
});
module.exports=router;