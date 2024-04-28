# Backend pplication repositary

this repository contains backend application for the  [frontend applicationrepository]().

Backend application is restful api built with Node.js and Express.js, and it uses mongoDB as database

## installation

1. clone the repository

2. run npm install to install the dependencies

3. create a .env file in the root directory and add the following environmenta variables
 - 'MongoDB_URL' : Mongodb connection string
 - 'PORT' : Port number

 4. Run `npm run dev` to start the server
# Application
Job Portal System

# Features
 - [x] User registration
 - [x] User login

- [] Admin Dashboard
  - [x] Add a Company
  - [x] Update a Company
  - [x] Delete a Company
  - [x] View a Company
  - [x] View All Companies
  - [x] Add Job
  - [x] Update Job
  - [x] Delete Job
  - [x] View Job
  - [x] View All Jobs
  - [x] View All Users

- [] User Dashboard
  - [x] View Job
  - [x] View All Jobs
  - [x] Apply Job
  - [x] View Applied Jobs
  - [x] View Profile
  - [x] Update Profile
  - [x] Delete Profile
  - [x] Logout

# API Endpoints
## Users
- POST /api/users/register: Register a new user
- POST /api/users/login: Login a user
- GET /api/users/profile: Get the user profile
- PUT /api/users/profile: Update the user profile
- DELETE /api/users/profile: Delete the user profile
- GET /api/users/logout: Logout the user

## License
This project is licensed under the MIT License - see the LICENSE file for details.


## libraries and dependencies installed written for my reference:
1. mongoose: mongodb object modeling tool.It is used to interact with mongodb database.
we use this instead of mongodb driver because it provides a simple schema-based solution to model our application
 - npm i mongoose
2. .env: to store sensitive info like password URL, port numbers
- npm i dotenv

3. express: To connect with server
- npm i express

4. nodemon : to restart server wrt changes
- npm i --save-dev nodemon
- add "dev": "nodemon index.js" in scripts

5. bcrypt : to hash password
- npm i bcrypt

6. jwt : to create token while signin/login 
- npm i jsonwebtoken

7. cors: a mechanism  by which client make requst to server
- npm i cors

8. morgan: to log request to console
- npm i morgan

9. cookie-parser : to store token in postman
- npm i cookie-parser



