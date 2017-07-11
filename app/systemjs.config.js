System.config({
	baseURL: '.',
	paths: {
		'npm:': './node_modules/'
	},
	map: {
		'@angular/core': 'npm:@angular/core/bundles/core.umd.min.js',
		'@angular/common': 'npm:@angular/common/bundles/common.umd.min.js',
		'@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.min.js',
		'@angular/http': 'npm:@angular/http/bundles/http.umd.min.js',
		'@angular/router': 'npm:@angular/router/bundles/router.umd.min.js',
		'@angular/forms': 'npm:@angular/forms/bundles/forms.umd.min.js',
		'@angular/animations': 'npm:@angular/animations/bundles/animations.umd.min.js',
		'@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.min.js',
		'@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.min.js',
		'@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.min.js',
		'@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js'
	},
	bundles: {
		"rxjs-bundle/Rx.min.js": [
			"rxjs/*",
			"rxjs/operator/*",
			"rxjs/observable/*",
			"rxjs/add/operator/*",
			"rxjs/add/observable/*",
			"rxjs/symbol/*",
			"rxjs/util/*"
		]
	},
	packages: {
		'app': {
			format: 'cjs',
			defaultExtension: 'js'
		}
	}
});
