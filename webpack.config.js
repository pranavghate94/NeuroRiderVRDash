var webpack = require('webpack');
var path = require('path');

//The bundle file output
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');

//The path of the React codebase
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
    entry: APP_DIR + '/index.jsx', //Similar to Main Method in Java
    output:{
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.jsx?/,
                include:APP_DIR,
                loader:'babel-loader'
            }
        ]
    }
};

module.exports = config;