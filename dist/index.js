"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountries = void 0;
var countries_1 = require("./countries");
function getCountries() {
    return countries_1.list;
}
exports.getCountries = getCountries;
