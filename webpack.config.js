const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    mode: process.env.NODE_ENV || 'development',
    output: {
        filename: 'js/main.js',
        path: __dirname,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Степанко Иван',
            favicon: 'src/assets/favicon.ico',
            template: 'src/assets/template.html',
            publicPath: __dirname,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.css',
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
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
    devServer: {
        contentBase: __dirname,
        port: 3000,
        watchContentBase: true,
    },
};