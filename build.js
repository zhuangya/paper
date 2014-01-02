var browserify = require('browserify');
var uglify = require('uglify-js');
var fs = require('fs');

var b = browserify();

var result;

b.add('./main.js');

b.bundle(function(err, src) {
  result = uglify.minify(src, {
    fromString: true
  });
  fs.writeFile('bundle.js', result.code, function(error) {
    if (error) throw error;
    console.log('build complete');
  });
});