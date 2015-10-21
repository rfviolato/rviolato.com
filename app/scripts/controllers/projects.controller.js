'use strict';

angular.module('rviolatocomApp')
  .controller('ProjectsCtrl', ProjectsCtrl)
  .config(config);

  ProjectsCtrl.$inject = ['mainSvc', 'projectsSvc'];

  function ProjectsCtrl(mainSvc, projectsSvc) {
    var vm = this;

    vm.data = projectsSvc;

    mainSvc.header.menuOpened = false;
  }

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    $routeProvider
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects',
      });
  }
