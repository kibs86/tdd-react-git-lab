const gulp = require('gulp');
const semver = require('semver');
const eslint = require('gulp-eslint');
const webserver = require('gulp-webserver');
const jasmine = require('gulp-jasmine');


// test
gulp.task('test', function(done) {
    gulp.src('spec/*.js')
        .pipe(jasmine());
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