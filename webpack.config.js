const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',    // handling all js files with babel-loader
            },
        ],
    },
    plugins: [
        new HtmlwebpackPlugin({
            template: '/template/index.html',
        }),
    ],
    mode: 'production',
    use: {
        loader: 'babel-loader',
        options: {
            configFile: path.resolve(__dirname, '.babelrc.client.js'),
        },
    },
};