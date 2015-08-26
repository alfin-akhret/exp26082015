'use strict';
(function(){
	angular.module('myapp', ['ngRoute'])
		.config(['$routeProvider', function($routeProvider, LoginController){
			$routeProvider.when('/', {
				templateUrl: '../frontend/partials/_login.html',
				controller: 'LoginController'
			})
		}]);
})();		