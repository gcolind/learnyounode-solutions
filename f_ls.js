var fs = require('fs');

// get the name of the directory
var dir = process.argv[2];

// get the file extension
var ext = process.argv[3];

// pattern to filter
var pat = RegExp('\\.' + ext + '$');

file = fs.readdir(dir, function(err, files){
	for(i = 0; i < files.length; i++) {
		if(pat.test(files[i])){
			console.log(files[i]);
		}
	}	
});
