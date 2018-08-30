Simple and fast adeaquate file and directory finder from path patterns. Can be used as a module and as an application.

**Files and directories is found from current working directory.**

**The path of the finded files and directories is from root directory.**

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
```

## Usage as an application

Basics the same as in the module usage.

```bash
node adequate-file-finder 'path/to/**/dir/*.*'
# here will appear list of the files
```