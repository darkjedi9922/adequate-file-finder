const assert = require('assert');
const find = require('..');

describe('module', function() {
    
    it('finds files of the form *.js', function () {
        assert.deepEqual(find('tests/example/*.js'), [
            'file-1.js',
            'file-2.js'
        ]);
    });

    it('finds files of the form *html', function () {
        assert.deepEqual(find('tests/example/*html'), [
            'file-3.html'
        ]);
    });

    it('finds files of the form file-*.js', function () {
        assert.deepEqual(find('tests/example/file-*.js'), [
            'file-1.js',
            'file-2.js'
        ]);
    });

    it('finds files of the form *-*.*', function () {
        assert.deepEqual(find('tests/example/*-*.*'), [
            'file-1.js',
            'file-2.js',
            'file-3.html'
        ]);
    });
})