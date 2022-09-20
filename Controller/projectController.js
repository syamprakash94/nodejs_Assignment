const Project = require("../models/Project");

// add project
const addProject = async (req, res) => {
  const newProject = new Project({
    userId:req.body.userId,
    projectname: req.body.projectname,
    startdate: req.body.startdate,
    estimatedhours: req.body.estimatedhours,
    toolstobeused: req.body.toolstobeused,
    methodology: req.body.methodology,
    noofdevelopers: req.body.noofdevelopers,
    mobileapp: req.body.mobileapp,
    
  });
  try {
    const savedProject = await newProject.save();
    res.status(200).json(savedProject);
  } catch (err) {
    res.status(500).json(err);
  }
};

// get all project
getProjects = async (req, res) => {
  try {
    const projects = await Project.find()
    res.status(200).json([projects])
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

// edit project
editProject = async (req,res) => {
  try{
    const project = await Project.findOneAndUpdate({
      $and:[{_id:req.params.projectId},{userId:req.body.userId}]
    },{$set:req.body})
    if(project){
      res.status(200).json("Project updated")
    }else{
      res.status(400).json("not found")
    }
   
  } catch (err){
    res.status(500).json(err);
  }
} 


// delete project
deleteProject = async (req,res) => {
  try {
    const project = await Project.findOneAndDelete({
      $and:[{_id:req.params.projectId},{userId:req.body.userId}]
    },{$set:req.body})
    res.status(200).json("project deleted")
  } catch (error) {
    res.status(500).json(err);
  }
}



module.exports = {addProject,getProjects,editProject,deleteProject}