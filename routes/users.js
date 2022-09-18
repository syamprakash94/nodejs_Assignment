const router = require("express").Router();

router.get("/",(req,res)=>{
    res.send("userroute")
})

module.exports = router