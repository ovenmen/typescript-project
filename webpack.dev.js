/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const webpack = require('webpack');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        compress: true,
        port: 3000,
        hot: true,
        progress: true,
        clientLogLevel: 'debug',
        overlay: {
            warnings: true,
            errors: true
        }
    }
});