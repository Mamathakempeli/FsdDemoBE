// import the express router
const express= require('express');
const userRoutes= express.Router();
const userController= require('../controllers/userController')

//define the endpoints
userRoutes.post('/register',userController.register)

//export the userRouter
module.exports=userRoutes;