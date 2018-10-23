const fs = require('fs');

exports.filterDirs = function(files) {
    var result = [];
    for (var i = 0; i < files.length; ++i) {
        var file = files[i];
        if (!fs.existsSync(file)) continue;
        var lstat = fs.lstatSync(file);
        if (lstat.isSymbolicLink()) {
            var link = fs.readlinkSync(file);
            if (fs.existsSync(link)) lstat = fs.lstatSync(fs.readlinkSync(file));
        }
        if (lstat.isDirectory()) result.push(file);
    }
    return result;
}