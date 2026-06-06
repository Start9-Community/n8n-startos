"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.current = void 0;
const start_sdk_1 = require("@start9labs/start-sdk");
exports.current = start_sdk_1.VersionInfo.of({
    version: '1.0.0:0',
    releaseNotes: {
        en_US: 'Initial release of n8n for StartOS.',
    },
    migrations: {
        up: async ({ effects }) => { },
        down: start_sdk_1.IMPOSSIBLE,
    },
});
