/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: true,
        splitChunks: false,
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    ie8: false,
                }
            })
        ],
        runtimeChunk: {
            name: entrypoint => `runtime~${entrypoint.name}`
        },
        chunkIds: 'named',
        mergeDuplicateChunks: false,
    }
});