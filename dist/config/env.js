"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    apps: [
        {
            name: 'think-ts',
            script: 'index.ts',
            watch: false,
            ignore_watch: ['node_modules'],
            exec_mode: 'cluster',
            instances: 2,
            env: {
                NODE_ENV: 'production',
            },
            env_test: {
                NODE_ENV: 'development'
            }
        }
    ]
};
