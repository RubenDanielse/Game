const path = require('path');

module.exports = {
    entry: './src/script.es6',
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};