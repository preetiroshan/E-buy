const path = require('path')

module.exports = {
    entry: './src/server.js',
    target: 'node',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
}