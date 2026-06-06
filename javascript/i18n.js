"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n = i18n;
const default_1 = require("./i18n/default");
// Simple i18n helper - returns the string for the current locale
// StartOS will call this with the user's locale
function i18n(key) {
    var _a;
    // For now, always return English
    // StartOS SDK handles locale selection at a higher level
    return (_a = default_1.defaultStrings[key]) !== null && _a !== void 0 ? _a : key;
}
