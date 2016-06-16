(function(){
	'use strict';

	var core = angular.module('MyApp.core');
	core.config(configure);

	configure.$inject = ['$routeProvider', 'routeHelperConfigProvider', '$stateProvider', '$urlRouterProvider'];

	function configure($routeProvider, routeHelperConfigProvider, $stateProvider, $urlRouterProvider ){
		//set ng route provider
		routeHelperConfigProvider.config.$routeProvider = $routeProvider;

		//set ui route provider
		routeHelperConfigProvider.config.$stateProvider = $stateProvider;
		routeHelperConfigProvider.config.$urlRouterProvider = $urlRouterProvider;
	}
})();
