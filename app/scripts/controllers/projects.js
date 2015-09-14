'use strict';

/**
 * @ngdoc function
 * @name rviolatocomApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the rviolatocomApp
 */
angular.module('rviolatocomApp')
  .controller('ProjectsCtrl', ProjectsCtrl);

  ProjectsCtrl.$inject = ['$scope', '$timeout'];

  function ProjectsCtrl($scope, $timeout) {
      var vm = this;

      $scope.mainController.header.menuOpened = false;

      vm.projects = {
          openedProject: -1,
          isOpened: false,
          phaseOne: false,
          phaseTwo: false,
      };
      vm.openProject = openProject;
      vm.closeProject = closeProject;

      function openProject(index){
          vm.projects.openedProject = index;
          vm.projects.phaseOne = true;
          vm.projects.isOpened = true;
          $timeout(function(){
              vm.projects.phaseTwo = true;
          }, 750);
      }

      function closeProject(){
          vm.projects.phaseTwo = false;
          vm.projects.isOpened = false;
          $timeout(function(){
              vm.projects.openedProject = -1;
              vm.projects.phaseOne = false;
          },750);
      }
    }
