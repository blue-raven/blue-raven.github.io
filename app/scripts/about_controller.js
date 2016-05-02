angular.module('sandboxApp')
	.controller('aboutController', ['$scope', function($scope) {
		
		$scope.msg = 'Look! I am an about page.';
		$scope.class = 'page-about';
	}]);
