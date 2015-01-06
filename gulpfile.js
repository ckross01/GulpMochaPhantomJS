var gulp = require('gulp');
var mochaPhantomJS = require('gulp-mocha-phantomjs');
var notify = require('gulp-notify');

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('test', function () {
  return gulp.src('./tests/*.html')
  .pipe(mochaPhantomJS({ 'webSecurityEnabled': false, "outputEncoding": "utf8", "localToRemoteUrlAccessEnabled": true }))
  .pipe(notify({ message: 'tests finished'}))
  .on('error', handleError);
});
