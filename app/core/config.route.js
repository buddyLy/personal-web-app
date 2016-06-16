(function(){
	'use strict';
	angular
		.module('MyApp.main')
		.run(appRun);

	appRun.$inject = ['routeHelper'];

	function appRun(routeHelper){
		var myRoutes = getRoutes;

		//add routes to ng router
		routeHelper.configureRoutes(myRoutes());	
		
		//call states to ui router
		routeHelper.configureStates();
	}

	function getRoutes(){
		var myRoutes = [
			{
				url: '/',
				config: {
					templateUrl: 'app/main/home/home.html',
					controller: 'home',
					controllerAs: 'vm'
				}
			},
			{
				url: '/main/tabs',
				config: {
					templateUrl: 'app/main/tabs/tabs.html',
					controller: 'tabs',
					controllerAs: 'vm'
				}
			},
			{
				url: '/main/chords',
				config: {
					templateUrl: 'app/main/chords/chords.html',
					controller: 'chords',
					controllerAs: 'vm'
				}
			},
			{
				url: '/main/resources',
				config: {
					templateUrl: 'app/main/resources/resources.html',
					controller: 'resoures',
					controllerAs: 'vm'
				}
			},
			{
				url: '/main/karaoke',
				config: {
					templateUrl: 'app/main/karaoke/karaoke.html',
					controller: 'karaoke',
					controllerAs: 'vm'
				}
			},

			//all songs goes here
			{
				url: '/chords/tuongniem',
				config: {
					//templateUrl: 'app/main/chords/songs/tuong-niem.html',
					templateUrl: 'app/main/chords#tuongniem',
					controller: 'chords',
					controllerAs: 'vm'
				}
			},
			{
				url: '/chords/canonind',
				config: {
					templateUrl: 'app/main/chords/songs/canonind.html',
					controller: 'chords',
					controllerAs: 'vm'
				}
			},
			{
				url: '/chords/stairwaytoheaven',
				config: {
					templateUrl: 'app/main/chords/songs/stairwaytoheaven.html',
					controller: 'chords',
					controllerAs: 'vm'
				}
			},
			{
				url: '/chords/duabe',
				config: {
					//templateUrl: 'app/main/chords/songs/dua-be.html',
					templateUrl: 'app/main/chords#duabe',
					controller: 'chords',
					controllerAs: 'vm'
				}
			},
			{
				url: '/chords/thuongnhaungaymua',
				config: {
					templateUrl: 'app/main/chords/songs/thuong-nhau-ngay-mua.html',
					controller: 'chords',
					controllerAs: 'vm'
				}
			},
			{
				url: '/chords/riengmotgoctroi',
				config: {
					templateUrl: 'app/main/chords/songs/rieng-mot-goc-troi.html',
					controller: 'chords',
					controllerAs: 'vm'
				}
			},
			{
				url: '/chords/nhumotloichiatay',
				config: {
					templateUrl: 'app/main/chords/songs/nhu-mot-loi-chia-tay.html',
					controller: 'chords',
					controllerAs: 'vm'
				}
			},
			{
				url: '/chords/dauchandiadang',
				config: {
					templateUrl: 'app/main/chords/songs/dau-chan-dia-dang.html',
					controller: 'chords',
					controllerAs: 'vm'
				}
			},
			{
				url: '/chords/benemdangcota',
				config: {
					templateUrl: 'app/main/chords/songs/ben-em-dang-co-ta.html',
					controller: 'chords',
					controllerAs: 'vm'
				}
			},
			{
				url: '/chords/motngayvietnam',
				config: {
					templateUrl: 'app/main/chords/songs/mot-ngay-viet-nam.html',
					controller: 'chords',
					controllerAs: 'vm'
				}
			},

		];	
		
		return myRoutes;
	}

})();
