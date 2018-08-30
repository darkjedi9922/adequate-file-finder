const lib = require('../lib');
const pm = require('path');

// (path: string)
function PathPattern(pattern) {
    this.pattern = lib.pathToAbsolute(pattern);
}

// () => string
PathPattern.prototype.getLastPart = function() {
    var parts = this.getParts();
    return parts[parts.length - 1];
}

// () => array
PathPattern.prototype.getParts = function() {
    return this.pattern.split('/');
}

module.exports = PathPattern;