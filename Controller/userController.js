const User = require("../models/User");
const bcrypt = require("bcrypt");
const session = require('express-session');

// session
const checkUser = (req, res, next) => {
    if (req.session.user) {
        next();
    }else {
        res.json("not loggedin")
    }
}

// register user
const registerUser = async (req, res) => {
  try {
    //generate new password and bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      phonenumber: req.body.phonenumber,
    });

    const user = await newUser.save();

    res.status(200).json(user);
  } catch (error) {
    console.log("error");
    res.status(500).json(error);
    console.log(error);
  }
};

//login user

loginUser = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
   
    if (user && (await bcrypt.compare(req.body.password, user.password))) {

        req.session.user =req.body.email;
        console.log(req.session);
      res.status(200).json(user);
    } else {
      res.status(500).json("Invalid Email or Password"); 
    }
  };

  //update user
updateUser = async (req, res) => {
    console.log(req.body);
    console.log("body");
    console.log(req.session,"kkkk");
    if (req.body.userId === req.params.id || req.body.isAdmin) {
      if (req.body.password) {  
       
        try {
          const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(req.body.password,salt);
        } catch (err) {
          console.log(err);
          return res.status(500).json(err);
        }
      }
      try {
        const user = await User.findByIdAndUpdate(req.params.id, { 
          $set: req.body,
        });
        res.status(200).json("Account has been updated");
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(403).json("You can update only your account!");
    }
  };

//   get all user details
const userDetails = async(req,res)=>{
    try{
        const user = await User.find({
            _id:{$nin:req.body.userId}
        },{username:1,_id:0,email:1,phonenumber:1})
        res.status(200).json(user) 
    }catch (err) {
        res.status(500).json(error);
    }
}

//   logout user
const logoutUser = async(req,res) => {
    req.session.user =null;
    res.status(200).json("logged out successfully") 
}


module.exports = { checkUser,registerUser,loginUser,updateUser,logoutUser,userDetails };  
