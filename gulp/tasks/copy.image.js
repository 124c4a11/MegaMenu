'use strict';

module.exports = function() {
  $.gulp.task('copy:image', function() {
    return $.gulp.src('./src/img/**/*.*')
      .pipe($.gp.imagemin())
      .pipe($.gulp.dest($.config.root + '/assets/img'));
  });
};
