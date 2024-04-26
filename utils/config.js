//import thr dotenv package
require('dotenv').config();

//create necessary variables
const MONGODB_URI =process.env.MONGODB_URI; //process.env.varname stored in .env file
const PORT = process.env.PORT;

//export the variable
module.exports={MONGODB_URI, PORT};

