"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.manifest = void 0;
const start_sdk_1 = require("@start9labs/start-sdk");
exports.manifest = (0, start_sdk_1.setupManifest)({
    id: 'n8n',
    title: 'n8n',
    license: 'Sustainable Use License',
    packageRepo: 'https://github.com/YOUR_USERNAME/n8n-startos',
    upstreamRepo: 'https://github.com/n8n-io/n8n',
    marketingUrl: 'https://n8n.io',
    donationUrl: null,
    description: {
        short: 'Self-hosted workflow automation with AI',
        long: 'n8n is a self-hostable workflow automation tool. Connect apps, automate tasks, and build AI-powered workflows — fully isolated from Bitcoin and Lightning.',
    },
    volumes: ['main'],
    images: {
        n8n: {
            source: {
                dockerTag: 'n8nio/n8n:latest',
            },
            arch: ['x86_64', 'aarch64'],
        },
    },
    dependencies: {},
});
