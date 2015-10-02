'use strict';

/**
 * @ngdoc function
 * @name rviolatocomApp.controller:HelloCtrl
 * @description
 * # HelloCtrl
 * Controller of the rviolatocomApp
 */

angular.module('rviolatocomApp')
  .controller('HelloCtrl', HelloCtrl)
  .config(config);

HelloCtrl.$inject = ['$scope', '$timeout'];

function HelloCtrl($scope, $timeout){
	var self = this;
	$scope.mainController.menuOpened = false;
	self.state = {
		greetings: false,
		ellipses: false,
	};
	var start = function(){
		$timeout(function(){
			self.state.greetings = true;
		}, 200);
		$timeout(function(){
			self.state.ellipses = true;
		}, 1700);
	};
	if($scope.mainController.pageLoaded){
		start();
	}else{
		$scope.$on('background-load', start);
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