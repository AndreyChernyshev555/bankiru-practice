const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
            },
        ],
    },
}