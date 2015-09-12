var gulp = require('gulp');
var webserver = require('gulp-webserver');
var vulcanize = require('gulp-vulcanize');
var svgmin = require('gulp-svgmin');
var less = require('gulp-less');
var watchLess = require('gulp-watch-less');
var LessPluginCleanCSS = require('less-plugin-clean-css'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    cleancss = new LessPluginCleanCSS({ advanced: true }),
    autoprefix= new LessPluginAutoPrefix({ browsers: ["last 2 versions"] });

gulp.task('server', function() {
    gulp.src('')
        .pipe(webserver({
            livereload: false,
            directoryListing: false,
            open: false,
            fallback: 'index.html'
        }));
});

gulp.task('build', function () {
    return gulp.src('index.html')
        .pipe(vulcanize({
            dest: 'build',
            strip: true,
            inline: true
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('svg', function () {
    return gulp.src('design/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('./lib/assets/svg'));
});

gulp.task('watch', function () {
    return gulp.src('./lib/**/*.less')
        .pipe(watchLess('./lib/**/*.less'))
        .pipe(less({
          plugins: [autoprefix, cleancss]
        }))
        .pipe(gulp.dest('./lib'));
});

gulp.task('default', ['server', 'watch']);
