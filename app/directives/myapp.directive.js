(function(){
	'use strict';

	angular
		.module('MyApp.directives')
		.directive('myDomDirective', myDomDirective)
		.directive('mySharedScope', mySharedScope)
		.directive('myDirective', myDirective)
		.directive('customOnChange', customOnChange)
		.directive('enableButton', enableButton);

	myDomDirective.$inject = [];
	mySharedScope.$inject = [];
	myDirective.$inject = [];
	customOnChange.$inject = [];
	enableButton.$inject = [];

	function enableButton(){
		var vm = this;
		return {
			restric: 'EA',
			link: function(scope, element, attr){
				debugger;
				element.bind('change', function(){
					scope.$apply(function(){
						vm.isDisabled = false;
					});
				});
			}
		};
	}

	function customOnChange(){
		return {
			restrict: 'EA',
			link: function ($scope, element, attrs){
				var onChangeHandler = $scope.$eval(attrs.customOnChange);
				//element.bind('change', onChangeHandler);
				element.bind('change', function(){
					debugger;
					$scope.isDisabled = false;
					$scope.$apply(function(){
						$scope.isDisabled = false;
					});
				});
				/*
				element.bind('click', function(){
					debugger;
					$scope.isDisabled = false;
				});
				*/
			}
		};
	}

	function myDirective(){
		return {
			restrict: 'EA', //E=element, A=attribute, C=class, M=comment			
			scope: {
				//@ reads the attribute value, = provides two-way binding, & works with functions
				title: '@'
			},
			template: '<div>{{myVal}}</div>',
			templateUrl: 'mytemplate.html',
			controller: function(){}, //Emded a custom controller in the directive
			link: function($scope, element, attrs){} //Dome manipulation
		};
		/*

    		Property	Description
			restrict	Determines where a directive can be used (as an element, attribute, CSS class, or comment).
			scope	Used to create a new child scope or an isolate scope.
			template	Defines the content that should be output from the directive. Can include HTML, data binding expressions, and even other directives.
			templateUrl	Provides the path to the template that should be used by the directive. It can optionally contain a DOM element id when templates are defined in <script> tags.
			controller	Used to define the controller that will be associated with the directive template.
			link	Function used for DOM manipulation tasks.
		*/
	}

	function mySharedScope(){
		return {
			template: 'Name: {{customer.name}}</br /> Street: {{customer.street}}'
		};
	}

	function myDomDirective(){
		var mydirective = {
			link: linkfunc
		};

		return mydirective;
	}

	function linkfunc($scope, element, attrs){
		element.bind('click', function(){
			debugger;
			element.html('You clicked me');	
			$scope.isDisabled = false;
		});	
		element.bind('mouseenter', function(){
			element.css('background-color', 'yellow');	
		});
		element.bind('mouseleave', function(){
			element.css('background-color', 'blue');		
		});
	}
})();
