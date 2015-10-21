'use strict';

angular.module('rviolatocomApp')
  .controller('HelloCtrl', HelloCtrl);

HelloCtrl.$inject = ['$scope', '$timeout', 'mainSvc', 'helloSvc'];

function HelloCtrl($scope, $timeout, mainSvc, helloSvc){
	var vm = this;

	vm.data = helloSvc;
	mainSvc.menuOpened = false;

	if(mainSvc.pageLoaded){
		start();
	}else{
		$scope.$on('background-load', start);
	}

	function start(){
		$timeout(function(){
			helloSvc.state.greetings = true;
		}, 200);
		$timeout(function(){
			helloSvc.state.ellipses = true;
		}, 1700);
	}
}