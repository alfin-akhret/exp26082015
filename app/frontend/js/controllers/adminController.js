'use strict'
angular.module('myapp')
	.controller('AdminController', function($scope, $cookies, $window){
		if(typeof $cookies.isAuth == 'undefined' || $cookies.isAuth == false){
			$window.location.href = '/'; // redirect to a new page
		}
	});