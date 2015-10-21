'use strict';

angular.module('rviolatocomApp')
  .directive('globalCtrl', globalCtrl);

  // globalCtrl.$inject = [];

  function globalCtrl() {
    var directive = {
      controller: 'MainCtrl as mainController',
      controllerAs: 'mainController'
    };

    return directive;

  }
