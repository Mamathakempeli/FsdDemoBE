const mongoose = require('mongoose');

//create schema

const userSchema = new mongoose.Schema({
    username: String,
    passwordHash: String,
    name: String,
    location: {
        type: String,
        default: 'unKnown'
    },
    role: {
        type: String,
        enum: ['user','admin'], //first registeruser be admin rest all are user catogory
        default: 'user'
    }
})

//create a model and export it
module.exports = mongoose.model('User',userSchema,'users'); //users > collectionname > optinal