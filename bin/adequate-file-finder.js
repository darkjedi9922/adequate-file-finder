#!/usr/bin/env node

'use strict';

var finder = require('..');

var result = finder(process.argv[2]);
for (var i = 0; i < result.length; ++i) console.log(result[i]);