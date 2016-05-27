(function(){
	'use strict'

	angular	
		.module('practica')
		.config(configuration);

		configuration.$inject = ['$routeProvider'];

		function configuration($routeProvider){
			$routeProvider.when('/',{
				templateUrl: 'app/views/home/home.html',
				controller: 'homeController',
        		controllerAs: 'home'
			})
			.otherwise({
	         	redirectTo: '/'
	      	});
		}

})();