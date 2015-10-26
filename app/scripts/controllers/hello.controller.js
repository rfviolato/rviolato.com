'use strict';

angular.module('rviolatocomApp')
  .controller('HelloCtrl', HelloCtrl);

HelloCtrl.$inject = ['$scope', '$timeout', 'mainSvc', 'helloSvc'];

function HelloCtrl($scope, $timeout, mainSvc, helloSvc){
	var vm = this;
	var events = [];

	vm.data = helloSvc;
	mainSvc.menuOpened = false;

	if(mainSvc.pageLoaded){
		start();
	}else{
		events.push($scope.$on('background-load', start));
	}

	$scope.$on('$destroy', destroy);

	function start(){
		$timeout(function(){
			helloSvc.state.greetings = true;
		}, 200);
		$timeout(function(){
			helloSvc.state.ellipses = true;
		}, 1700);
	}

	function destroy() {
		helloSvc.state.greetings = false;
		helloSvc.state.ellipses = false;

		events.forEach(function(unsubscribe) {
			unsubscribe();
		});
	}
}