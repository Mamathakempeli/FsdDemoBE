//define the controler object
const userController = {
     register: async(req,res)=>{
        res.send('Register a new user');
     }
}

//export controller
module.exports=userController;