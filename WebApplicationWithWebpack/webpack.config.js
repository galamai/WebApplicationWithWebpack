const path = require('path');

module.exports = {
    entry: './Client/src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'Client/dist')
    }
};
