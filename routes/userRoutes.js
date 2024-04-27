// import the express router
const express= require('express');
const userRouter= express.Router();
const userController= require('../controllers/userController')
const auth = require('../middleware/auth');


//define the endpoints
userRouter.post('/register',userController.register);
userRouter.post('/login',userController.login);

//authorized end points
userRouter.get('/profile',auth.verifyToken,userController.getUser); //goto getUser only if authtoken verified
userRouter.put('/profile', auth.verifyToken, userController.updateUser);
userRouter.delete('/profile', auth.verifyToken, userController.deleteUser);

userRouter.get('/logout', auth.verifyToken, userController.logout);

//export the userRouter
module.exports=userRouter;