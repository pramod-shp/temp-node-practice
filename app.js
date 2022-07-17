const lodash = require('lodash');

const arr = [1,[2,3,[4,4,[5,[6]]]],3];

const flatten = lodash.flattenDeep(arr);

console.log(flatten);