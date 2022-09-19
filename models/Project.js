const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema({
    projectname:{
        type:String,
        required:true,
        max:100
    },
    startdate:{
        type:Date,        
    },
    estimatedhours:{
        type:String,
    },
    toolstobeused:{
        type:Array,
    },
    methodology:{
        type:String,
    },
    noofdevelopers:{
        type:Number
    },
    mobileapp:{
        type:Boolean,
    }

}

// {timestamps:true} 
);

module.exports = mongoose.model("Project", ProjectSchema);