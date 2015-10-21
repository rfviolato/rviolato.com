'use strict';

angular.module('rviolatocomApp')
  .controller('HelloCtrl', HelloCtrl)
  .config(config);

HelloCtrl.$inject = ['$scope', '$timeout', 'mainSvc'];

function HelloCtrl($scope, $timeout, mainSvc){
	var vm = this;

	mainSvc.menuOpened = false;
	vm.state = {
		greetings: false,
		ellipses: false,
	};

	if(mainSvc.pageLoaded){
		start();
	}else{
		$scope.$on('background-load', start);
	}

	function start(){
		$timeout(function(){
			vm.state.greetings = true;
		}, 200);
		$timeout(function(){
			vm.state.ellipses = true;
		}, 1700);
	}
}

config.$inject = ['$routeProvider'];

function config($routeProvider){
	$routeProvider	
	  .when('/', {
	    templateUrl: 'views/hello.html',
	    controller: 'HelloCtrl',
	    controllerAs: 'helloController',
	    // resolve: HelloCtrl.init,
	  });
}