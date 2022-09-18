const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
username:{
    type:String,
    require:true,
    min:3,
    max:100,
    unique:true,
},
email:{
    type:String,
    require:true,
    max:50,
    unique:true,
},
password:{
    type:String,
    require:true,
    min:6,
},
isAdmin:{
    type:Boolean,
    default:false,
},

});

module.exports = mongoose.model("User", UserSchema);