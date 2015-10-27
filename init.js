'use strict';

let mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/hanraqve');

require('./entry.js');

