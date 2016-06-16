//wrap in an iife to prevent global variable clash
(function(){
	'use strict';
	
	//this is the main module, put all of the dependency modules here
	angular.module('MyApp', [
		'MyApp.directives',
		'MyApp.services',
		'MyApp.layout',
		'MyApp.core',
		'MyApp.main'
	]);
})();
