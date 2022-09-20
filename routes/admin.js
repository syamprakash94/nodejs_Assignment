const router = require("express").Router();

const { adminLogin,checkAdmin,logoutAdmin,adminEditProject,adminDeleteProject } = require("../Controller/adminController");
const { getProjects} = require("../Controller/projectController");


// add project
router.route("/adminlogin").post(adminLogin)
// get all projects
router.route("/getprojects").get(checkAdmin,getProjects)
// edit project admin
router.route("/editproject/:projectId").put(checkAdmin,adminEditProject)
// delete project admin
router.route("/deleteproject/:projectId").delete(checkAdmin,adminDeleteProject)
// logout user
router.route("/logoutadmin").get(logoutAdmin)


module.exports = router 