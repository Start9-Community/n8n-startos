"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.versionGraph = void 0;
const start_sdk_1 = require("@start9labs/start-sdk");
const current_1 = require("./current");
exports.versionGraph = start_sdk_1.VersionGraph.of({
    current: current_1.current,
    other: [],
});
