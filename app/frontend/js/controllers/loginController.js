'use strict'
angular.module('myapp')
	.controller('LoginController', function($scope, $cookies, $location, $window){
		$scope.a = false;
	
		$scope.login = function(){
			// TODO: call the login service
			// upon authenticate
			// create a auth cookies
		}

		// TODO: watch for the auth cookies here
		if($scope.a == true){
			console.log('admin here');
			//$window.location.href = '/admin'; // redirect to a new page
		}
	});