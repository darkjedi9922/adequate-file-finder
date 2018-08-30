const PathPattern = require('./classes/path-pattern');
const DirList = require('./classes/dir-list');

if (module.parent) module.exports = adequateFindFiles;
else {
    var result = adequateFindFiles(process.argv[2]);
    for (var i = 0; i < result.length; ++i) console.log(result[i]);
}

function adequateFindFiles(pattern) {

    if (typeof pattern !== 'string') return [];

    var pathPattern = new PathPattern(pattern);
    var pathElements = pathPattern.getParts();

    // contructor of the PathPattern will transform path to absolute
    // that's why we start from /
    var dirs = new DirList(['/']);
    // to 'length - 1' because the last is a file and not a dir
    for (var i = 1; i < pathElements.length - 1; ++i) {
        dirs = new DirList(dirs.findSubdirsByPattern(pathElements[i]));
    }

    var files = dirs.findFilesByPattern(pathElements[pathElements.length - 1]);
    return files;
}