'use strict';

/**
 * @ngdoc function
 * @name rviolatocomApp.controller:ToolsCtrl
 * @description
 * # ToolsCtrl
 * Controller of the rviolatocomApp
 */

var ToolsController = ['$scope', function($scope){
	$scope.mainController.header.menuOpened = false;
}];

var config = ['$routeProvider', function($routeProvider){
	$routeProvider
      .when('/tools', {
        templateUrl: 'views/tools.html',
        controller: 'ToolsCtrl',
        controllerAs: 'toolsController',
      });
}];

angular.module('rviolatocomApp')
  .controller('ToolsCtrl', ToolsController)
  .config(config);
