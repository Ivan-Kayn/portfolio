const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin') //plugin for html
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin') //plugin that cleans dist after rebuilding 
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //plugin for mini css file
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const plugind = () => {

}

module.exports = {

    mode: 'development',

    // dev server config
    devServer: {
        port: 4200
    },
    context: path.resolve(__dirname, 'src'), //setting the default dir, using path object
    // entry points
    entry: {
        main: './js/script.js',
    },

    //output points 
    output: {
        filename: '[name].[hash].js', //final file name with name and contenthash pattern
        path: path.resolve(__dirname, 'dist') //dir to save build file
    },

    //chunks optimization 
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimizer: [new TerserWebpackPlugin({}), new OptimizeCssAssetWebpackPlugin({})]
    },

    //plugins
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html', //importing html template into new index.html

        }), //create scripts automatic in index.html
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'src/images'),
                to: path.resolve(__dirname, 'dist/images')
            }],

        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        })
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {

                        },
                    },
                    'css-loader',
                ] //using miniCss to create new css file
            },
            {
                test: /\.(png|svg)/,
                use: ['file-loader']
            },
            {
                test: /\.ttf/,
                use: ['file-loader']
            },
            {
                test: /\.less$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {

                        },
                    },
                    'css-loader',
                    'less-loader'
                ] //using miniCss to create new css file
            }
        ]
    }


}