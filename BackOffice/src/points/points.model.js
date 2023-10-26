'use strict'

const mongoose = require('mongoose');

const pointSchema = mongoose.Schema({
    exam:{
        type: Number,
        default: 0
    },
    month:{
        type: Number,
        default: 0
    },
    service:{
        type: Number,
        default: 0
    },
    total:{
        type: Number,
        default: 0
    },
    QA:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Feedback'
    }
},{
    versionKey: false
});

module.exports = mongoose.model('Point', pointSchema)