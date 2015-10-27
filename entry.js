'use strict';

let mongoose = require('mongoose');
let Schema   = mongoose.Schema;

let entry = new Schema({
    firstName: {type: String, index: true},
    lastName: {type: String, index: true},
    fatherName: {type: String, index: true},
    birthDate: {type: Date, index: true},
    address: {type: String, index: true},
    area: String,
    section: String
});

mongoose.model('Entry', entry);
