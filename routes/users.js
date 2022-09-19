const router = require("express").Router();

const {registerUser,loginUser, updateUser, checkUser, logoutUser, userDetails} = require("../Controller/userController")

// register user
router.route("/register").post(registerUser)
// login user
router.route("/login").post(loginUser)
// update user
router.route("/:id").put(checkUser, updateUser)
// get all user details
router.route("/userdetails").get(checkUser, userDetails)
// logout user
router.route("/logout").get(logoutUser)

module.exports = router  
