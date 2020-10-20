/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    target: 'web',
    devtool: "source-map",
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
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
    devServer: {
        contentBase: path.join(__dirname, 'src'),
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