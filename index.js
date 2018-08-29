const path = require('path');
const fs = require('fs');

module.exports = function(pattern) {

    if (typeof pattern !== 'string') return [];

    var startDir = getStartDir(pattern);
    var dir = '/' + path.relative('/', startDir);
    pattern = pattern.replace(startDir + '/', '');

    var files = fs.readdirSync(dir);
    return filter(files, pattern);
}

function filter(files, pattern) {
    var regexp = new RegExp('^' + pattern.replace(/\./g, '\\.').replace(/\*/g, '\.*') + '$');
    var result = [];
    for (var i = 0; i < files.length; ++i) {
        if (regexp.test(files[i])) result.push(files[i]);
    }
    return result;
}

function getStartDir(pattern) {
    var paths = pattern.split('/');
    var dir = [];
    for (var i = 0; i < paths.length; ++i) {
        if (~paths[i].indexOf('*')) break;
        else dir.push(paths[i]);
    }
    return dir.join('/');
}