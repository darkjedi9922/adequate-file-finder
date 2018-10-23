const pm = require('path');

function PathPattern(pattern) {
    this.pattern = pm.resolve(pattern);
}

PathPattern.prototype.getLastPart = function() {
    var parts = this.getParts();
    return parts[parts.length - 1];
}

PathPattern.prototype.getParts = function() {
    return this.pattern.split('/');
}

module.exports = PathPattern;