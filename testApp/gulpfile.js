/// <binding BeforeBuild='scriptsNStyles, ts' Clean='clean' />
var ts = require('gulp-typescript');
var gulp = require('gulp');
var clean = require('gulp-clean');
var Server = require('karma').Server;

var destPath = './libs/';

// Delete the dist directory
gulp.task('clean', function () {
    return gulp.src(destPath)
        .pipe(clean());
});

gulp.task("scriptsNStyles", () => {
    gulp.src([
            'core-js/client/**',
            'systemjs/dist/system.src.js',
            'reflect-metadata/**',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**',
            'jquery/dist/jquery.*js',
            'bootstrap/dist/js/bootstrap.*js'
    ], {
        cwd: "node_modules/**"
    })
        .pipe(gulp.dest("./libs"));
});

gulp.task('test', ['compile-tests', 'karma-test']);

gulp.task('karma-test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

var tsProject = ts.createProject('./app/tsconfig.json', {
    typescript: require('typescript')
});

gulp.task('ts', function (done) {
    //var tsResult = tsProject.src()
    var tsResult = gulp.src([
            "app/*.ts"
    ])
        .pipe(tsProject(), undefined, ts.reporter.fullReporter());
    return tsResult.js.pipe(gulp.dest('./Scripts/ng-2'));
});

var tsTest = ts.createProject('./Tests/tsconfig.json', {
    typescript: require('typescript')
});

gulp.task('compile-tests', function (done) {
    var testResult = gulp.src([
        "Tests/*.ts"
    ]).pipe(tsTest(), undefined, ts.reporter.fullReporter());
    return testResult.js.pipe(gulp.dest('./Tests/js'));
});

gulp.task('watch', ['watch.ts']);

gulp.task('watch.ts', ['ts'], function () {
    return gulp.watch('app/*.ts', ['ts']);
});

gulp.task('default', ['scriptsNStyles', 'watch']);