const pm = require('path');
const fs = require('fs');

// (path: string) => string
exports.pathToAbsolute = function(path) {
    return '/' + pm.relative('/', path);
}

// (files: array) => array
exports.filterDirs = function(files) {
    var result = [];
    for (var i = 0; i < files.length; ++i) {
        var file = files[i];
        if (fs.existsSync(file) && fs.lstatSync(file).isDirectory()) result.push(file);
    }
    return result;
}