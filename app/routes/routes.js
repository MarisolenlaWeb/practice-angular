(function(){
	'use strict'

	angular	
		.module('practica')
		.config(configuration);

		configuration.$inject = ['$routeProvider'];

		function configuration($routeProvider){
			$routeProvider.when('/',{
				controller: 'homeController',
        		controllerAs: 'home',
        		templateUrl: 'app/views/home/home.html'
			}).when('/servicios',{
				controller: 'serviciosController',
				controllerAs: 'servicios',
				templateUrl: 'app/views/servicios/servicios.html'

			}).when('/portafolio',{
				controller: 'portafolioController',
				controllerAs: 'portafolio',
				templateUrl: 'app/views/portafolio/portafolio.html'

			}).otherwise({
	         	redirectTo: '/'
	      	});
		}

})();