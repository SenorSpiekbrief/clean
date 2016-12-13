define(function (require) {
	'use strict';
	
	var angular = require('angular');
	
	require('./header/header.module');
	require('./footer/footer.module');
	require('./home/home.module');	
	
	var module = angular.module('Components', ['Header', 'Footer', 'Home']);	
});