'use strict';

(function() {
	angular.module('rviolatocomApp')
		.directive('navigationWrapper', navWrapper);

	navWrapper.$inject = ['$timeout', 'mainSvc'];

	function navWrapper($timeout, mainSvc) {
		var directive = {
			link: postLink
		};

		return directive;

		function postLink($scope, $element) {
			$element.on('mouseleave', mouseleave);

			function mouseleave() {
				if(mainSvc.header.menuOpened){
					$timeout(function() {
						mainSvc.header.menuOpened = '';
					}, 150);
				}
			}
		}
	}
})();