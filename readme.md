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

## libraries used:
- mongoose: mongodb object modeling tool.It is used to interact with mongodb database.
we use this instead of mongodb driver because it provides a simple schema-based solution to model our application

npm i mongoose


- .env: to store sensitive info like password URL, port numbers
npm i dotenv