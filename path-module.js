const path = require('path');

console.log(path.sep);

const filePath = path.join('/content/','folder','content.txt');

console.log(filePath);

const baseName = path.basename(filePath);

console.log(baseName);