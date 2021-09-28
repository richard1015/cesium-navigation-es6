const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const buildPath = "../build";
const plugins = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: './public/build.html',
        minify: true,
    }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
        patterns: [
            { from: 'node_modules/cesium/Build/Cesium', to: 'Cesium' },
        ],
    }),
]
module.exports = {
    mode: "production",
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
    externals: {
        "cesium": "Cesium"
    },
};