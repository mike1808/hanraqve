'use strict';

require('./init');

let mongoose = require('mongoose');
let Entry    = mongoose.model('Entry');
let xls      = require('./xls');
let fs       = require('fs');
let path     = require('path');
let async    = require('async');

let files = fs.readdirSync('./db').sort((a, b) => a.localeCompare(b));

console.log('Starting parse and saves sheets...');

async.eachSeries(files,
    (sheet, cb) => {
        console.log('Processing %s', sheet);
        let parsed = xls(path.join(__dirname, 'db', sheet));

        Entry.create(parsed, (err) => cb(err));
    }, (err) => {
        if (err) {
            console.error(err);
            return proces.exit(1);
        }

        console.log('Done');
        process.exit(0);
    });
