var assert = require('assert');
var DirList = require('../classes/dir-list');

describe('DirList class', function() {

    it('finds all dir list of self dirs', function () {
        var list = new DirList([
            'tests',
            'tests/example'
        ]);

        assert.deepEqual(list.findAllSubdirs(), [
            'tests/example',
            'tests/example/dir-1',
            'tests/example/dir-2'
        ])
    });

    it('finds dir list of self dirs by name', function () {
        var list = new DirList([
            'tests',
            'tests/example'
        ]);

        assert.deepEqual(list.findSubdirsByName('dir-1'), [
            'tests/example/dir-1'
        ])
    })

    it('finds dir list of self dirs by pattern', function() {
        var list = new DirList([
            'tests',
            'tests/example'
        ]);

        assert.deepEqual(list.findSubdirsByPattern('**'), [
            'tests/example',
            'tests/example/dir-1',
            'tests/example/dir-2'
        ])
    });
});