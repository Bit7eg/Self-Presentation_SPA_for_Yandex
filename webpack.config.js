const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = (process.env.NODE_ENV === 'production');
const cssName = (isProd ? 'build/styles-[hash].css' : 'build/styles.css');
const jsName = (isProd ? 'build/[name]-[hash].js' : 'build/[name].js');

module.exports = {
    entry: './src/index.js',
    mode: process.env.NODE_ENV || 'development',
    output: {
        filename: jsName,
        path: path.resolve(__dirname, 'dist'),
        clean: isProd,
    },
    resolve: {
        roots: [ path.resolve(__dirname, 'dist') ],
        modules: ['node_modules'],
        extensions: ['', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'Степанко Иван',
            favicon: path.resolve(__dirname, 'public/favicon.ico'),
            template: path.resolve(__dirname, 'public/index.html'),
            minify: false,
        }),
        new MiniCssExtractPlugin({
            filename: cssName,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|dist)/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: 'asset/resource',
            },
        ],
    },
    devtool: 'source-map',
    devServer: {
        port: 3000,
    },
};