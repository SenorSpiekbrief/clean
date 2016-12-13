	require.config({
		paths: {
			'jquery': '../lib/jquery.min',
			'angular': '../lib/angular.min',
			'uiRouter': '../lib/uirouter.min',
			'ngResource': '../lib/ngresource.min',
			'lodash': '../lib/lodash',
			'moment': '../lib/moment'
		},
		shim: {
			angular: {
				deps:['jquery'],
				exports:'angular'
			},
			uiRouter: {
				deps: ['angular'],
				exports: ''
			},
			ngResource: {
				deps: ['angular'],
				exports: ''
			}
		},
		baseUrl: './app', //This is the uri you're probably looking for -YV.
	});
	
	require(['app', 'angular'], function (app, angular) {
		app.init();
	});