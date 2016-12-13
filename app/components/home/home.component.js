define(function (require) {
	return function (module) {
		'use strict';
			
		module.component('homeComponent', {
			templateUrl: './home.html',
			controller: 'HomeController'		
		});	
	}
});