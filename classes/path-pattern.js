const lib = require('../lib');

function PathPattern(pattern) {
    this.pattern = lib.pathToAbsolute(pattern);
}

PathPattern.prototype.getLastPart = function() {
    var parts = this.getParts();
    return parts[parts.length - 1];
}

PathPattern.prototype.getParts = function() {
    return this.pattern.split('/');
}

module.exports = PathPattern;