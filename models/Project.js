const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    projectname: {
      type: String,
      required: true,
      max: 100,
    },
    startdate: {
      type: Date,
    //   required: true,
    },
    estimatedhours: {
      type: String,
    //   required: true,
    },
    toolstobeused: {
      type: Array,
    //   required: true,
    },
    methodology: {
      type: String,
    //   required: true,
    },
    noofdevelopers: {
      type: Number,
    //   required: true,
    },
    mobileapp: {
      type: Boolean,
      default: false,
    },
  }

  // {timestamps:true}
);

module.exports = mongoose.model("Project", ProjectSchema);
