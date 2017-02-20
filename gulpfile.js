const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var watchify = require("watchify");
var gutil = require("gulp-util");

/// with watchfy
const watchedScripts = watchify(
    browserify({
        basedir: '.',
        debug: true,
        entries: ['src/game.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
);

const buildScripts = () => {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/game.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest("dist"));
};

const watchScripts = () => {
    return watchedScripts
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest("dist"));
};

const buildAssets = () => {
    return gulp.src('src/assets/**')
        .pipe(gulp.dest('dist/assets'));
};

const buildHtml = () => {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'));
};

const buildPhaser = () => {
    return gulp.src(['phaser/**'], { cwd: 'node_modules/**' })
        .pipe(gulp.dest('dist/lib'));
};

gulp.task('libs', buildPhaser);
gulp.task('scripts', buildScripts);
gulp.task('assets', buildAssets);
gulp.task('html', buildHtml);

gulp.task('watch',  () => {
    gulp.watch(['src/**/*.ts'], ['scripts']);
    gulp.watch(['src/**/*.html'], ['html']);
});

gulp.task('build', ['libs', 'scripts', 'assets', 'html']);
gulp.task('serve', ['build', 'watch']);