(function(){
	'use strict';
	angular
		.module('MyApp.main')
		.controller('localstorageFeature', localstorageFeature);

		localstorageFeature.$inject = [];

		function localstorageFeature(){
			var car = {};
			car.wheels = 4;
			car.doors = 2;
			car.sound = 'vroom';
			car.name = 'Lightning McQueen';
			console.log( car );
			localStorage.setItem( 'car', JSON.stringify(car) );
			console.log( JSON.parse( localStorage.getItem( 'car' ) ) );
		}
})();
