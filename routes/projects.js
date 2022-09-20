const router = require("express").Router();

const {addProject,getProjects,editProject,deleteProject} = require("../Controller/projectController")

// add project
router.route("/add").post(addProject)
// get all projects
router.route("/getprojects").get(getProjects)
// edit project
router.route("/editproject/:projectId").put(editProject)
// delete project
router.route("/deleteproject/:projectId").delete(deleteProject)



module.exports = router  