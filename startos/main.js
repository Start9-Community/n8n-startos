"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const sdk_1 = require("./sdk");
const i18n_1 = require("./i18n");
const uiPort = 5678;
exports.main = sdk_1.sdk.setupMain(async ({ effects }) => {
    console.info((0, i18n_1.i18n)("n8n-starting"));
    return sdk_1.sdk.Daemons.of(effects).addDaemon("primary", {
        subcontainer: await sdk_1.sdk.SubContainer.of(effects, { imageId: "n8n" }, sdk_1.sdk.Mounts.of().mountVolume({
            volumeId: "main",
            subpath: null,
            mountpoint: "/data",
            readonly: false,
        }), "n8n-sub"),
        exec: {
            command: sdk_1.sdk.useEntrypoint(), // uses official n8n Docker ENTRYPOINT
            env: {
                N8N_USER_FOLDER: "/data",
                N8N_PORT: String(uiPort),
                N8N_PROTOCOL: "http",
                N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS: "true",
                N8N_DIAGNOSTICS_ENABLED: "false",
                N8N_VERSION_NOTIFICATIONS_ENABLED: "false",
                N8N_PERSONALIZATION_ENABLED: "false",
                DB_TYPE: "sqlite",
                DB_SQLITE_DATABASE: "/data/database.sqlite",
                GENERIC_TIMEZONE: "UTC",
                TZ: "UTC",
            },
        },
        ready: {
            display: (0, i18n_1.i18n)("webui-name"),
            fn: () => sdk_1.sdk.healthCheck.checkPortListening(effects, uiPort, {
                successMessage: (0, i18n_1.i18n)("n8n-running"),
                errorMessage: (0, i18n_1.i18n)("n8n-not-responding"),
            }),
            gracePeriod: 60000, // n8n needs ~60s to initialize on first start
        },
        requires: [],
    });
});
