(function() {
	angular
		.module('myApp', [])
		.controller('HeaderController', ['$scope', function($scope) {
			$scope.showText2 = function() {
				$scope.hidetext = !$scope.hidetext;
			};
		}]);
})();