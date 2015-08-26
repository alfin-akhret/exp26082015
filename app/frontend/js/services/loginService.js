'use strict';
angular.module('myapp')
	.factory('authService', function($http, $q){
		return{
			auth: function(username, password){
				// TODO: encrypt password menngunakan public key
				// sehingga attacker tidak bisa ngintip password yang asli
				// sekalipun dia bisa dapet hash nya				
				
				
				// TODO: send post request
				// auto include pasangan X-XSRF-TOKEN dan cookie:XSRF-TOKEN sebagai header untuk menghalangi CSRF attack
			}
		}
	});