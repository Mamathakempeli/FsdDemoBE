//import mongoose model
const mongoose = require('mongoose');

//import the config module
const config= require('./utils/config')

//import app module
const app = require('./app')

//connect to database
mongoose.connect(config.MONGODB_URI)
    .then(()=>{
        console.log("connected to mongoDB")
        //start server listen to the port
        app.listen(config.PORT,()=>{
            console.log(`server running on port ${config.PORT}`);
        })
    })
    .catch((error)=>{
        console.log('Error while connecting to mongodb',error.message)    
    })


