(function(){
	'use strict';

	angular
		.module('Blocks.router')
		.provider('routeHelperConfig', routeHelperConfig)
		.factory('routeHelper', routeHelper);

	routeHelper.$inject = ['$route', 'routeHelperConfig'];

	function routeHelperConfig(){
		/* jshint validthis: true */
		this.config={};

		this.$get = function(){
			return {
				config: this.config
			};
		};
	}

	function routeHelper($route, routeHelperConfig){

		//this is for ng router
		var $routeProvider = routeHelperConfig.config.$routeProvider;

		// these are for ui router 
		var $stateProvider = routeHelperConfig.config.$stateProvider;
		var $urlRouterProvider = routeHelperConfig.config.$urlRouterProvider;  

		var service = {
			configureRoutes: configureRoutes,
			configureStates: configureStates
		};

		return service;

		function configureRoutes(routes){
            routes.forEach(function (route) {
                //route.config.resolve = angular.extend(route.config.resolve || {}, routehelperConfig.config.resolveAlways);
                $routeProvider.when(route.url, route.config);
            });

            $routeProvider.otherwise({ redirectTo: '/' });
		}	

		function configureStates(states){
			//For any unmatched url, send to /route1
			$urlRouterProvider.otherwise("/route3");
			
			/* nested states */
			$stateProvider
				.state('route1', {
					url: "/route1",
					templateUrl: "app/main/ui_router/route1.html"
				})
					.state('route1.list', {
						url: "/list",
						templateUrl: "app/main/ui_router/route1.list.html",
						controller: function($scope){
							$scope.items = ["A", "List", "Of", "Items"];
						}
					})
			
				.state('route2', {
					url: "/route2", 
					templateUrl: "app/main/ui_router/route2.html"
				})
					.state('route2.list', {
						url: "/list",
						templateUrl: "app/main/ui_router/route2.list.html",
						controller: function($scope){
							$scope.things = ["A", "Set", "Of", "Things"];
						}
					});
	
			/* one state, multiple views */
			$stateProvider.state('state1',{
				views: {
					'view1': {
						templateUrl: 'app/main/ui_router/ui_router_views/view1.html'
					},
					'view2': {
						tempalteUrl: 'app/main/ui_router/ui_router_views/view2.html'
					}
				}
			});
		}
	}
})();
