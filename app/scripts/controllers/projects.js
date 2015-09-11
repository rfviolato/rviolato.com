'use strict';

/**
 * @ngdoc function
 * @name rviolatocomApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the rviolatocomApp
 */
angular.module('rviolatocomApp')
  .controller('ProjectsCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
      var self = this;
      $scope.mainController.header.menuOpened = false;
      self.projects = {
          openedProject: -1,
          isOpened: false,
          phaseOne: false,
          phaseTwo: false,
      };
      self.openProject = function(index){
          self.projects.openedProject = index;
          self.projects.phaseOne = true;
          self.projects.isOpened = true;
          $timeout(function(){
              self.projects.phaseTwo = true;
          }, 750);
      };
      self.closeProject = function(){
          self.projects.phaseTwo = false;
          self.projects.isOpened = false;
          $timeout(function(){
              self.projects.openedProject = -1;
              self.projects.phaseOne = false;
          },750);
      };
    }]);
