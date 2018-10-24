# Adequate File Finder
Simple and fast adeaquate file and directory finder from path patterns. Can be used as a module and as an application.

## Installation
`npm install adequate-file-finder`

## Usage as a module

```js
var fileFind = require('adequate-file-finder');

var resultArray;

// files is found from current working directory
resultArray = fileFind('path/to/**/dir/*.js');

// find files from the root
resultArray = fileFind('/home/username/*');

// if there is no pattern then in the array is only one file
resultArray = fileFind('no/pattern/path/to/file');

// if the file does not exist the result array is empty
resultArray = fileFind('path/to/non-existence-file.html');

// directories also is in the result
resultArray = fileFind('path/to/dirs/*');

// for windows there is windows paths
// it works just like the unix
resultArray = fileFind('C:\\path\\**\\dir\*');
resultArray = fileFind('path\\**\\dir\*');
// ...
```

## Usage as an application

Basics the same as in the module usage.

```bash
node adequate-file-finder 'path/to/**/dir/*.*'
# here will appear list of the files
```

## Changelog

#### v0.2.0
* Add typescript definitions
* **Add support for windows paths.**

#### v0.1.2
* Fix bug when there is trying to read a broken link

#### v0.1.1
* Do not filter out symbolic links on dirs
* Depart cli usage to single bin file

#### v0.1.0
* Base implementation