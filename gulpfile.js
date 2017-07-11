'use strict';

var gulp = require('gulp'),
	server = require('gulp-server-livereload'),
	ts = require('gulp-typescript'),
	sourcemaps = require('gulp-sourcemaps'),
	systemjsbuilder = require("systemjs-builder");

// >>> GULP TASK to run app's standalone web server
var webroot = '.';
var webfolders = [webroot];

gulp.task('serve', function() {
	gulp.src(webfolders)
	.pipe(server({
		host: 'localhost',
		port: '8080',
		defaultFile: 'index.html',
		fallback: 'index.html',
		livereload: false,
		directoryListing: false,
		open: false
	}));
});
// <<< GULP TASK to run app's standalone web server

// >>> GULP TASK to run compilation of all TS source code
var appRoot = './app';
var paths = {
	tsSource: [
		appRoot + '/**/*.ts',
		'!' + appRoot + '/boot-prod.ts'
	],
	tsOutput: appRoot
};

var tsProject = ts.createProject('tsconfig.json');

gulp.task('ts-compile', function () {
	
	var tsResult = gulp.src(paths.tsSource)
		.pipe(sourcemaps.init())
		.pipe(tsProject());
		
	return tsResult.js
		.pipe(sourcemaps.write('.', {
			includeContent: false,
			sourceRoot: appRoot
		}))
		.pipe(gulp.dest(paths.tsOutput));
});
// <<< GULP TASK to run compilation of all TS source code

// >>> GULP TASK to watch all changes at TS code and run their incremental compilation
gulp.task('watch', ['ts-compile'], function () {
	gulp.watch(paths.tsSource, ['ts-compile']);
});
// <<< GULP TASK to watch all changes at TS code and run their incremental compilation

// >>> GULP TASK to create the RxJS bundle
gulp.task('rxjs', function() {
	// SystemJS build options
	var options = {
		normalize: true,
		runtime: false,
		sourceMaps: true,
		sourceMapContents: true,
		minify: true,
		mangle: true
	};
	var builder = new systemjsbuilder('./');
	builder.config({
		paths: {
			"n:*": "node_modules/*",
			"rxjs/*": "node_modules/rxjs/*.js",
		},
		map: {
			"rxjs": "n:rxjs",
		},
		packages: {
			"rxjs": {main: "Rx.js", defaultExtension: "js"},
		}
	});
	builder.bundle('rxjs', 'rxjs-bundle/Rx.min.js', options);
});
// <<< GULP TASK to create the RxJS bundle
