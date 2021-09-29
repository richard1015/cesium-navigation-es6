const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const buildPath = "../build";
const publicPath = "../public";

const plugins = [
    new HtmlWebpackPlugin({
        template: './public/index.html',
        minify: true,
    }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
        patterns: [
            { from: 'node_modules/cesium/Build/Cesium', to: 'Cesium' },
        ],
    }),
    new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify('./Cesium/')
    })
]
module.exports = {
    mode: "development",
    entry: './test/index.js',
    output: {
        path: path.resolve(__dirname, buildPath),
        filename: "[name].[chunkhash].js",
        chunkFilename: '[name].[chunkhash].js',
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx'
        ],
        fallback: { "path": require.resolve("path-browserify") }
    },
    devServer: {
        static: {
            directory: path.join(__dirname, publicPath),
        },
        compress: true,
        port: 9000,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            }
        ]
    },
    plugins,
};