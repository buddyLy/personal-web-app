(function(){
	'use strict';
	angular
		.module('MyApp.directives')
		.controller('CustomersController', CustomersController)
		.controller('CustomOnChange', CustomOnChange);


	CustomOnChange.$inject = ['$scope'];
	CustomersController.$inject = ['$scope'];

	function CustomOnChange(){
		$scope.uploadFile = function(event){
			debugger;
			var files = event.target.files;
			var filename = event.target.files[0].name;
			alert('you have selected: ' + filename);
		};
	}

	function CustomersController($scope){
		//var vm = $scope; 
		var vm = this;
		//var isDisabled = true;
		vm.isDisabled = true;
		vm.uploadFile = function(event){
			debugger;
			//var files = event.targets.files;
			var filename = event.target.files[0].name;
			var tmp1 = event.target.isDisabled;
			vm.isDisabled = false;
			vm.bankfilepath = "this is my path";
			alert('you have selected: ' + filename);
		};

		vm.enablebutton = function(){
			debugger;
			vm.isDisabled = false;
		};

		var counter = 0;
		$scope.customer = {
			name: 'David',
			street: '1234 Anywhere St.'
		};

		$scope.customers = [
			{
				name: 'David',
				street: '1234 Anywhere St.'
			},
			{
				name: 'Tina',
				street: '1800 Crest St.'
			},
			{
				name: 'Michelle',
				street: '890 Main St.'
			}
		];

		$scope.addCustomer = function(){
			counter++;
			$scope.customers.push({
				name: 'New Customer' + counter,
				street: counter + ' Cedar Point St.'
			});
		};

		$scope.changeData = function(){
			counter++;
			$scope.customer = {
				name: 'James',
				street: counter + ' Cedar Point St.'
			};
		};
	}
})();
