//require express
const express = require('express');

//import the user routes
const userRouter = require('./routes/userRoutes');

//create an express application
const app = express();
 
//define the endpoints
//POST /api/users/register : register a new user
// app.post('/api/users/register',(request,response)=>{
//     response.send('Register a new user');
// })

app.use('/api/users',userRouter);

//export app module
module.exports=app;