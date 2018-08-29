var assert = require('assert');
var lib = require('../lib');

describe('library', function () {

    it('trasforms the given path to absolute', function () {
        var cwd = process.cwd(); // cwd is in absolute
        var abs = lib.pathToAbsolute('.');

        assert.equal(abs, cwd);
    });

    it('filters dirs', function () {
        var filtered = lib.filterDirs([
            'tests/example/dir-1',
            'tests/example/dir-2',
            'file-1.js'
        ]);

        var output = [
            'tests/example/dir-1',
            'tests/example/dir-2'
        ]

        assert.deepEqual(filtered, output);
    });
});