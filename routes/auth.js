const router = require("express").Router();
const User =  require("../models/User");


// register

router.get("/register", async (req,res)=>{
    const user = await new User({
        username:"syam",
        email:"syam@gmail.com",
        password:"12345"
    })
   await user.save(); 
   res.send("ok")
})
 
module.exports = router 