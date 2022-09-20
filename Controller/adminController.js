const User = require("../models/User");
const Project = require("../models/Project");
const session = require('express-session');



// session
const checkAdmin = (req, res, next) => {
    if (req.session.admin) {
        next();
    }else {
        res.json("not loggedin")
    }
}

// admin login 
const cridential = {
    email:"admin@gmail.com",
    password:1234
  }

  adminLogin = async (req,res) => {
    if (req.body.email == cridential.email && req.body.password == cridential.password) {
        // req.session.admin = true
        res.status(200).json("login completed successfully")
      } else {
        res.status(500).json("Invalid emailid or password")
      }
  }

  const logoutAdmin = async(req,res) => {
    req.session.admin =null;
    res.status(200).json("logged out successfully") 
}

  module.exports = {adminLogin,checkAdmin,logoutAdmin}
