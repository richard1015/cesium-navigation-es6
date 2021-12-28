const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require("terser-webpack-plugin");
const CopyDirWebpackPlugin = require('./webapck-plugin-copy');
const config = require('../package.json');
const Webpack = require('webpack');
const rootPath = "../dist";
const plugins = [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new Webpack.BannerPlugin({
        banner: `${config.name} v${config.version} - [filebase], [hash], ${new Date()}`
    }),
    new CopyDirWebpackPlugin([
        { from: 'src', to: path.resolve(__dirname, rootPath) },
        { from: path.resolve(__dirname, `${rootPath}/CesiumNavigation.umd.js`), to: path.resolve('./public/CesiumNavigation.umd.js') },//拷贝至静态目录测试umd
        { from: 'node_modules/cesium/Build/Cesium', to: path.resolve(__dirname, `../public/Cesium`) },
    ]),
]

module.exports = {
    mode: "production",
    entry: './src/CesiumNavigation.js',
    output: {
        path: path.resolve(__dirname, rootPath),
        filename: `CesiumNavigation.umd.js`,
        libraryExport: "default",
        library: "CesiumNavigation",
        chunkFilename: '[name].[chunkhash].js',
        libraryTarget: "umd"
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
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,//去掉license
            }),
        ],
    }
};