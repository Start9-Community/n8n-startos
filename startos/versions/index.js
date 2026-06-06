"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.versions = void 0;
const sdk_1 = require("../sdk");
const interfaces_1 = require("../interfaces");
const dependencies_1 = require("../dependencies");
exports.versions = sdk_1.sdk.setupInit(dependencies_1.setDependencies, interfaces_1.setInterfaces);
