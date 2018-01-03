const path = require('path');

module.exports = {
    entry: './src/script.es6',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};