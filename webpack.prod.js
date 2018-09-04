const merge = require('webpack-merge');

const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');
module.exports = merge(common, {
    devtool: 'source-map',
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    mode: 'production',
    plugins: [
        new webpack.HashedModuleIdsPlugin()
    ],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
});