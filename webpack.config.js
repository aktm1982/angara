const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

process.on('warning', (warning) => {
    console.log(warning.stack, ' DATA DEBUG');
});
  
const plugins = () => {
    const basePlugins = [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './src/index.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'news.html',
            template: path.resolve(__dirname, './src/news.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'news_detailed.html',
            template: path.resolve(__dirname, './src/news_detailed.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'production.html',
            template: path.resolve(__dirname, './src/production.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: path.resolve(__dirname, './src/about.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'dummy.html',
            template: path.resolve(__dirname, './src/dummy.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'machinery.html',
            template: path.resolve(__dirname, './src/machinery.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'social_politic.html',
            template: path.resolve(__dirname, './src/social_politic.html')
        }),
        new MiniCssExtractPlugin({
            filename: `./css/${filename('css')}`
        }),
    ];
  
    if (isProd) {
      basePlugins.push(
        new ImageMinimizerPlugin({
            minimizerOptions: {
              // Lossless optimization with custom option
              // Feel free to experiment with options for better result for you
              plugins: [
                ["gifsicle", { interlaced: true }],
                ["jpegtran", { progressive: true }],
                ["optipng", { optimizationLevel: 5 }]
              ],
            },
        })
      )
    }
  
    return basePlugins;
  };

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: `./js/${filename('js')}`,
        path: path.resolve(__dirname, 'public'),
        clean: true,
        publicPath: '/'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        publicPath: '/',
        open: true,
        watchContentBase: true,
        port: 8080,
    },
    target: 'web',
    optimization: {
        splitChunks: {
        chunks: 'all'
        },
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: ['html-loader']
            },
            {
                test: /\.css$/i,
                use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                    'css-loader'
                ],
            }, 
            {
                test: /\.s[ac]ss$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      publicPath: (resourcePath, context) => {
                        return path.relative(path.dirname(resourcePath), context) + '/';
                      },
                    }
                  },
                  'css-loader',
                  'sass-loader'
                ],
            },
            {
                test: /\.(?:|gif|png|jpg|jpeg|svg)$/,
                use: [{
                  loader: 'file-loader',
                  options: {
                    name: `./img/${filename('[ext]')}`
                  }
                }],
            },
            {
                test: /\.(?:|eot|ttf|woff|woff2|otf)$/,
                use: [{
                  loader: 'file-loader',
                  options: {
                    name: `./fonts/${filename('[ext]')}`
                  }
                }],
            }
        ]
    },
    plugins: plugins(),
    devtool: isProd ? false : 'source-map'
}