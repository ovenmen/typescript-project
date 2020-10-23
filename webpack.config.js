/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;

module.exports = {
    target: 'web',
    entry: {
        app: path.resolve(__dirname, 'src', 'index.tsx')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new webpack.HotModuleReplacement()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline'
            },
            {
                test: /\.ts(x?)$/i,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', ".css" ],
    },
    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false
    },
    devServer: {
        // contentBase: path.join(__dirname, 'src'),
        watchContentBase: true,
        historyApiFallback: true,
        compress: true,
        port: 3000,
        progress: true,
        clientLogLevel: 'debug',
        liveReload: true,
        open: true,
        overlay: {
            warnings: true,
            errors: true
        }
    }
};