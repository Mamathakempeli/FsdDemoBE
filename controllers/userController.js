const User = require('../models/userModel')
const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken');
//import the config module
const config= require('../utils/config')

//define the controler object
const userController = {
     register: async(req,res)=>{
        try{
       // get the user inputs from the request body
         const {username, password, name, location }= req.body; //destructure the data from rew.body postman
          // check if the user already exists in the database
          const user = await User.findOne({ username });

          // if the user exists, return an error
          if (user) {
              return res.status(400).json({ message: 'User already exists' });
          }

          // hash the password
          const passwordHash = await bcrypt.hash(password, 10);  //await for synchronous process

          // 3.if the user does not exist, create a new user
          const newUser = new User({
              username,
              passwordHash,
              name,
              location
          });

          // 4.save the user to the database
          const savedUser = await newUser.save();

          // return the saved user
          res.status(201).json({
              message: 'User created successfully',
              user: savedUser
          });

      }catch(error){
           res.status(500).json({message: error.message});
           console.log(error)
        }
     },

     login: async(req,res)=>{
      try{
       // we need only username and password for login
       const {username, password }= req.body; //destructure the data from rew.body postman

        // check if the user exists in the database
        const user = await User.findOne({ username });

        // if the user does not exists, return an error
        if (!user) {
            return res.status(400).json({ message: 'User Not found' });
        }

        // if user exists, check the pasword is correct or not
        const isPasswordCorrect = await bcrypt.compare(password, user.passwordHash);  //await for synchronous process

        //return error if password is incorrect
        if(!isPasswordCorrect){
           return res.status(400).json({message: 'Invalid credentials'});
        }

        //if password is correct,generate a token(using jsonwebtoken) for the user and return it
        const token = jwt.sign({
            username: user.username,
            id: user._id,
            name: user.name,
         }, config.JWT_SECRET); //JWT_SECRET define in .env & export it in utils/config fle

         // set a cookie with the token > it stores token in cookie in POSTMAN
         res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'none',
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
            secure: true,
         });

         // return the token
         res.json({ message: 'Login successful', token });
    }catch(error){
         res.status(500).json({message: error.message});
         console.log(error)
      }
   },
   
   getUser: async (request, response) => {
      try {
          // get the user id from the request object
          const userId = request.userId;

          // find the user by id from the database
          const user = await User.findById(userId).select('-passwordHash -__v -_id'); 

          // if the user does not exist, return an error
          if (!user) {
              return response.status(404).json({ message: 'User not found' });
          }

          // if the user exists, return the user
          response.json({ message: 'User found', user });
          
      } catch (error) {
          response.status(500).json({ message: error.message });
      }
  },
  
  getUser: async (request, response) => {
   try {
       // get the user id from the request object
       const userId = request.userId;

       // find the user by id from the database
       const user = await User.findById(userId).select('-passwordHash -__v -_id');

       // if the user does not exist, return an error
       if (!user) {
           return response.status(404).json({ message: 'User not found' });
       }

       // if the user exists, return the user
       response.json({ message: 'User found', user });
       
   } catch (error) {
       response.status(500).json({ message: error.message });
   }
},

updateUser: async (request, response) => {
   try {
       // get the user id from the request object
       const userId = request.userId;

       // get the user inputs from the request body
       const { name, location } = request.body;

       // find the user by id from the database
       const user = await User.findById(userId);

       // if the user does not exist, return an error
       if (!user) {
           return response.status(404).json({ message: 'User not found' });
       }

       // update the user if the user exists, and data is valid
       if (name) user.name = name;
       if (location) user.location = location;

       // save the updated user to the database
       const updatedUser = await user.save();

       // return the updated user
       response.json({ message: 'User updated successfully', user: updatedUser });
   } catch (error) {
       response.status(500).json({ message: error.message });
   }
},

deleteUser: async (request, response) => {
   try {
       // get the user id from the request object
       const userId = request.userId;

       // find the user by id from the database
       const user = await User.findByIdAndDelete(userId);

    //    // if the user does not exist, return an error
    //    if (!user) {
    //        return response.status(404).json({ message: 'User not found' });
    //    }

    //    // delete the user if the user exists
    //    await user.remove();

       // return a success message
       response.json({ message: 'User deleted successfully' });
   } catch (error) {
       response.status(500).json({ message: error.message });
   }
},

logout: async (request, response) => {
   try {
       // clear the token cookie
       response.clearCookie('token');

       // return a success message
       response.json({ message: 'Logout successful' });
   } catch (error) {
       response.status(500).json({ message: error.message });
   }
}
}

//export controller
module.exports=userController;

