const jwt = require('jsonwebtoken');
const config = require('../utils/config');
const User = require('../models/userModel');

const auth = {
    verifyToken: (request, response, next) => {
        try {
            // Get the token from the request cookies
            const token = request.cookies.token;

            // If the token does not exist, return an error
            if (!token) {
                return response.status(401).json({ message: 'Unauthorized' });
            }

            // if token exists, Verify the token
            try {
                const decodedToken = jwt.verify(token, config.JWT_SECRET);  //decode token & verify using JWT_SECRET we have provided in .env/config

                // Set the userId in the request object
                request.userId = decodedToken.id;   //set the userid= decoded Token id

                // Call the next middleware
                next(); //next is very imp otherwise it gets stuck in above lines
            } catch (error) {
                return response.status(401).json({ message: 'Invalid token' });
            }
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    }
}
// Export the auth object
module.exports = auth;