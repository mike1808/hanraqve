'use strict';

let XLSX   = require('xlsx');
let a2u    = require('./a2u');
let moment = require('moment');

module.exports = function (file) {
    let workbook = XLSX.readFile(file);
    let sheet    = workbook.Sheets.Sheet1;
    let entries  = [];

    if (sheet == null || sheet['!ref'] == null) return;
    let r            = sheet['!range'];
    let row          = '', rr = '', cols = [];
    let R            = 0, C = 0;
    let firstRawSeen = false;

    for (C = r.s.c; C <= r.e.c; ++C) cols[C] = XLSX.utils.encode_col(C);
    for (R = r.s.r; R <= r.e.r; ++R) {
        row = '';
        rr  = XLSX.utils.encode_row(R);

        if (!sheet[cols[1] + rr]) {
            continue;
        }

        if (!firstRawSeen) {
            firstRawSeen = true;
            continue;
        }

        entries.push({
            firstName: a2u(XLSX.utils.format_cell(sheet[cols[1] + rr])),
            lastName: a2u(XLSX.utils.format_cell(sheet[cols[2] + rr])),
            fatherName: a2u(XLSX.utils.format_cell(sheet[cols[3] + rr])),
            birthDate: moment(XLSX.utils.format_cell(sheet[cols[4] + rr]), 'DD/MM/YYYY').toDate(),
            address: a2u(XLSX.utils.format_cell(sheet[cols[5] + rr])),
            area: a2u(XLSX.utils.format_cell(sheet[cols[6] + rr])),
            sector: a2u(XLSX.utils.format_cell(sheet[cols[7] + rr]))
        });
    }

    return entries;
};