'use strict';

angular.module('rviolatocomApp')
  .directive('globalCtrl', globalCtrl);

  // globalCtrl.$inject = [];

  function globalCtrl() {
    var directive = {
      controller: 'MainCtrl',
      controllerAs: 'main'
    };

    return directive;

  }
