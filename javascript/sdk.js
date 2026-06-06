"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sdk = void 0;
const start_sdk_1 = require("@start9labs/start-sdk");
const manifest_1 = require("./manifest");
exports.sdk = start_sdk_1.StartSdk.of().withManifest(manifest_1.manifest).build(true);
