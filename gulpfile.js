/* eslint-disable */

const gulp = require('gulp');
const semver = require('semver');
const eslint = require('gulp-eslint');
const webserver = require('gulp-webserver');
const jasmine = require('gulp-jasmine');
const reporters = require('jasmine-reporters');
const karma = require('gulp-karma-runner');
const webpack = require('webpack-stream');
const del = require('del');

const DIST = 'dist';
const SPEC_JS = 'spec/**/*.js';
const SRC_JS = 'src/**/*.js';


// START GULP BUILD AND DEPENDENCIES

// copy html files to dist
gulp.task('copy', function() {
    return gulp.src('src/*.html').pipe(gulp.dest(DIST));
});


// clean the dist directory
gulp.task('clean', function() {
    console.log('removing dist directory');
    return del([
        DIST
    ]);
});


// build the dist directory
gulp.task('webpack', function() {
    return gulp.src('src/scripts/app.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest(DIST + '/scripts/'));
});


// run
gulp.task('run', function() {
    gulp.src(DIST)
        .pipe(webserver({
            livereoload: true,
            open: true
        }));
});


// build task
gulp.task('build', gulp.series('clean', gulp.parallel('webpack', 'copy'), 'run', function(done) {
    console.log('webpack build complete');
    done();
}));

// END GULP BUILD AND DEPENDENCIES





// START DEFAULT TASK AND DEPENDENCIES

// start karma server
gulp.task('karma', function() {
    return gulp.src([
        SPEC_JS,
        SRC_JS
    ],
        {'read': false}).pipe(
        karma.server({
            configFile: __dirname + '/karma.conf.js',
            'singleRun': false
        })
    );
});


// run tests in Karma
gulp.task('test', function() {
    return gulp.src([
        SPEC_JS,
        SRC_JS'
    ],
        {'read': false}).pipe(
        karma.runner({
            configFile: __dirname + '/karma.conf.js',
            'singleRun': false
        })
    );
});


// run tests in Jasmine
// flip this one to 'test' and the karma one to 'karma-test' if you want to include Jasmine in the default task
// instead of Karma
gulp.task('jasmine', function(done) {
    gulp.src(SPEC_JS)
        .pipe(jasmine({
            reporter: new reporters.TerminalReporter({
                verbosity: 3,
                color: true
            })
        }));
    done();
});


// eslint
gulp.task('eslint', function () {
    return gulp.src(['**/*.js','!dist/**','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});


// check node version
gulp.task('version', function(done) {

    console.log('Checking node version: ');

    const packageJson = require('./package.json');
    const expectedVersion = packageJson.engines.node;
    const actualVersion = process.version;

    if (semver.gt(expectedVersion,actualVersion)) {
        console.log('Incorrect node version.  Expected ' + expectedVersion + '.  Actual: ' + actualVersion);
        process.exit(1);
    } else {
        console.log('Correct node version.');
    }
    done();
});



// default task
gulp.task('default', gulp.series('version', 'eslint', 'test', function(done) {
    console.log('BUILD OK');
    done();
}));

// END DEFAULT TASK AND DEPENDENCIES