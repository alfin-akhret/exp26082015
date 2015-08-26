'use strict'
angular.module('myapp')
	.controller('LoginController', function($scope, $cookies, $location, $window, $http, $q){
		$scope.a = false;
	
		// encryption test
		var pubKey = "b'-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7bbMnigtZHfJw42KjDeI\ng1XRctjlfNaLkXxM7KIgMeMr71omzinxQhTKZEKW/3h5Ak+PyGBuN7uN1mm6kZB/\nHl2ROCjg4L47AiaWI/KfT5FoEGGVnRDbT5yPU6NPcNhd3HXFL+mVPVC05/maJe7T\nrFkDTvyP13YJbGEnOEhjQ17ib1qz6wK3JJ27xq8Q0bVHU+f0ZQVC12EsQPStlf/a\nfddbpzbiaBX7ecF8n/vgesVPmXnD78ypIbiz5TyfPm77bzqKyaDTo9XkbVoSeNau\nUslflm/n5USNQfUKejHqaFIxCQu4D/yrVccdbp3XC+L5Yxe7TxnHA9VAvQL4WcTw\ngwIDAQAB\n-----END PUBLIC KEY-----'"
		var encrypter = new JSEncrypt;
		encrypter.setPublicKey(pubKey);
		var chiper = encrypter.encrypt('Testing...');

	  // post request to server, let see if the server can decrypt it
	  $scope.testEncryption = function(){
	  	// this supposed to use POST, but for simplicity we use GET for now
	  	var d = $q.defer();
	  	$http.get('/test-enc?chiper='+chiper)
	  		.success(function(r){
	  			console.log(r);
	  		})
	  }

	  $scope.testEncryption();

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