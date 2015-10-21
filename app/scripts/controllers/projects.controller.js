'use strict';

angular.module('rviolatocomApp')
  .controller('ProjectsCtrl', ProjectsCtrl);

  ProjectsCtrl.$inject = ['mainSvc', 'projectsSvc'];

  function ProjectsCtrl(mainSvc, projectsSvc) {
    var vm = this;

    vm.data = projectsSvc;

    mainSvc.header.menuOpened = false;
  }
