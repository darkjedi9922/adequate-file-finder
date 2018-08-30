var assert = require('assert');
var lib = require('../lib');

describe('library', function () {

    it('trasforms the given path to absolute', function () {
        var cwd = process.cwd(); // cwd is in absolute
        var abs = lib.pathToAbsolute('.');

        assert.equal(abs, cwd);
    });

    it('trasforms the given non-existence path to absolute', function () {
        var cwd = process.cwd(); // cwd is in absolute
        var abs = lib.pathToAbsolute('no-existence-dir');

        assert.equal(abs, cwd + '/no-existence-dir');
    });

    it('does not trasform the given absolute path to absolute', function () {
        var cwd = process.cwd(); // cwd is absolute
        assert.equal(lib.pathToAbsolute(cwd), cwd);
    });

    it('filters dirs from current working directory', function () {
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

    it('filters dirs from root /', function () {
        var cwd = process.cwd();

        var filtered = lib.filterDirs([
            cwd + '/tests/example/dir-1',
            cwd + '/tests/example/dir-2',
            cwd + '/file-1.js'
        ]);

        var output = [
            cwd + '/tests/example/dir-1',
            cwd + '/tests/example/dir-2'
        ]

        assert.deepEqual(filtered, output);
    });

    it('filters non-existence dirs', function () {

        var filtered = lib.filterDirs([
            'tests/example/dir-12345'
        ]);

        var output = []

        assert.deepEqual(filtered, output);
    });
});