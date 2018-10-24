const assert = require('assert');
const find = require('..\\..');
const pm = require('path');
const fs = require('fs');

describe('module', function() {
    
    it('finds files of the form *.js', function () {
        assert.deepEqual(find('tests\\example\\*.js'), [
            process.cwd() + '\\' + 'tests\\example\\file-1.js',
            process.cwd() + '\\' + 'tests\\example\\file-2.js'
        ]);
    });

    it('finds files of the form *html', function () {
        assert.deepEqual(find('tests\\example\\*html'), [
            process.cwd() + '\\' + 'tests\\example\\file-3.html'
        ]);
    });

    it('finds files of the form file-*.js', function () {
        assert.deepEqual(find('tests\\example\\file-*.js'), [
            process.cwd() + '\\' + 'tests\\example\\file-1.js',
            process.cwd() + '\\' + 'tests\\example\\file-2.js'
        ]);
    });

    it('finds files of the form *-*.*', function () {
        assert.deepEqual(find('tests\\example\\*-*.*'), [
            process.cwd() + '\\' + 'tests\\example\\file-1.js',
            process.cwd() + '\\' + 'tests\\example\\file-2.js',
            process.cwd() + '\\' + 'tests\\example\\file-3.html'
        ]);
    });

    it('finds files of the form tests\\example\\**\\*.js', function() {
        assert.deepEqual(find('tests\\example\\**\\*.js'), [
            process.cwd() + '\\' + 'tests\\example\\dir\\file.js'
        ])
    })

    it('finds all files of current root', function() {
        var rootFiles = fs.readdirSync('\\');
        for (var i = 0; i < rootFiles.length; ++i) rootFiles[i] = pm.resolve('\\' + rootFiles[i]);
        assert.deepEqual(find('\\*'), rootFiles);
    });

    it('finds all files of defined root', function () {
        var rootFiles = fs.readdirSync('C:\\');
        for (var i = 0; i < rootFiles.length; ++i) rootFiles[i] = pm.resolve('C:', '\\' + rootFiles[i]);
        assert.deepEqual(find('C:\\*'), rootFiles);
    })
})