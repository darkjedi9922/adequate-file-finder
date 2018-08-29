const lib = require('../lib');

// (path: string)
function PathPattern(pattern) {
    this.pattern = lib.pathToAbsolute(pattern);
}

PathPattern.prototype.getLastPart = function() {
    var parts = this.pattern.split('/');
    return parts[parts.length - 1];
}

module.exports = PathPattern;