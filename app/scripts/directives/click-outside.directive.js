'use strict';

(function() {
	angular.module('rviolatocomApp')
		.directive('clickOutside', clickOutside);

	clickOutside.$inject = ['$rootScope'];

	function clickOutside($rootScope) {
		var directive = {
			scope: {
				prevent: '&outsideIfNot'
			},
			link: postLink
		};

		return directive;

		function postLink($scope, $element) {
			$element.on('click', onclick);
			
			function onclick() {
				if($scope.prevent()){
					$rootScope.$emit('clicked-outside');
				}
			}
		}
	}
})();