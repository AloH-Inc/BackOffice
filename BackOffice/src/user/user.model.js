'use strict'

const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    user:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true,
        uppercase: true,
        enum: ['ADMIN','MASTER','EMPLOYER']
    },
    points:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Point',
        required: true
    },
    photo:{
        type: String
    }
},{
    versionKey: false
})

module.exports = mongoose.model('User', userSchema)