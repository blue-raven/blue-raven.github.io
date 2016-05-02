var sandboxApp = angular.module('sandboxApp', ['ngRoute', 'ngAnimate']);


sandboxApp.config( function( $routeProvider ) {
	
	$routeProvider
		.when('/', {
			
			templateUrl: 'app/pages/home.html',
			controller: 'sandboxController'
		})
		.when('/about', {
			
			templateUrl: 'app/pages/about.html',
			controller: 'aboutController'
		})
		.when('/scriptlets', {
			
			templateUrl: 'app/pages/scriptlets.html',
			controller: 'scriptletsController'
		});
		
});


sandboxApp.controller('sandboxController', function( $scope ) {
	
	$scope.msg = "Everything wurks!";
	$scope.class = 'page-home';
});
