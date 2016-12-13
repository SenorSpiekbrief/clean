define(function (require) {
	'use strict';
	
	var angular = require('angular');	
	
	var module = angular.module('Home', []);		
	
	require('./home.controller')(module);
	require('./home.component')(module);
		
});