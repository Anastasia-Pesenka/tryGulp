var gulp = require('gulp'),
    uglify = require('gulp-uglify');

gulp.task('minify', function () {
    gulp.src('app/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});


gulp.task('watch', function() {
    gulp.watch('app/js/*.js', ['minify']);
    gulp.watch('style/*.scss', ['mincss']);
});


var sass = require('gulp-sass');

gulp.task('mincss', function(){
   return gulp.src('app/style/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss())
       .pipe(gulp.dest('public'))
});
