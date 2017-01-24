/* eslint-disable */

const gulp = require('gulp');
const semver = require('semver');
const eslint = require('gulp-eslint');
const webserver = require('gulp-webserver');
const jasmine = require('gulp-jasmine');
const reporters = require('jasmine-reporters');
const karma = require('gulp-karma-runner');


// start karma server
gulp.task('karma', function() {
    return gulp.src([
        'spec/**/*.js',
        'src/**/*.js'
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
        'spec/**/*.js',
        'src/**/*.js'
    ],
        {'read': false}).pipe(
        karma.runner({
            configFile: __dirname + '/karma.conf.js',
            'singleRun': false
        })
    );
});


// run tests in Jasmine
gulp.task('jasmine', function(done) {
    gulp.src('spec/*.js')
        .pipe(jasmine({
            reporter: new reporters.TerminalReporter({
                verbosity: 3,
                color: true
            })
        }));
    done();
});

// run
gulp.task('run', function() {
    gulp.src('src')
        .pipe(webserver({
            livereoload: true,
            open: true
        }));
});

// eslint
gulp.task('eslint', function () {
    return gulp.src(['**/*.js','!node_modules/**'])
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