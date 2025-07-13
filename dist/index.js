"use strict";
let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
let level;
let numbers = [1, 2, 3];
let user = [1, 'morgan'];
function render(document) {
    console.log(document);
}
let mySize = 2;
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2023);
