var DirList = require('..\\..\\classes\\dir-list');
var assert = require('assert');
var pm = require('path');
var fs = require('fs');

describe('DirList class', function() {

    it('finds all dir list of self dirs', function () {
        var list = new DirList([
            'tests',
            'tests\\example'
        ]);

        assert.deepEqual(list.findAllSubdirs(), [
            'tests\\example',
            'tests\\unix',
            'tests\\win32',
            'tests\\example\\dir',
            'tests\\example\\dir-1',
            'tests\\example\\dir-2'
        ])
    });

    it('finds dir list of self dirs by name', function () {
        var list = new DirList([
            'tests',
            'tests\\example'
        ]);

        assert.deepEqual(list.findSubdirsByName('dir-1'), [
            'tests\\example\\dir-1'
        ])
    })

    it('finds dir list of self dirs by pattern', function() {
        var list = new DirList([
            'tests',
            'tests\\example'
        ]);

        assert.deepEqual(list.findSubdirsByPattern('**'), [
            'tests\\example',
            'tests\\unix',
            'tests\\win32',
            'tests\\example\\dir',
            'tests\\example\\dir-1',
            'tests\\example\\dir-2'
        ])
    });

    it('finds file list of self dirs by pattern', function () {
        var list = new DirList(['tests\\example', 'tests\\example\\dir']);

        assert.deepEqual(list.findFilesByPattern('*.js'), [
            'tests\\example\\file-1.js',
            'tests\\example\\file-2.js',
            'tests\\example\\dir\\file.js'
        ])
    });
});