'use strict';

const PathPattern = require('./classes/path-pattern');
const DirList = require('./classes/dir-list');

module.exports = function(pattern) {

    if (typeof pattern !== 'string') return [];

    var pathPattern = new PathPattern(pattern);

    // ['', '/', 'dir'] example of unix
    // ['C:', 'dir'] example of win32
    var pathElements = pathPattern.getParts();

    // we start from root (win32 or unix)
    // if it's win32 there is 0 element in the path
    // if it's unix that is an empty string
    var root = pathElements[0] ? pathElements[0] + '\\' : '/';
    var dirs = new DirList([root]);

    // to 'length - 1' because the last is a file and not a dir
    for (var i = 1; i < pathElements.length - 1; ++i) {
        dirs = new DirList(dirs.findSubdirsByPattern(pathElements[i]));
    }

    var files = dirs.findFilesByPattern(pathElements[pathElements.length - 1]);
    return files;
}