'use strict'

const { strictTransportSecurity } = require('helmet');
const mongoose = require('mongoose');


const feedbackSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tkt:{
        type: String,
        required: true
    },
    comment:{
        type: String
    },
    audio:{
        type: String,
        required: true
    },
    points:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        required: true,
        default: Date.now()
    }

},{
    versionKey: false
});

module.exports = mongoose.model('Feedback', feedbackSchema)