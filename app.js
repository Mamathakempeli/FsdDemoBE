//require express
const express = require('express');

//require cors 
const cors = require('cors');

//require cookie parser
const cookieParser = require('cookie-parser');

//require morgan
const morgan = require('morgan')  //to log requests to the console 

//import the user routes
const userRouter = require('./routes/userRoutes');

//create an express application
const app = express();

//enable all CORS requests
app.use(cors({
    origin: '*', //allow all origins
    credentials: true
}));

//use morgan to log request to the console
app.use(morgan('dev'));

//use cookieparser
app.use(cookieParser());

 
//enable the express application to parse json
app.use(express.json());


//define the endpoints
//POST /api/users/register : register a new user
// app.post('/api/users/register',(request,response)=>{
//     response.send('Register a new user');
// })

app.use('/api/users',userRouter);

//export app module
module.exports=app;