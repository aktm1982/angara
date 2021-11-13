const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }, 
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'news.html',
            template: './src/news.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'news_detailed.html',
            template: './src/news_detailed.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'production.html',
            template: './src/production.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: './src/about.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'dummy.html',
            template: './src/dummy.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'machinery.html',
            template: './src/machinery.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'social_politic.html',
            template: './src/social_politic.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'index.css'
        })
    ]
}