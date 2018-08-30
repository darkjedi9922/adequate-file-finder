var assert = require('assert');
var PathPattern = require('../classes/path-pattern');

describe('PathPattern class', function() {

    it('trasforms the given path to absolute in the constructor', function () {
        var cwd = process.cwd(); // cwd is absolute
        var pattern = new PathPattern('./');

        assert.equal(pattern.pattern, cwd);
    });

    it('does not trasform the given absolute path to absolute in the constructor', function () {
        var cwd = process.cwd(); // cwd is absolute
        var pattern = new PathPattern(cwd);

        assert.equal(pattern.pattern, cwd);
    });

    it('returns all parts', function() {
        var path = 'example/dir'
        var pattern = new PathPattern(path);
        assert.deepEqual(pattern.getParts(), (process.cwd() + '/' + path).split('/'));
    });

    it('returns last part', function () {
        var pattern = new PathPattern('example');
        assert.equal(pattern.getLastPart(), 'example');
    });
});