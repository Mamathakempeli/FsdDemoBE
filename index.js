//import mongoose model
const mongoose = require('mongoose');

//import the config module
const config= require('./utils/config')

//connect to database
mongoose.connect(config.MONGODB_URI)
    .then(()=>{
        console.log("connected to mongoDB")
    })
    .catch((error)=>{
        console.log('Error while connecting to mongodb',error.message)    
    })