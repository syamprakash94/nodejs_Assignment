const Project = require("../models/Project");

const addProject = async (req, res) => {
  const newProject = new Project({
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



module.exports = {addProject}