var assert = require('assert');
var PathPattern = require('../classes/path-pattern');

describe('PathPattern class', function() {

    it('trasforms the given path to absolute in the constructor', function () {
        var cwd = process.cwd(); // cwd is in absolute
        var pattern = new PathPattern('./');

        assert.equal(pattern.pattern, cwd);
    });

    it('returns last part', function () {
        var pattern = new PathPattern('example');
        assert.equal(pattern.getLastPart(), 'example');
    });
});