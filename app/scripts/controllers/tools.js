'use strict';

/**
 * @ngdoc function
 * @name rviolatocomApp.controller:ToolsCtrl
 * @description
 * # ToolsCtrl
 * Controller of the rviolatocomApp
 */

 angular.module('rviolatocomApp')
  .controller('ToolsCtrl', ToolsController)
  .config(config);

var ToolsController = ['$scope'];

function ToolsController($scope){
	$scope.mainController.header.menuOpened = false;
}

config.$inject = ['$routeProvider'];

function config($routeProvider){
	$routeProvider
      .when('/tools', {
        templateUrl: 'views/tools.html',
        controller: 'ToolsCtrl',
        controllerAs: 'toolsController',
      });
}
