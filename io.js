var fs = require('fs');

var filename = process.argv[2];

//console.log(filename);

var file = fs.readFileSync(filename);

//console.log(file);

var lines = file.toString();

console.log(lines.split('\n').length - 1);
