var gulp       = require('gulp');
var sass       = require('gulp-sass');
var babel      = require('babelify');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');


// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("public/css/"));
});

gulp.task('assets', function() {
    return gulp.src("assets/*")
        .pipe(gulp.dest("public/img"))
});

// Move the javascript files into our /src/js folder
gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'])
        .pipe(gulp.dest("public/js/"));
});

gulp.task('script', function(){
	browserify('./src/app.js')
		.transform(babel,{ presets: ['env'] })
		.bundle()
		.pipe(source('app.js'))
		.pipe(gulp.dest("public/js/"));
});

gulp.task('default', [ 'sass', 'assets', 'js', 'script']);