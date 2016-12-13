define(function(require) {
	'use strict';	
	
	var angular = require('angular');
	
	require('ngResource');
	require('uiRouter');
	
	require('./components/components.module');
	require('./shared/shared.module');
	
	var app = angular.module('app', ['ngResource', 'ui.router', 'Components', 'Shared']);	
	
	app.init = function (){
		angular.bootstrap(document, ['app']);
	}
	app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		
		$stateProvider
			.state('home', {
				url: '/home',
				views: {
					'main': {
						component: 'homeComponent'
					}
				}				
			});		
	}]);
	
	return app;	
});