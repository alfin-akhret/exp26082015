'use strict';
/**
 * myapp an angular module
 * @author alfin akhret <alfin.akhret@gmail.com>
 * @dependencies ngRoute
 */
(function(){
	angular.module('myapp', ['ngRoute', 'ngCookies'])
		.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){
			// set '_login.html' partial sebagai default view pada '/'
			// set 'LoginController' sebagai defaul controller pada _login partial
			$routeProvider.when('/', {
				templateUrl: '../frontend/partials/_login.html',
				controller: 'LoginController'
			})
			// hilangkan "#" pada url
			$locationProvider.html5Mode({
				enabled: true,
  			requireBase: false
			}); 
		}]);
})();		