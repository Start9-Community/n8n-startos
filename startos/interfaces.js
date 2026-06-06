"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setInterfaces = void 0;
const sdk_1 = require("./sdk");
const uiPort = 5678;
exports.setInterfaces = sdk_1.sdk.setupInterfaces(async ({ effects }) => {
    const uiMulti = sdk_1.sdk.MultiHost.of(effects, 'ui');
    const origin = await uiMulti.bindPort(uiPort, { protocol: 'http' });
    const ui = sdk_1.sdk.createInterface(effects, {
        name: 'Web UI',
        id: 'ui',
        description: 'n8n visual workflow editor',
        type: 'ui',
        masked: false,
        schemeOverride: null,
        username: null,
        path: '',
        query: {},
    });
    const receipt = await origin.export([ui]);
    return [receipt];
});
