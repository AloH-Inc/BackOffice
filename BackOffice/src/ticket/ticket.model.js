'use strict'

const mongoose = require("mongoose")

const tktSchema = mongoose.Schema({
    tkt:{
        type: String,
        required: true
    },
    agent:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    segment:{
        type: String,
        uppercase: true,
        required: true,
        enum: [FIJO, GCI, VAS, VOICE, ON, DIGITAL]
    },
    date:{
        type: Date,
        required: true,
        default: Date.now()
    },
    dateReq:{
        type: Date
    },
    comment:{
        type: String
    }
})