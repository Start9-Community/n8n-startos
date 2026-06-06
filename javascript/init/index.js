"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uninit = exports.init = void 0;
const sdk_1 = require("../sdk");
const versions_1 = require("../versions");
const interfaces_1 = require("../interfaces");
const dependencies_1 = require("../dependencies");
exports.init = sdk_1.sdk.setupInit(versions_1.versionGraph, interfaces_1.setInterfaces, dependencies_1.setDependencies);
exports.uninit = sdk_1.sdk.setupUninit(versions_1.versionGraph);
