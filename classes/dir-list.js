var fs = require('fs');
var lib = require('../lib');
var pm = require('path');

// (list: array of absolute paths to dirs)
function DirList(list) {
    this.list = list;
}

// () => array
DirList.prototype.findAllSubdirs = function() {
    var result = [];
    for (var i = 0; i < this.list.length; ++i) {
        if (!fs.existsSync(this.list[i])) continue;
        var files = fs.readdirSync(this.list[i]);
        for (var j = 0; j < files.length; ++j) files[j] = pm.join(this.list[i], files[j]);
        result = result.concat(lib.filterDirs(files));
    }
    return result;
}

// (dirname: string) => array
DirList.prototype.findSubdirsByName = function(dirname) {
    var result = [];
    for (var i = 0; i < this.list.length; ++i) {
        if (!fs.existsSync(this.list[i])) continue;
        var oneDir = pm.join(this.list[i], dirname);
        if (fs.existsSync(oneDir)) result.push(oneDir);
    }
    return result;
}

// (pattern: string) => array
DirList.prototype.findSubdirsByPattern = function (pattern) {
    if (pattern === '**') return this.findAllSubdirs();
    else return this.findSubdirsByName(pattern);
}

module.exports = DirList;