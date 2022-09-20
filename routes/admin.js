const router = require("express").Router();

const { adminLogin,checkAdmin,logoutAdmin } = require("../Controller/adminController");
const { getProjects, editProject, deleteProject } = require("../Controller/projectController");


// add project
router.route("/adminlogin").post(adminLogin)
// get all projects
router.route("/getprojects").get(checkAdmin,getProjects)
// edit project
router.route("/editproject/:projectId").put(checkAdmin,editProject)
// delete project
router.route("/deleteproject/:projectId").delete(checkAdmin,deleteProject)
// logout user
router.route("/logoutadmin").get(logoutAdmin)


module.exports = router 