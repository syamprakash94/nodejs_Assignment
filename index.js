const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const projectRoute = require("./routes/projects")

const cookieParser = require('cookie-parser')

const session = require('express-session');
const MongoStore = require('connect-mongo');



dotenv.config();

// mongoose connection
mongoose.connect('mongodb+srv://syam:1234@cluster0.15hv0f3.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true},()=>{
    console.log("connect to db");
}); 

 var data = MongoStore.create({mongoUrl:'mongodb+srv://syam:1234@cluster0.15hv0f3.mongodb.net/?retryWrites=true&w=majority',
 ttl: 14 * 24 * 60 * 60 })

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cookieParser())
app.use(session({
    secret: 'syam',
    store:data, 
    resave: true,
    saveUninitialized: true,
    
  }))

 
 

app.use("/api/users", userRoute);
app.use("/api/projects", projectRoute);



app.listen(3000,() => {
    console.log(" server connected ");
})  